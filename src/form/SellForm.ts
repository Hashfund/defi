import { BN } from "bn.js";
import { safeBN, unsafeBN } from "@solocker/safe-bn";

import { Connection, PublicKey } from "@solana/web3.js";
import { WalletContextState } from "@solana/wallet-adapter-react";

import { number, object } from "yup";

import { createSwapOutTransaction } from "@/web3/trade";

export const createValidationSchema = (balance: number) =>
  object().shape({
    amount: number()
      .max(balance, "Insufficient Balance")
      .moreThan(0, "At least decimal greater then 0"),
  });

export async function processForm(
  wallet: WalletContextState,
  connection: Connection,
  mint: string,
  amount: number,
  decimals: number
) {
  const safeAmount = unsafeBN(
    safeBN(amount, 6).mul(new BN(10).pow(new BN(6))),
    6
  );

  return wallet.sendTransaction(
    createSwapOutTransaction(
      wallet.publicKey!,
      new PublicKey(mint),
      safeAmount
    ),
    connection
  );
}
