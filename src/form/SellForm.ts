import { BN } from "bn.js";
import { safeBN, unsafeBN } from "@solocker/safe-bn";

import { Connection, PublicKey } from "@solana/web3.js";
import { WalletContextState } from "@solana/wallet-adapter-react";

import { number, object } from "yup";

import { createSwapOutTransaction } from "@/web3/trade";

export async function processSellForm(
  wallet: WalletContextState,
  connection: Connection,
  mint: string,
  amount: number,
  decimals: number = 6
) {
  const safeAmount = unsafeBN(
    safeBN(amount, decimals).mul(new BN(10).pow(new BN(decimals))),
    decimals
  );

  console.log(safeAmount.toNumber());

  return wallet.sendTransaction(
    await createSwapOutTransaction(
      connection,
      wallet.publicKey!,
      new PublicKey(mint),
      safeAmount
    ),
    connection
  );
}
