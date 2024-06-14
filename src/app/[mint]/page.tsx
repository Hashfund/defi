import { Tab, TabGroup, TabList, TabPanels } from "@headlessui/react";

import MintInfo from "@/components/MintInfo";
import useMint from "@/composables/useMint";
import useSwaps from "@/composables/useSwaps";
import { RouteProps } from "@/types";
import MintMarket from "@/components/MintMarket";
import BalanceProvider from "@/providers/BalanceProvider";

export default async function MintPage(props: RouteProps) {
  const mint = await useMint(props.params.mint);
  const swaps = await useSwaps(props.params.mint);

  return (
    <main className="flex flex-col px-4 space-y-8 md:px-8">
      {mint && (
        <BalanceProvider mint={mint.id}>
          <MintInfo mint={mint} />
          <TabGroup className="flex flex-col space-y-8">
            <TabList className="self-start border border-green rounded p-1">
              <Tab className="rounded px-6 py-2 text-green data-[selected]:bg-green data-[selected]:text-black">
                Market
              </Tab>
              <Tab className="px-6 py-2 text-green data-[selected]:bg-green data-[selected]:text-black">
                Activity
              </Tab>
              <Tab className="px-6 py-2 text-green data-[selected]:bg-green data-[selected]:text-black">
                My Orders
              </Tab>
            </TabList>
            <TabPanels>
              <MintMarket
                swaps={swaps.results}
                mint={mint}
              />
            </TabPanels>
          </TabGroup>
        </BalanceProvider>
      )}
    </main>
  );
}
