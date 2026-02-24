import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const isProduction = process.env.NODE_ENV === 'production';
const basePath = process.env.BASE_PATH ?? (isProduction ? '/eth-ui' : '');

const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({ fallback: '404.html' }),
		alias: {
			'@/*': './src/lib/*'
		},
		paths: {
			base: basePath
		}
	}
};

export default config;
