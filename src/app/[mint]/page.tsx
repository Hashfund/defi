import { Tab, TabGroup, TabList, TabPanels } from "@headlessui/react";

import MintInfo from "@/components/MintInfo";
import useMint from "@/composables/useMint";
import useSwaps from "@/composables/useSwaps";
import { RouteProps } from "@/types";
import MintMarket from "@/components/MintMarket";
import BalanceProvider from "@/providers/BalanceProvider";
import useGraph from "@/composables/useGraph";
import MintActivity from "@/components/MintActivity";

export default async function MintPage(props: RouteProps) {
  const mint = await useMint(props.params.mint);
  const swaps = await useSwaps(props.params.mint);
  const graph = await useGraph(props.params.mint, "24h");

  return (
    <main className="flex flex-1 flex-col px-4 space-y-8 md:px-8">
      {mint && (
        <BalanceProvider mint={mint.id}>
          <MintInfo mint={mint} />
          <TabGroup className="flex flex-1 flex-col space-y-8">
            <TabList className="self-start border border-amber rounded p-1">
              <Tab className="rounded px-6 py-2 text-amber data-[selected]:bg-amber data-[selected]:text-black">
                Market
              </Tab>
              <Tab className="rounded px-6 py-2 text-amber data-[selected]:bg-amber data-[selected]:text-black">
                Activity
              </Tab>
            </TabList>
            <TabPanels className="flex flex-1 flex-col">
              <MintMarket
                swaps={swaps.results}
                mint={mint}
              />
              <MintActivity graph={graph} />
            </TabPanels>
          </TabGroup>
        </BalanceProvider>
      )}
    </main>
  );
}
