import * as Web3 from '@solana/web3.js';
import base58 from 'bs58'

async function main() {
    const decoded = base58.decode('2FNuVJJyqKruGWc4rCrard2ARVeFCd4QJYdh3ec72L6ZXPpbo3jE2Hc3jevLstp6495EBdbwxfDpymPrDMFbBBik')
    const keyPair = Web3.Keypair.fromSecretKey(decoded)

    const publicKeyFrom = new Web3.PublicKey('ABiUEDLkqaJUJVJKtzavVtsiQxGhBp1gQJAfYKdNGSRr');
    const publicKeyTo = new Web3.PublicKey('6Eb5vRoaZozbqjxAFyHjgZaQxEZXuBcLLaRbLd3mZWu4');

    const instruction = Web3.SystemProgram.transfer({
        fromPubkey: publicKeyFrom,
        toPubkey: publicKeyTo,
        lamports: 1,
    });
    const transaction = new Web3.Transaction();
    transaction.add(instruction);

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const txSignature = await Web3.sendAndConfirmTransaction(connection, transaction, [keyPair]);

    console.log('txHash', txSignature)
}

main();