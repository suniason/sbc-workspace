import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))

const publickey = new Web3.PublicKey("ABiUEDLkqaJUJVJKtzavVtsiQxGhBp1gQJAfYKdNGSRr")
const decoded = base58.decode('2FNuVJJyqKruGWc4rCrard2ARVeFCd4QJYdh3ec72L6ZXPpbo3jE2Hc3jevLstp6495EBdbwxfDpymPrDMFbBBik')
const keyPair = Web3.Keypair.fromSecretKey(decoded)

async function main(){
    const tokenMint = await token.createMint(
        connection,
        keyPair,
        publickey, // mint auth
        publickey, // freeze atuh
        9 //decimals
    )
    console.log(tokenMint.toBase58());
}

main();