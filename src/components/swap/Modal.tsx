"use client";
import { PublicKey } from "@solana/web3.js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

import { PopoverPanel } from "@headlessui/react";

import { toast } from "react-toastify";
import { MdArrowDownward } from "react-icons/md";

import { Formik, Form, ErrorMessage } from "formik";

import { Explorer } from "@/web3/link";
import { processSellForm } from "@/form/SellForm";
import { createValidationSchema, processBuyForm } from "@/form/BuyForm";

import TokenPriceInput from "./TokenPriceInput";

type Side = {
  mint: PublicKey;
  balance: number;
  ticker: string;
  image: string;
  decimals: number;
  initialPrice: number;
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

  const processForm = async (buyAmount: string, sellAmount: string) => {
    let tx: string | undefined;

    if (side === "buy")
      tx = await processBuyForm(
        wallet,
        connection,
        sideB.mint.toBase58(),
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
      className="absolute flex flex-col rounded bg-dark-100/20 p-4 backdrop-blur-3xl space-y-4"
      lt-md="right-2 max-w-sm"
      md="right-8"
    >
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          buyAmount: "",
          sellAmount: "",
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
        {({ values, errors, setFieldValue, isSubmitting }) => (
          <Form className="flex flex-col space-y-8">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col rounded-md bg-dark-500 p-4 space-y-2">
                <div className="flex text-xs text-white/75">
                  <p className="flex-1">Sell</p>
                  <p>Wallet: {sideA.balance.toFixed(4)}</p>
                </div>
                <TokenPriceInput
                  name="buyAmount"
                  image={sideA.image}
                  ticker={sideA.ticker}
                  balance={sideA.balance}
                  onChange={(value) => {
                    if (side === "buy") {
                      setFieldValue(
                        "sellAmount",
                        value * sideB.initialPrice * Math.pow(10, 12)
                      );
                    } else {
                      setFieldValue("sellAmount", value * sideB.initialPrice);
                    }
                  }}
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
              <div className="flex flex-col rounded-md bg-dark-500 p-4 space-y-2">
                <div className="flex text-xs text-white/75">
                  <p className="flex-1">Buy</p>
                </div>
                <TokenPriceInput
                  name="sellAmount"
                  image={sideB.image}
                  ticker={sideB.ticker}
                  onChange={(value) => {
                    if (side === "buy") {
                      setFieldValue(
                        "buyAmount",
                        (value / sideB.initialPrice / Math.pow(10, 12)).toFixed(
                          4
                        )
                      );
                    } else {
                      setFieldValue("buyAmount", value * sideB.initialPrice);
                    }
                  }}
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn bg-primary"
            >
              Proceed
            </button>
          </Form>
        )}
      </Formik>
    </PopoverPanel>
  );
}
