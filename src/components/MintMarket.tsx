import moment from "moment";
import Link from "next/link";
import { TabPanel } from "@headlessui/react";

import { Mint } from "@/lib/api/models";
import { Swap } from "@/lib/api/models/swap.model";
import { truncateAddress } from "@/web3/address";
import { normalizeBNString } from "@/web3/decimal";
import { Explorer } from "@/web3/link";

type MintMarketProps = {
  swaps: Swap[];
  mint: Mint;
};

export default function MintMarket({ mint, swaps }: MintMarketProps) {
  return (
    <TabPanel className="relative max-w-[100vw] overflow-x-scroll">
      <table>
        <thead>
          <tr>
            <th>Account</th>
            <th>Type</th>
            <th>SOL</th>
            <th>{mint.ticker}</th>
            <th>Transaction</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {swaps.map((swap) => (
            <tr key={swap.id}>
              <td>
                <Link
                  href={Explorer.buildAccount(swap.payer)}
                  target="_blank"
                >
                  {swap.tradeDirection === 0 ? (
                    <div className="rounded-md bg-green-200  text-green-700 px-2 py-1">
                      {truncateAddress(swap.payer)}
                    </div>
                  ) : (
                    <div className="rounded-md bg-red-200 text-red-900 px-2 py-1">
                      {truncateAddress(swap.payer)}
                    </div>
                  )}
                </Link>
              </td>
              <td>
                {swap.tradeDirection === 0 ? (
                  <div className="rounded px-2 py-0.5 text-green">Buy</div>
                ) : (
                  <div className="rounded px-2 py-0.5 text-red">Sell</div>
                )}
              </td>
              <td className="dollar">
                {normalizeBNString(
                  swap.tradeDirection === 0 ? swap.amountIn : swap.amountOut
                )}
              </td>
              <td>
                {normalizeBNString(
                  swap.tradeDirection === 0 ? swap.amountOut : swap.amountIn,
                  6
                )}
                <span className="uppercase"> {mint.ticker}</span>
              </td>
              <td className="text-white/80">
                <Link
                  href={Explorer.buildTx(swap.signature)}
                  target="_blank"
                >
                  {truncateAddress(swap.signature, 8)}
                </Link>
              </td>
              <td>{moment(swap.timestamp).format("MMMM Do YY, h:mm a")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TabPanel>
  );
}
