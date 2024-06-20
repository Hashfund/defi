"use client";
import { PublicKey } from "@solana/web3.js";
import { PopoverPanel } from "@headlessui/react";
import { MdArrowDownward } from "react-icons/md";

import { Formik, Form, ErrorMessage } from "formik";

import TokenPriceInput from "./TokenPriceInput";
import { createValidationSchema, processBuyForm } from "@/form/BuyForm";
import { processSellForm } from "@/form/SellForm";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Explorer } from "@/web3/link";
import { toast } from "react-toastify";

type Side = {
  mint: PublicKey;
  balance: number;
  ticker: string;
  image: string;
  decimals: number;
};

type SwapModalProps = {
  side: "buy" | "sell";
  sideA: Side;
  sideB: Side;
  onSwapSide: () => void;
};

export default function SwapModal({
  side,
  sideA,
  sideB,
  onSwapSide,
}: SwapModalProps) {
  const wallet = useWallet();
  const { connection } = useConnection();
  const validationSchema = createValidationSchema(sideA.balance);

  const processForm = async (buyAmount: number, sellAmount: number) => {
    let tx: string | undefined;

    if (side === "buy")
      tx = await processBuyForm(
        wallet,
        connection,
        sideA.mint.toBase58(),
        buyAmount,
        sideA.decimals
      );
    else
      tx = await processSellForm(
        wallet,
        connection,
        sideA.mint.toBase58(),
        buyAmount,
        sideA.decimals
      );

    window.open(Explorer.buildTx(tx));
  };

  return (
    <PopoverPanel
      className="absolute flex flex-col rounded bg-amber/5 p-4 backdrop-blur-3xl space-y-4"
      lt-md="right-2 max-w-sm"
      md="right-8"
    >
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          buyAmount: 0,
          sellAmount: 0,
        }}
        onSubmit={({ buyAmount, sellAmount }, { setSubmitting }) => {
          toast
            .promise(processForm(buyAmount, sellAmount), {
              pending: "Processing transaction",
              error: "Failed to process transaction try again",
              success: "Transaction processed successfully",
            })
            .finally(() => setSubmitting(false));
        }}
      >
        {({ setFieldValue, isSubmitting }) => (
          <Form>
            <div className="flex flex-col rounded-md bg-secondary/10 p-4 space-y-2">
              <div className="flex text-xs text-white/75">
                <p className="flex-1">Sell</p>
                <p>Wallet: {sideA.balance.toFixed(4)}</p>
              </div>
              <TokenPriceInput
                image={sideA.image}
                ticker={sideA.ticker}
                onChange={(value) => setFieldValue("buyAmount", value)}
              />
              <small className="text-red first-letter:uppercase">
                <ErrorMessage name="buyAmount" />
              </small>
            </div>
            <button
              type="button"
              className="self-center border border-secondary rounded-full p-2 text-secondary"
              onClick={onSwapSide}
            >
              <MdArrowDownward />
            </button>
            <div className="flex flex-col rounded-md bg-secondary/10 p-4 space-y-2">
              <div className="flex text-xs text-white/75">
                <p className="flex-1">Buy</p>
              </div>
              <TokenPriceInput
                image={sideB.image}
                ticker={sideB.ticker}
                onChange={(value) => setFieldValue("sellAmount", value)}
              />
            </div>
            <button className="btn btn-primary">Proceed</button>
          </Form>
        )}
      </Formik>
    </PopoverPanel>
  );
}
