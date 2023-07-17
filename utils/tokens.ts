import {StargateBlockchainType} from "./providers";

export enum TokenType {
    USDC = 'USDC',
    USDT = 'USDT',
    DAI = 'DAI',
    BUSD = 'BUSD',
}

// https://stargateprotocol.gitbook.io/stargate/developers/official-erc20-addresses
// https://stargateprotocol.gitbook.io/stargate/developers/pool-ids
export const BlockchainToToken: any = {
    [StargateBlockchainType.Fantom]: {
        [TokenType.USDC]: {
            address: '0x04068da6c83afcfa0e13ba15a6696662335d5b75',
            poolId: 1,
            decimals: 6
        }
    },
    [StargateBlockchainType.Polygon]: {
        [TokenType.USDC]: {
            address: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
            poolId: 1,
            decimals: 6
        },
        [TokenType.USDT]: {
            address: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
            poolId: 2,
            decimals: 6
        },
        [TokenType.DAI]: {
            address: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
            poolId: 3,
            decimals: 18
        },
    },
    [StargateBlockchainType.Avalanche]: {
        [TokenType.USDC]: {
            address: '0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e',
            poolId: 1,
            decimals: 6
        },
        [TokenType.USDT]: {
            address: '0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7',
            poolId: 2,
            decimals: 6
        }
    },
    [StargateBlockchainType.Arbitrum]: {
        [TokenType.USDC]: {
            address: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
            poolId: 1,
            decimals: 6
        },
        [TokenType.USDT]: {
            address: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
            poolId: 2,
            decimals: 6
        },
    },
    [StargateBlockchainType.Optimism]: {
        [TokenType.USDC]: {
            address: '0x7f5c764cbc14f9669b88837ca1490cca17c31607',
            poolId: 1,
            decimals: 6
        },
        [TokenType.DAI]: {
            address: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
            poolId: 3,
            decimals: 18
        },
    },
    [StargateBlockchainType.BnbChain]: {
        [TokenType.USDT]: {
            address: '0x55d398326f99059fF775485246999027B3197955',
            poolId: 2,
            decimals: 18
        },
        [TokenType.BUSD]: {
            address: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
            poolId: 5,
            decimals: 18
        },
    }
};
