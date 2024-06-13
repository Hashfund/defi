import { PublicKey } from "@solana/web3.js";
import { HASHFUND_PROGRAM_ID } from "@hashfund/program";

export const truncateAddress = (address: string, length = 8) => {
  return address.slice(0, length) + "...";
};
export const findMintAddress = (
  name: string,
  ticker: string,
  owner: PublicKey
) => {
  return PublicKey.findProgramAddressSync(
    [Buffer.from(name), Buffer.from(ticker), owner.toBuffer()],
    HASHFUND_PROGRAM_ID
  )[0];
};
