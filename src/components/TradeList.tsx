import clsx from "clsx";
import moment from "moment";

import Image from "next/image";
import Link from "next/link";

import { Explorer } from "@/web3/link";
import { normalizeBN } from "@/web3/decimal";
import { truncateAddress } from "@/web3/address";
import { avatarOrDefault } from "@/web3/asset";

import { Mint } from "@/lib/api/models";
import { Swap } from "@/lib/api/models/swap.model";

type TradeListProps = {
  className?: string;
  mint: Mint;
  swaps: Swap[];
};

export function TradeList({ className, mint, swaps }: TradeListProps) {
  return (
    <div className={clsx(className, "overflow-x-scroll")}>
      <table className="w-full">
        <thead>
          <tr>
            <th>Account</th>
            <th>Type</th>
            <th>SOL</th>
            <th>{mint.ticker}</th>
            <th>Date</th>
            <th>Transaction</th>
          </tr>
        </thead>
        <tbody>
          {swaps.map((swap) => {
            const profileLink = `/profile?address=${swap.payer.id}`;
            const txLink = Explorer.buildAccount(swap.payer.id);

            return (
              <tr key={swap.id}>
                <td>
                  <Link
                    href={profileLink}
                    className="flex items-center space-x-2"
                  >
                    <div className="h-12 w-12">
                      <Image
                        src={avatarOrDefault(swap.payer.avatar)}
                        alt={swap.payer.name}
                        width={64}
                        height={64}
                        className="h-10 w-10 rounded-full"
                      />
                    </div>
                    <p>{swap.payer.name}</p>
                  </Link>
                </td>
                <td>
                  <Link
                    href={txLink}
                    className="m-aut0"
                  >
                    {swap.tradeDirection === 0 ? (
                      <div className="rounded bg-green-100 px-2 text-center text-green">
                        Buy
                      </div>
                    ) : (
                      <div className="rounded bg-red-100 px-2 text-center text-red">
                        Sell
                      </div>
                    )}
                  </Link>
                </td>
                <td className="sol">
                  {swap.tradeDirection === 0 ? (
                    <span>{normalizeBN(swap.amountIn)}</span>
                  ) : (
                    <span>{normalizeBN(swap.amountOut)}</span>
                  )}
                </td>
                <td>
                  {swap.tradeDirection === 0 ? (
                    <span>{normalizeBN(swap.amountOut, 6)}</span>
                  ) : (
                    <span>{normalizeBN(swap.amountIn, 6)}</span>
                  )}
                  <span className="uppercase"> {mint.ticker}</span>
                </td>
                <td>{moment(swap.timestamp).fromNow()}</td>
                <td>
                  <Link href={txLink}>{truncateAddress(swap.signature)}</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
