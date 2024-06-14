import clsx from "clsx";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { toast } from "react-toastify";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

import { Explorer } from "@/web3/link";
import { MintForm, processForm } from "@/form/MintForm";

import PriceInput from "./widgets/PriceInput";
import useBalance from "@/composables/useBalance";

type CreateTokenBuyModalProps = {
  form: MintForm;
  visible: boolean;
  setVisible: (value: boolean) => void;
};

export default function CreateTokenBuyModal({
  form,
  visible,
  setVisible,
}: CreateTokenBuyModalProps) {
  const walletState = useWallet();
  const { connection } = useConnection();

  const { solBalance } = useBalance();

  const [initialBuyAmount, setInitialBuyAmount] = useState(0);
  const processTx = async () => {
    const tx = await processForm(connection, walletState, form, {
      initialBuyAmount,
    });
    window.open(Explorer.buildTx(tx));
  };

  return (
    <div
      className={clsx(
        "fixed inset-0 items-end bg-black/80 z-10 p-8",
        visible
          ? "flex flex-col animate-fade-in animate-duration-150"
          : "hidden"
      )}
    >
      <div className="h-2/5 flex flex-col animate-slide-in-up animate-duration-200 rounded-xl from-stone-900 to-stone-900/50 bg-gradient-to-r p-4 backdrop-blur-3xl md:w-2/5 space-y-4">
        <div>
          <button onClick={() => setVisible(false)}>
            <MdClose className="text-xl" />
          </button>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Create & Buy</h1>
          <p className="text-sm text-white/80">
            Choose how many <span className="font-mono">{form.symbol}</span> you
            want to buy. Buying a small amount of coins helps encourage sales
            and improve visibility of your token.
          </p>
        </div>
        <div className="flex-1">
          <PriceInput
            ticker={"SOL"}
            balance={solBalance}
            value={initialBuyAmount}
            onChange={setInitialBuyAmount}
          />
        </div>
        <div className="flex space-x-2">
          <button
            className="flex-1 border border-stone-700 rounded-md bg-stone-700/50 hover:bg-stone-700/30"
            onClick={() => setVisible(false)}
          >
            Cancel
          </button>
          <button
            className="btn btn-primary flex-1"
            onClick={() => {
              toast.promise(processTx(), {
                success: "Token successfully created",
                error: "Ooops! an unexpected error occur. Try again!",
                pending: "Sending transaction to chain...",
              });
            }}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}
