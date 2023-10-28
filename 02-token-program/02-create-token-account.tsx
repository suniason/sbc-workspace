import "dotenv/config"
import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))
const publickey = new Web3.PublicKey("6Eb5vRoaZozbqjxAFyHjgZaQxEZXuBcLLaRbLd3mZWu4")
const decoded = base58.decode('2FNuVJJyqKruGWc4rCrard2ARVeFCd4QJYdh3ec72L6ZXPpbo3jE2Hc3jevLstp6495EBdbwxfDpymPrDMFbBBik')
const keyPair = Web3.Keypair.fromSecretKey(decoded)
const tokenMint = "B3iG5jdzidBv9J7DSuaUm3fkh6jWdtjP8v1vDsKDKmcf"

async function main(){
    const tokenAccount  = await token.createAccount(
        connection, // connection
        keyPair, // signer
        new Web3.PublicKey(tokenMint), // mint public key
        publickey, // owner of the token-account
    );
    console.log(tokenAccount.toBase58());
}

main();