import dotenv from 'dotenv'
import {ethers} from 'ethers'

dotenv.config();

async function main() {
    const randomWallet = ethers.Wallet.createRandom();

    console.log(randomWallet.address)
    console.log(randomWallet.privateKey)
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
