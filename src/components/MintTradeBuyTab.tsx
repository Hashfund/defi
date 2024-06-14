"use client";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

import { toast } from "react-toastify";
import { TabPanel } from "@headlessui/react";
import { ErrorMessage, Form, Formik } from "formik";

import { Explorer } from "@/web3/link";
import useBalance from "@/composables/useBalance";
import { createValidationSchema, processForm } from "@/form/BuyForm";

import PriceInput from "./widgets/PriceInput";

type MintTradeBuyTabProps = {
  mint: string;
};

export default function MintTradeBuyTab({ mint }: MintTradeBuyTabProps) {
  const { solBalance } = useBalance();
  const balance = solBalance / 1_000_000_000;
  const validationSchema = createValidationSchema(balance);

  const wallet = useWallet();
  const { connection } = useConnection();

  const onSubmit = async function (amount: number) {
    const tx = await processForm(wallet, connection, mint, amount);
    window.open(Explorer.buildTx(tx));
  };

  return (
    <TabPanel className="flex flex-1 flex-col">
      <Formik
        initialValues={{ amount: 0 }}
        validationSchema={validationSchema}
        onSubmit={({ amount }) =>
          toast.promise(onSubmit(amount), {
            pending: "Sending transaction",
            error: "Failed to process transaction.",
            success: "Token bought successfully",
          })
        }
      >
        {({ values, setFieldValue }) => (
          <Form className="flex flex-1 flex-col">
            <div className="flex-1">
              <PriceInput
                ticker={"SOL"}
                balance={balance}
                value={values.amount}
                onChange={(value) => setFieldValue("amount", value)}
              />
              <div className="text-xs text-red">
                <ErrorMessage name="amount" />
              </div>
            </div>
            <div className="flex flex-col">
              <button
                type="submit"
                className="btn btn-primary"
              >
                Buy Token
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </TabPanel>
  );
}
