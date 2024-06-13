import Image from "next/image";
import Link from "next/link";

import { Mint } from "@/lib/api/models";
import { tokens } from "@/config/dev/token";
import { normalizeBNString } from "@/web3/decimal";

type TokenListProps = {
  mints: Mint[];
};

export default function TokenList({ mints }: TokenListProps) {
  return (
    <div className="relative max-w-[100vw] overflow-x-scroll px-4">
      <table className="table-auto">
        <thead>
          <tr>
            <th scope="col">Token</th>
            <th scope="col">Unit Price</th>
            <th scope="col">24h Volume</th>
            <th scope="col">Total Supply</th>
            <th scope="col">Market Cap</th>
            <th scope="col">Holders</th>
          </tr>
        </thead>
        <tbody>
          {mints.map((mint, index) => (
            <>
              <tr
                key={mint.id}
                className="table-row"
              >
                <td
                  scope="row"
                  className="pr-24"
                >
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
                <td>
                  <div>
                    <p className="text-sm font-medium">1 SOL</p>
                    <div className="hidden flex text-xs space-x-2">
                      <p className="dollar text-white/80">0</p>
                      <p className="text-green">0%</p>
                    </div>
                  </div>
                </td>
                <td className="dollar text-sm">0</td>
                <td className="text-sm">
                  {normalizeBNString(mint.totalSupply)}{" "}
                  <span className="uppercase">{mint.ticker}</span>
                </td>
                <td className="dollar text-sm">0</td>
                <td className="text-sm">0</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}
