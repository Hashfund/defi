import {
  Popover,
  PopoverButton,
  PopoverPanel,
  TabGroup,
  Tab,
  TabList,
  TabPanels,
} from "@headlessui/react";

import { Mint } from "@/lib/api/models";
import MintTradeBuyTab from "./MintTradeBuyTab";
import MintTradeSellTab from "./MintTradeSellTab";

type MintTradeProps = {
  mint: Mint;
};

export default function MintTrade({ mint }: MintTradeProps) {
  return (
    <Popover>
      <PopoverButton className="rounded from-green to-teal bg-gradient-to-r px-4 py-2 text-black outline-none">
        Trade
      </PopoverButton>
      <PopoverPanel className="absolute right-1/48 mt-2 h-72 w-3/4 flex flex-col rounded bg-stone-900 p-4 md:right-1/46 md:w-3/8 xl:w-auto">
        <TabGroup className="flex flex-1 flex-col space-y-8">
          <TabList className="flex rounded bg-stone-700/50">
            <Tab className="flex-1 rounded px-4 py-2 data-[selected]:bg-green data-[selected]:text-black">
              Buy
            </Tab>
            <Tab className="flex-1 rounded px-4 py-2 data-[selected]:bg-green data-[selected]:text-black">
              Sell
            </Tab>
          </TabList>
          <TabPanels className="flex flex-1 flex-col">
            <MintTradeBuyTab mint={mint.id} />
            <MintTradeSellTab
              mint={mint.id}
              ticker={mint.ticker}
            />
          </TabPanels>
        </TabGroup>
      </PopoverPanel>
    </Popover>
  );
}
