import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { MdBolt } from "react-icons/md";

import type { Mint } from "@/lib/api/models";
import { normalizeBN } from "@/web3/decimal";

type RecentMintProps = {
  className?: string;
  mints: Mint[];
};

export function RecentMint({ className, mints }: RecentMintProps) {
  return (
    <section
      className={clsx(
        className,
        "flex flex-col space-y-4 border border-dark pb-4 rounded-md"
      )}
    >
      <div className="flex items-center border-b-1 border-dark px-4 py-4 space-x-4">
        <div className="flex flex-1 items-center space-x-2">
          <MdBolt className="text-2xl" />
          <p className="text-base font-medium">Recently Mint</p>
        </div>
        <div>
          <button className="p-2 text-primary">Mint Token</button>
        </div>
      </div>
      <div className="flex flex-col divide-y divide-dark">
        {mints.map((mint) => (
          <Link
            key={mint.id}
            href={mint.id}
            className="flex items-center px-4 py-2 space-x-2"
          >
            <div className="flex flex-1 items-center space-x-2">
              <Image
                src={mint.metadata.image}
                alt={mint.name}
                width={48}
                height={48}
                className="rounded-md"
              />
              <p>{mint.name}</p>
            </div>
            <div>
              {mint.boundingCurve && (
                <p className="sol text-sm">
                  {normalizeBN(mint.boundingCurve?.initialPrice)}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
