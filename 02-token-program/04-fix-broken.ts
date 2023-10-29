import * as Web3 from '@solana/web3.js'
import base58 from 'bs58'

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))
const publickey = new Web3.PublicKey("ABiUEDLkqaJUJVJKtzavVtsiQxGhBp1gQJAfYKdNGSRr")
const programid =   new Web3.PublicKey("AbCji8r7eGVBR1tB4NcDDcB87kXDv3hqzDsA6nfGc2i8")
const decoded = base58.decode('2FNuVJJyqKruGWc4rCrard2ARVeFCd4QJYdh3ec72L6ZXPpbo3jE2Hc3jevLstp6495EBdbwxfDpymPrDMFbBBik')
const keyPair = Web3.Keypair.fromSecretKey(decoded)

async function main() {
    const instruction = new Web3.TransactionInstruction({
        keys: [
            {
                pubkey: publickey,
                isSigner: true,
                isWritable: false,
            }
        ],
        data: Buffer.alloc(20),
        programId: programid
    });

    const transaction = new Web3.Transaction();
    transaction.add(instruction);

    const signature = await Web3.sendAndConfirmTransaction(
        connection, 
        transaction, 
        [keyPair]
    )
    console.log('SIGNATURE', signature)
}

main()
.then(() => process.exit(0))
.catch(err => {
    console.error(err)
});