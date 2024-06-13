import BN from "bn.js";

import { safeBN, unsafeBN } from "@solocker/safe-bn";
import {
  useConnection,
  useWallet,
  WalletContextState,
} from "@solana/wallet-adapter-react";

import { mixed, object, string, InferType } from "yup";

import { findMintAddress } from "@/web3/address";
import { createTokenRichMetadata } from "@/web3/asset";
import { createMintTokenTransaction } from "@/web3/mint";
import { Connection } from "@solana/web3.js";

export const validationSchema = object().shape({
  name: string().max(16).required(),
  symbol: string().max(10).required(),
  description: string().required().min(32),
  website: string().url(),
  telegram: string().url(),
  twitter: string().url(),
  image: mixed().required("Image is required"),
});

export type MintForm = InferType<typeof validationSchema> & { image: File };

export type MintFormExtra = {
  initialBuyAmount: number;
  maximumMarketCap?: number;
};

export const processForm = async function (
  connection: Connection,
  { publicKey, sendTransaction }: WalletContextState,
  { name, symbol, image, description, website, telegram, twitter }: MintForm,
  { initialBuyAmount }: MintFormExtra
) {
  const mint = findMintAddress(name, symbol, publicKey!);

  let uri = await createTokenRichMetadata(
    {
      name,
      description,
      website,
      telegram,
      twitter,
      image,
      symbol,
    },
    mint.toBase58()
  );

  const transaction = await createMintTokenTransaction({
    name,
    ticker: symbol,
    uri,
    initialBuyAmount: unsafeBN(
      safeBN(initialBuyAmount).mul(new BN(10).pow(new BN(9)))
    ),
    payer: publicKey!,
    connection,
  });

  return sendTransaction(transaction, connection);
};
