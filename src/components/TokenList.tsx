import Image from "next/image";
import Link from "next/link";

import { Mint } from "@/lib/api/models";
import { normalizeBN } from "@/web3/decimal";
import { calculateMarketcapWeight, calculateBNPercentile } from "@/web3/math";
import clsx from "clsx";

type TokenProps = {
  className?: string;
  mints: Mint[];
};

export function TokenList({ className, mints }: TokenProps) {
  return (
    <div className={clsx(className, "overflow-x-scroll")}>
      <table className="w-full">
        <thead>
          <tr>
            <th>Token</th>
            <th>Price</th>
            <th>24h Change</th>
            <th>24h Volume</th>
            <th>Volume</th>
            <th>Max Marketcap</th>
            <th>Collateral Weight</th>
            <th>Marketcap</th>
          </tr>
        </thead>
        <tbody>
          {mints.map((mint) => (
            <tr key={mint.id}>
              <td>
                <Link
                  href={mint.id}
                  className="flex items-center space-x-2"
                >
                  <div className="h-12 w-12">
                    <Image
                      src={mint.metadata.image}
                      alt={mint.name}
                      width={64}
                      height={64}
                      className="rounded-md"
                    />
                  </div>
                  <p>{mint.name}</p>
                </Link>
              </td>
              <td className="sol">
                <Link href={mint.id}>
                  {normalizeBN(mint.boundingCurve?.initialPrice ?? 0)}
                </Link>
              </td>
              <td className="per">
                {calculateBNPercentile(mint.volumeIn, mint.volumeInFrom) ?? 0}
              </td>
              <td className="sol">{normalizeBN(mint.volumeInFrom)}</td>
              <td className="sol">{normalizeBN(mint.volumeIn)}</td>
              <td className="sol">
                {normalizeBN(mint.boundingCurve?.maximumMarketCap ?? 0)}
              </td>
              <td className="">
                {calculateMarketcapWeight(
                  mint.marketCap,
                  mint.boundingCurve?.maximumMarketCap ?? 0
                )}
                x
              </td>
              <td className="sol">{normalizeBN(mint.marketCap)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
