<a href="https://www.hyperverse.dev/#gh-dark-mode-only" style="text-decoration: none">
	<img src="/.github/Hyperverse_Logo_Vertical_White.png#gh-dark-mode-only" style="height: 70px" alt="Hyperverse logo" />
</a>
<a href="https://www.hyperverse.dev/#gh-light-mode-only" style="text-decoration: none">
	<img src="/.github//Hyperverse_Logo_Vertical_Blue.png#gh-light-mode-only" style="height: 70px" alt="Hyperverse logo" />
</a>
<a href="https://celo.org/#gh-dark-mode-only" style="text-decoration: none">
	<img src="/packages/hyperverse-celo/.github/celo-logo-reversed.svg#gh-dark-mode-only" alt="Celo logo" style="height: 70px" />
</a>
<a href="https://celo.org/#gh-light-mode-only" style="text-decoration: none">
	<img src="/packages/hyperverse-celo/.github/celo-logo.svg#gh-light-mode-only" alt="Celo logo" style="height: 70px" />
</a>

# Hyperverse EVM Celo

This module allows you to connect to the Celo blockchain using the Hyperverse dependencies for quickly getting your web2 website or application onto web3

_Note: This module acts as a configuration module for the base implementation found in Hyperverse-EVM module_

## Installation

`npm install @decentology/hyperverse @decentology/hyperverse-evm-celo`

## Features

-   Connecting to Celo blockchain mainnet and testnet
-   Accessing signer from [Rainbowkit](https://www.npmjs.com/package/@rainbow-me/rainbowkit) wallet provider
-   Access to all [EVM supported Hyperverse modules](https://www.npmjs.com/search?q=%40decentology%2Fhyperverse-evm)

## Getting Started

### Initialize Hyperverse

```typescript
import { initialize } from '@decentology/hyperverse';
import { Celo } from '@decentology/hyperverse-celo';
const hyperverse = initialize({
	blockchain: Celo,
	network: Network.Testnet,
	modules: [],
});
```

### Wrap application in `Provider`

```typescript
import { Provider } from '@decentology/hyperverse';
function MyApp() {
	return <Provider initialState={hyperverse}>...Your components</Provider>;
}
```

### Getting signer

```typescript
import { useCelo } from '@decentology/hyperverse-evm-celo';
function Component() {
	const { signer } = useCelo();
	return <div>{signer}</div>;
}
```

## Primary Dependencies

-   [Hyperverse](https://www.npmjs.com/package/@decentology/hyperverse)
-   [Hyperverse EVM](https://www.npmjs.com/package/@decentology/hyperverse-evm)

# Documentation

For more information and learn about Hyperverse checkout the resources below

-   [Hyperverse Documentation](https://docs.hyperverse.dev/)
-   [Decentology YouTube Channel](https://www.youtube.com/c/Decentology)
