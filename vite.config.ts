import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import type { Plugin } from 'vite';
import type { IncomingMessage, ServerResponse } from 'node:http';

const PROXY_PATH = '/__rpc_proxy__';

function readRequestBody(req: IncomingMessage): Promise<Buffer> {
	return new Promise((resolve, reject) => {
		const chunks: Buffer[] = [];
		req.on('data', (chunk) => chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk)));
		req.on('end', () => resolve(Buffer.concat(chunks)));
		req.on('error', reject);
	});
}

function createRpcProxyMiddleware() {
	return async (req: IncomingMessage, res: ServerResponse, next: () => void) => {
		if (!req.url || !req.url.startsWith(PROXY_PATH)) {
			next();
			return;
		}

		const parsedUrl = new URL(req.url, 'http://localhost');
		const target = parsedUrl.searchParams.get('target');
		if (!target || (!target.startsWith('http://') && !target.startsWith('https://'))) {
			res.statusCode = 400;
			res.end('invalid rpc target');
			return;
		}

		try {
			const body = await readRequestBody(req);
			const headers = new Headers();
			for (const [key, value] of Object.entries(req.headers)) {
				if (
					value === undefined ||
					key === 'host' ||
					key === 'content-length' ||
					key === 'accept-encoding'
				) {
					continue;
				}
				if (Array.isArray(value)) {
					for (const v of value) headers.append(key, v);
				} else {
					headers.set(key, value);
				}
			}

			const upstream = await fetch(target, {
				method: req.method ?? 'POST',
				headers,
				body:
					req.method === 'GET' || req.method === 'HEAD' || body.byteLength === 0
						? undefined
						: new Uint8Array(body)
			});

			res.statusCode = upstream.status;
			const responseBody = Buffer.from(await upstream.arrayBuffer());
			upstream.headers.forEach((value, key) => {
				if (key === 'transfer-encoding' || key === 'content-encoding' || key === 'content-length') {
					return;
				}
				res.setHeader(key, value);
			});
			res.setHeader('content-length', responseBody.byteLength.toString());
			res.end(responseBody);
		} catch (error) {
			res.statusCode = 502;
			res.end(error instanceof Error ? error.message : 'proxy failed');
		}
	};
}

function devRpcProxyPlugin(): Plugin {
	const middleware = createRpcProxyMiddleware();

	return {
		name: 'dev-rpc-proxy',
		configureServer(server) {
			server.middlewares.use(middleware);
		},
		configurePreviewServer(server) {
			server.middlewares.use(middleware);
		}
	};
}

export default defineConfig({
	plugins: [tailwindcss(), devRpcProxyPlugin(), sveltekit()],
	test: {
		expect: { requireAssertions: true },
		projects: [
			{
				extends: './vite.config.ts',
				test: {
					name: 'client',
					environment: 'browser',
					browser: {
						enabled: true,
						provider: 'playwright',
						instances: [{ browser: 'chromium' }]
					},
					include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
					exclude: ['src/lib/server/**'],
					setupFiles: ['./vitest-setup-client.ts']
				}
			},
			{
				extends: './vite.config.ts',
				test: {
					name: 'server',
					environment: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}', 'tests/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
				}
			}
		]
	}
});
