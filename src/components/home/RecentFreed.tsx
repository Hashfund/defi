import clsx from "clsx";
import Image from "next/image";
import { FaHashtag } from "react-icons/fa";

import { Mint } from "@/lib/api/models";
import { normalizeBN } from "@/web3/decimal";

type RecentFreedProps = {
  mints: Mint[];
  className?: string;
};

export function RecentFreed({ className, mints }: RecentFreedProps) {
  return (
    <section
      className={clsx(
        className,
        "flex flex-col space-y-4 border border-dark pb-4 rounded-md"
      )}
    >
      <div className="flex items-center border-b-1 border-dark px-4 py-4 space-x-4">
        <div className="flex flex-1 items-center space-x-2">
          <FaHashtag className="text-2xl" />
          <p className="text-base font-medium">Recently Freed</p>
        </div>
      </div>
      {mints.length > 0 ? (
        <div className="flex flex-col divide-y divide-dark">
          {mints.map((mint) => (
            <div
              key={mint.id}
              className="flex px-4 py-2 space-x-2"
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
                <p className="sol text-sm">
                  {normalizeBN(mint.boundingCurve.initialPrice)}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col self-center text-center space-y-2">
          <p>No Token Migrated yet</p>
          <button className="btn btn-primary">Buy</button>
        </div>
      )}
    </section>
  );
}
