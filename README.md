# eth-ui

A lightweight Ethereum scanner focused on clarity, simplicity, and essential on-chain data.  
This project provides a minimal, fast, and developer-friendly interface for exploring blocks, transactions, and addresses without the overhead of a full blockchain explorer.

- Live Site: <https://code0xff.github.io/eth-ui>
- Repository: <https://github.com/code0xff/eth-ui>

---

## Features

### Lightweight Block, Transaction, and Address Views

Clean, readable UI for essential Ethereum data:

- Block information (gas used, miner, timestamp, transactions)
- Transaction metadata (from, to, value, gas, status)
- Address balance and basic account details

### Raw Contract Interaction Details

eth-ui intentionally avoids heavy ABI-based decoding.  
Instead, it presents low-level contract data clearly:

- Raw calldata (hex)
- Contract bytecode and size
- Basic contract metadata

### Real-Time Updates & Connectivity Recovery

- Automatically reconnects when WebSocket connections drop
- Resumes updates when the browser returns from idle or sleep
- Refreshes block and transaction data on new block arrival

### Developer-Oriented, Minimal UI

Designed to be:

- Easy to understand
- Simple to extend
- Useful for local or forked Ethereum chains
- Ideal for debugging and low-level contract inspection

### Modular and Extendable

Can be integrated into larger dashboards or tooling, including:

- Provider initialization utilities
- Small helper functions
- Reusable layout patterns

---

## Getting Started

### 1. Clone the repository

```shell
git clone https://github.com/code0xff/eth-ui
cd eth-ui
```

### 2. Install dependencies

```shell
npm install
```

### 3. Run development server

```shell
npm run dev
```

### 4. Build for production

```shell
npm run build
```

### 5. Deploy to GitHub Pages

```shell
npm run deploy
```

### 6. Run with Docker

Build and run with Docker Compose:

```shell
docker compose up --build -d
```

Open `http://localhost:8080`.

Run directly with Docker:

```shell
docker build -t eth-ui .
docker run --rm -p 8080:80 eth-ui
```

If you need GitHub Pages base path in container build:

```shell
docker build --build-arg BASE_PATH=/eth-ui -t eth-ui .
```

### 7. Run tests

Test prerequisites:

- Node.js and npm installed
- For browser-based Vitest runs, Playwright Chromium installed (`npx playwright install chromium`)
- For Anvil integration test, Foundry Anvil installed and available at `~/.foundry/bin/anvil`
- For a custom Anvil binary path, use `ANVIL_BIN=/path/to/anvil`
- `test:anvil` uses `127.0.0.1:8547`, so make sure the port is available

Run all unit tests once:

```shell
npm test
```

Run unit tests in watch mode:

```shell
npm run test:unit
```

Before running integration test with local Anvil, set up once:

1. Install Foundry (includes Anvil):

```shell
curl -L https://foundry.paradigm.xyz | bash
foundryup
```

2. Confirm Anvil binary path:

```shell
~/.foundry/bin/anvil --version
```

3. If Anvil is installed in another location, set `ANVIL_BIN`:

```shell
ANVIL_BIN=/path/to/anvil npm run test:anvil
```

4. Ensure `127.0.0.1:8547` is free (used by `test:anvil`).

Run integration test with local Anvil:

```shell
npm run test:anvil
```

---

## Project Goals

- Provide a clean and intuitive UI for essential on-chain data
- Offer a lightweight alternative to heavy explorers like Etherscan or Blockscout
- Keep the code simple, modular, and easy to integrate
- Serve as a minimal debugging tool for private Ethereum chains and development environments

---

## Contributing

Contributions and feedback are welcome.

1. Open an issue or discussion
2. Submit a pull request
3. Follow the existing project structure and style

---

## License

Apache-2.0
