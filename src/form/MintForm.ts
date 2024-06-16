import BN from "bn.js";

import { safeBN, unsafeBN } from "@solocker/safe-bn";
import {
  useConnection,
  useWallet,
  WalletContextState,
} from "@solana/wallet-adapter-react";

import { mixed, object, string, InferType, number } from "yup";

import { findMintAddress } from "@/web3/address";
import { createTokenRichMetadata } from "@/web3/asset";
import { createMintTokenTransaction } from "@/web3/mint";
import { Connection } from "@solana/web3.js";

export const validateMetadataSchema = object().shape({
  name: string().max(16).required(),
  symbol: string().max(10).required(),
  description: string().required().min(32),
  website: string().url(),
  telegram: string().url(),
  twitter: string().url(),
  image: mixed().required("Image is required"),
});

export const validateMaximumMarketCapSchema = object().shape({
  maximumMarketCap: number().moreThan(0, "Invalid amount").required(),
});

export const createInitialDepositSchema = (balance: number) =>
  object().shape({
    amount: number()
      .max(balance, "Insufficient Balance")
      .moreThan(0, "At least decimal greater then 0"),
  });

export type MintMetadataForm = InferType<typeof validateMetadataSchema> & {
  image: File;
};

export type MintMaximumMarketCapForm = {
  maximumMarketCap: number;
};

export type MintInitialBuyAmountForm = {
  initialBuyAmount: number;
};

export const processForm = async function (
  connection: Connection,
  { publicKey, sendTransaction }: WalletContextState,
  {
    name,
    symbol,
    image,
    description,
    website,
    telegram,
    twitter,
  }: MintMetadataForm,
  { maximumMarketCap }: MintMaximumMarketCapForm,
  { initialBuyAmount }: MintInitialBuyAmountForm
) {
  console.log("initialBuy=", initialBuyAmount )
  console.log("maximumMarketCap=", maximumMarketCap )
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
    maximumMarketCap: unsafeBN(
      safeBN(maximumMarketCap, 9).mul(new BN(10).pow(new BN(9)))
    ),
    initialBuyAmount: unsafeBN(
      safeBN(initialBuyAmount, 9).mul(new BN(10).pow(new BN(9))),
      9
    ),
    payer: publicKey!,
    connection,
  });

  return sendTransaction(transaction, connection);
};
