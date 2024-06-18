"use client";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { TabGroup, TabList, TabPanels } from "@headlessui/react";

import {
  MintInitialBuyAmountForm,
  MintMaximumMarketCapForm,
  MintMetadataForm,
  processForm,
} from "@/form/MintForm";

import { Explorer } from "@/web3/link";
import StepButton from "@/components/widgets/StepButton";
import CreateFormMetadata from "@/components/CreateFormMetadata";
import CreateFormMarketCap from "@/components/CreateFormMarketCap";
import CreateFormDeposit from "@/components/CreateFormDeposit";
import BalanceProvider from "@/providers/BalanceProvider";

export default function CreatePage() {
  const walletState = useWallet();
  const { connection } = useConnection();
  const [tabIndex, setTabIndex] = useState(0);
  const [formMetadata, setFormMetadata] = useState<MintMetadataForm>({
    name: "",
    symbol: "",
    image: "" as unknown as File,
    description: "",
    website: "",
    telegram: "",
    twitter: "",
  });
  const [formMaxMarketCap, setFormMaxMarketCap] =
    useState<MintMaximumMarketCapForm>({
      maximumMarketCap: "" as unknown as number,
    });
  const [formInitialBuyAmount, setFormInitialBuyAmount] =
    useState<MintInitialBuyAmountForm>({
      initialBuyAmount: "" as unknown as number,
    });

  const processTx = async () => {
    const tx = await processForm(
      connection,
      walletState,
      formMetadata,
      formMaxMarketCap,
      formInitialBuyAmount
    );
    window.open(Explorer.buildTx(tx));
  };

  useEffect(() => {
    toast.promise(processTx(), {
      success: "Token successfully created",
      error: "Ooops! an unexpected error occur. Try again!",
      pending: "Sending transaction to chain...",
    });
  }, [formInitialBuyAmount, processTx]);

  return (
    <>
      <TabGroup
        selectedIndex={tabIndex}
        onChange={(index) => {
          if (index < tabIndex) {
            setTabIndex(index);
          }
        }}
        className="flex flex-1 flex-col lg:flex-row md:justify-center lt-md:px-4 md:px-8 lg:space-x-4 lt-lg:space-y-8"
      >
        <TabList className="flex lg:w-sm lg:flex-col lg:justify-center lt-lg:space-x-2">
          <StepButton
            position="1"
            title="Token Metdata"
          />
          <StepButton
            position="2"
            title="Set maximum market cap & range"
          />
          <StepButton
            position="3"
            title="Enter deposit amount"
            hideLine
          />
        </TabList>
        <BalanceProvider>
          <TabPanels className="h-full flex flex-col lg:w-xl">
            <CreateFormMetadata
              form={formMetadata}
              onSubmit={(value) => {
                setFormMetadata(value);
                setTabIndex(tabIndex + 1);
              }}
            />
            <CreateFormMarketCap
              ticker={formMetadata.symbol}
              form={formMaxMarketCap}
              onSubmit={(value) => {
                setFormMaxMarketCap(value);
                setTabIndex(tabIndex + 1);
              }}
            />
            <CreateFormDeposit
              ticker={formMetadata.symbol}
              form={formInitialBuyAmount}
              onSubmit={async (value) => {
                setFormInitialBuyAmount(value);
              }}
            />
          </TabPanels>
        </BalanceProvider>
      </TabGroup>
    </>
  );
}
