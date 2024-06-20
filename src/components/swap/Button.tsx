import { Popover, PopoverButton } from "@headlessui/react";
import SwapModal from "./Modal";

export function SwapButton() {
  return (
    <Popover className="relative">
      <PopoverButton className="btn btn-primary outline-none">
        Swap
      </PopoverButton>
      <SwapModal />
    </Popover>
  );
}
