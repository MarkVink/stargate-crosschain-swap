import {ethers} from 'ethers';

export enum StargateBlockchainType {
    Ethereum = 'Ethereum',
    BnbChain = 'BnbChain',
    Avalanche = 'Avalanche',
    Polygon = 'Polygon',
    Arbitrum = 'Arbitrum',
    Optimism = 'Optimism',
    Fantom = 'Fantom'
}

/**
 * ChainId values needed for Cross-chain swap on Stargate
 */
export const BlockchainToChainId = {
    [StargateBlockchainType.Ethereum]: 101,
    [StargateBlockchainType.BnbChain]: 102,
    [StargateBlockchainType.Avalanche]: 106,
    [StargateBlockchainType.Polygon]: 109,
    [StargateBlockchainType.Arbitrum]: 110,
    [StargateBlockchainType.Optimism]: 111,
    [StargateBlockchainType.Fantom]: 112,
}

/**
 * Router addresses
 * https://stargateprotocol.gitbook.io/stargate/developers/contract-addresses/mainnet
 */
export const BlockchainToRouterAddress = {
    [StargateBlockchainType.Ethereum]: '0x8731d54E9D02c286767d56ac03e8037C07e01e98',
    [StargateBlockchainType.BnbChain]: '0x4a364f8c717cAAD9A442737Eb7b8A55cc6cf18D8',
    [StargateBlockchainType.Avalanche]: '0x45A01E4e04F14f7A4a6702c74187c5F6222033cd',
    [StargateBlockchainType.Polygon]: '0x45A01E4e04F14f7A4a6702c74187c5F6222033cd',
    [StargateBlockchainType.Arbitrum]: '0x53Bf833A5d6c4ddA888F69c22C88C9f356a41614',
    [StargateBlockchainType.Optimism]: '0xB0D502E938ed5f4df2E681fE6E419ff29631d62b',
    [StargateBlockchainType.Fantom]: '0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6',
}

export const StargateTokenAddress = {
    [StargateBlockchainType.Ethereum]: '0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6',
    [StargateBlockchainType.BnbChain]: '0xB0D502E938ed5f4df2E681fE6E419ff29631d62b',
    [StargateBlockchainType.Avalanche]: '0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590',
    [StargateBlockchainType.Polygon]: '0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590',
    [StargateBlockchainType.Arbitrum]: '0x6694340fc020c5E6B96567843da2df01b2CE1eb6',
    [StargateBlockchainType.Optimism]: '0x296F55F8Fb28E498B858d0BcDA06D955B2Cb3f97',
    [StargateBlockchainType.Fantom]: '0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590',
}

/**
 * URLs for RPC providers for every network
 */
export const BlockchainToRpcProvider = {
    [StargateBlockchainType.Ethereum]: 'https://eth.llamarpc.com',
    [StargateBlockchainType.BnbChain]: 'https://bsc-dataseed.binance.org',
    [StargateBlockchainType.Avalanche]: 'https://avalanche.public-rpc.com',
    [StargateBlockchainType.Polygon]: 'https://polygon-rpc.com/',
    [StargateBlockchainType.Arbitrum]: 'https://arbitrum-one.public.blastapi.io',
    [StargateBlockchainType.Optimism]: 'https://mainnet.optimism.io',
    [StargateBlockchainType.Fantom]: 'https://rpc.ftm.tools',
}

export const BlockchainToScannerUrl = {
    [StargateBlockchainType.Ethereum]: 'https://etherscan.io',
    [StargateBlockchainType.BnbChain]: 'https://bscscan.com',
    [StargateBlockchainType.Avalanche]: 'https://avascan.info',
    [StargateBlockchainType.Polygon]: 'https://polygonscan.com',
    [StargateBlockchainType.Arbitrum]: 'https://arbiscan.io',
    [StargateBlockchainType.Optimism]: 'https://optimistic.etherscan.io',
    [StargateBlockchainType.Fantom]: 'https://ftmscan.com',
}

export function initProvider(blockchain: StargateBlockchainType) {
    return new ethers.providers.JsonRpcProvider(BlockchainToRpcProvider[blockchain])
}

export function initAll() {
    const keys = Object.keys(StargateBlockchainType).filter((v) => isNaN(Number(v)));
    let result: { [key in StargateBlockchainType]?: any } = {};

    keys.forEach((blockchain, index) => {
        const enumValue = StargateBlockchainType[blockchain as keyof typeof StargateBlockchainType];
        result[enumValue] = initProvider(enumValue)
    })

    return result;
}