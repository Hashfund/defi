import { PopoverPanel } from "@headlessui/react";
import { MdArrowDownward } from "react-icons/md";
import TokenPriceInput from "./TokenPriceInput";

export default function SwapModal() {
  return (
    <PopoverPanel className="absolute flex flex-col rounded bg-amber/5 p-4 backdrop-blur-3xl space-y-4" lt-md="right-2 max-w-sm" md="right-8">
      <div className="flex flex-col rounded-md bg-secondary/10 p-4 space-y-2">
        <div className="flex text-xs text-white/75">
          <p className="flex-1">Sell</p>
          <p>Wallet: 0</p>
        </div>
        <TokenPriceInput />
      </div>
      <button className="self-center border border-secondary rounded-full p-2 text-secondary">
        <MdArrowDownward />
      </button>
      <div className="flex flex-col rounded-md bg-secondary/10 p-4 space-y-2">
        <div className="flex text-xs text-white/75">
          <p className="flex-1">Buy</p>
        </div>
        <TokenPriceInput />
      </div>
    </PopoverPanel>
  );
}
