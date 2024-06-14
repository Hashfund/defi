import BN from "bn.js";
import {
  createSwapInInstruction,
  createSwapOutInstruction,
  getOrCreateAssociatedTokenAccountInstructions,
} from "@hashfund/program";
import { Connection, PublicKey, Transaction } from "@solana/web3.js";

export const createSwapInTransaction = async (
  connection: Connection,
  payer: PublicKey,
  mint: PublicKey,
  amount: BN
) => {
  return new Transaction().add(
    ...(await getOrCreateAssociatedTokenAccountInstructions(
      connection,
      mint,
      payer,
      payer,
      false
    )),
    createSwapInInstruction({
      payer,
      tokenAMint: mint,
      data: { amount },
    })
  );
};

export const createSwapOutTransaction = (
  payer: PublicKey,
  mint: PublicKey,
  amount: BN
) => {
  return new Transaction().add(
    createSwapOutInstruction({
      payer,
      tokenAMint: mint,
      data: { amount },
    })
  );
};
