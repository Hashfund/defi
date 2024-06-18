"use client";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

import { ErrorMessage, Form, Formik } from "formik";
import { toast } from "react-toastify";
import { TabPanel } from "@headlessui/react";

import useBalance from "@/composables/useBalance";

import { Explorer } from "@/web3/link";
import { processForm } from "@/form/SellForm";
import { createValidationSchema } from "@/form/BuyForm";

import PriceInput from "./widgets/PriceInput";

type MintTradeSellTabProps = {
  ticker: string;
  mint: string;
};

export default function MintTradeSellTab({
  ticker,
  mint,
}: MintTradeSellTabProps) {
  const { mintBalance } = useBalance();
  const decimals = mintBalance ? 10 * mintBalance.decimals : 0;
  const balance = mintBalance ? mintBalance.uiAmount! : 0;

  const wallet = useWallet();
  const { connection } = useConnection();

  const validationSchema = createValidationSchema(balance);

  const onSubmit = async function (amount: number) {
    const tx = await processForm(wallet, connection, mint, amount, decimals);
    window.open(Explorer.buildTx(tx));
  };

  return (
    <TabPanel className="flex flex-1 flex-col">
      <Formik
        validationSchema={validationSchema}
        initialValues={{ amount: 0 }}
        onSubmit={({ amount }) =>
          toast.promise(onSubmit(amount), {
            pending: "Sending transaction",
            error: "Failed to process transaction.",
            success: "Token sold successfully",
          })
        }
      >
        {({ values, setFieldValue }) => (
          <Form className="flex flex-1 flex-col">
            <div className="flex-1">
              <PriceInput
                ticker={ticker}
                balance={balance}
                value={values.amount}
                onChange={(value) => setFieldValue("amount", value)}
              />
              <div className="text-xs text-red">
                <ErrorMessage name="amount" />
              </div>
            </div>
            <div className="flex flex-col">
              <button className="btn btn-primary">Sell Token</button>
            </div>
          </Form>
        )}
      </Formik>
    </TabPanel>
  );
}
