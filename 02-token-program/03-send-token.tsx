import 'dotenv/config'
import * as Web3 from '@solana/web3.js'
import * as token from '@solana/spl-token'

import base58 from 'bs58';
async function main(){

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const base58DecodedPK = base58.decode('2FNuVJJyqKruGWc4rCrard2ARVeFCd4QJYdh3ec72L6ZXPpbo3jE2Hc3jevLstp6495EBdbwxfDpymPrDMFbBBik');
    const signer = Web3.Keypair.fromSecretKey(base58DecodedPK);

    const mintToken = await token.mintTo(
        connection,
        signer,
        new Web3.PublicKey('B3iG5jdzidBv9J7DSuaUm3fkh6jWdtjP8v1vDsKDKmcf'), //mint 
        new Web3.PublicKey('Cj3qRXku7LcusvgGEqA99shSXeLLwYCuw9aboCNU4Pwf'), //owner
        new Web3.PublicKey('ABiUEDLkqaJUJVJKtzavVtsiQxGhBp1gQJAfYKdNGSRr'), //authority
        100000000000, //amount
    )
    console.log('mint Token ', mintToken)

}
main()