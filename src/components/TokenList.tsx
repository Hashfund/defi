"use client";
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Mint } from "@/lib/api/models";
import { normalizeBNString } from "@/web3/decimal";
import { truncateAddress } from "@/web3/address";
import Link from "next/link";
import { Explorer } from "@/web3/link";

type TokenListProps = {
  mints: Mint[];
};

export default function TokenList({ mints }: TokenListProps) {
  const router = useRouter();

  return (
    <div className="relative max-w-[100vw] overflow-x-scroll px-4">
      <table className="table-auto">
        <thead>
          <tr>
            <th scope="col">Token</th>
            <th scope="col">Creator</th>
            <th scope="col">Unit Price</th>
            <th scope="col">24h Volume</th>
            <th scope="col">Volume</th>
            <th scope="col">Total Supply</th>
            <th scope="col">Market Cap</th>
            <th scope="col">Bounding Curve</th>
            <th scope="col">Transaction</th>
            <th scope="col">Created At</th>
          </tr>
        </thead>
        <tbody>
          {mints.map((mint, index) => (
            <tr
              key={mint.id}
              className="table-row cursor-pointer text-sm"
              onClick={() => router.push(mint.id)}
            >
              <td className="pr-24">
                <div className="flex items-center text-white/80 space-x-4">
                  <span>{index + 1}</span>
                  <div className="flex items-center space-x-2">
                    <Image
                      src={mint.metadata.image}
                      alt={mint.name}
                      width={64}
                      height={64}
                      className="rounded-md"
                    />
                    <span>{mint.name}</span>
                  </div>
                </div>
              </td>
              <td className="text-white/80">
                <Link href={Explorer.buildAccount(mint.creator)}>
                  {truncateAddress(mint.creator, 10)}
                </Link>
              </td>
              <td>
                <div>
                  <p className="sol font-medium">
                    {mint.boundingCurve
                      ? (
                          Number.parseFloat(mint.boundingCurve.initialPrice) /
                          1_000_000_000
                        ).toFixed(9)
                      : 0}
                  </p>
                </div>
              </td>
              <td>
                <p className="sol">{normalizeBNString(mint.last24HrVolume)}</p>
                <div className="flex text-xs space-x-2">
                  <p className="sol text-white/80">
                    {normalizeBNString(mint.last24HrVolumeChange)}
                  </p>
                  <p className="text-green">
                    {mint.last24HrVolumeChangePercentage}%
                  </p>
                </div>
              </td>
              <td className="sol">{normalizeBNString(mint.totalVolume)}</td>
              <td>
                {normalizeBNString(mint.totalSupply)}
                <span className="uppercase"> {mint.ticker}</span>
              </td>
              <td className="sol">{normalizeBNString(mint.marketCap)}</td>
              <td className="text-white/80">
                <Link
                  href={Explorer.buildAccount(mint.boundingCurve.id)}
                  target="_black"
                >
                  {truncateAddress(mint.boundingCurve!.id, 10)}
                </Link>
              </td>
              <td className="text-white/80">
                <Link href={Explorer.buildTx(mint.signature)}>
                  {truncateAddress(mint.signature, 10)}
                </Link>
              </td>
              <td>{moment().format("MMMM Do YYYY h:mm a")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
