import BN from "bn.js";
import {
  createInitializeCurveInstruction,
  createMintInstruction,
  createSwapInInstruction,
} from "@hashfund/program";
import { Connection, PublicKey, Transaction } from "@solana/web3.js";

type CreateMintTokenTransactionArgs = {
  name: string;
  ticker: string;
  uri: string;
  initialBuyAmount: BN;
  connection: Connection;
  payer: PublicKey;
};

export const createMintTokenTransaction = async function ({
  name,
  ticker,
  uri,
  initialBuyAmount,
  payer,
  connection,
}: CreateMintTokenTransactionArgs) {
  let [tokenAMint, createMintInstructionIx] = createMintInstruction({
    payer,
    data: {
      name,
      ticker,
      uri,
    },
  });

  const ixs = [
    ...createMintInstructionIx,
    ...(await createInitializeCurveInstruction({
      connection,
      tokenAMint,
      payer,
      data: {
        initialBuyAmount,
        maximumMarketCap: new BN(2_000).mul(new BN(10).pow(new BN(9))),
      },
    })),
    createSwapInInstruction({
      payer,
      tokenAMint,
      data: {
        amount: initialBuyAmount,
      },
    }),
  ];

  const transaction = new Transaction().add(...ixs);

  return transaction;
};
