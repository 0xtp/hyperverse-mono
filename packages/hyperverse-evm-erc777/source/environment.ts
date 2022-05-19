import {
	isEvm,
	Blockchain,
	BlockchainEvm,
	EvmEnvironment,
	NetworkConfig,
} from '@decentology/hyperverse';
import { ContractInterface } from 'ethers';
import Contracts from '../contracts.json';

import ERC777Factory from '../artifacts/contracts/ERC777Factory.sol/ERC777Factory.json';
import ERC777 from '../artifacts/contracts/ERC777.sol/ERC777.json';
export const ContractABI = ERC777.abi;
export const FactoryABI = ERC777Factory.abi;

const environment = Contracts as EvmEnvironment;

function getEnvironment(blockchainName: Blockchain, network: NetworkConfig) {
	if (blockchainName == null) {
		throw new Error('Blockchain is not set');
	}
	if (!isEvm(blockchainName)) {
		throw new Error('Blockchain is not EVM compatible');
	}

	const chain = environment[blockchainName as BlockchainEvm];
	if (!chain) {
		throw new Error('Blockchain is not supported');
	}

	const env = chain[network.type];
	return {
		...env,
		ContractABI,
		FactoryABI,
	};
}

export { environment, getEnvironment };
