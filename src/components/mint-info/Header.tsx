import Image from "next/image";
import { SwapButton } from "../swap";
import { Mint } from "@/lib/api/models";
import ProgressBar from "../ProgressBar";
import { normalizeBN } from "@/web3/decimal";
import { calculateBNPercentage } from "@/web3/math";

type HeaderProps = {
  mint: Mint;
};

export function Header({ mint }: HeaderProps) {
  return (
    <header
      className="flex px-4"
      lt-md="flex-col space-y-2"
      md="space-x-4 px-8"
    >
      <div>
        <Image
          src={mint.metadata.image}
          alt={mint.metadata.name}
          width={64}
          height={64}
          className="rounded"
        />
      </div>
      <div className="flex flex-1 space-x-4">
        <div className="flex flex-1 items-center">
          <div className="flex flex-1 flex-col space-y-2">
            <div>
              <p className="text-2xl font-bold">{mint.name}</p>
              <small className="text-white/75">
                {mint.metadata.description}
              </small>
            </div>
            <div
              className="flex text-sm font-light font-sans"
              lt-md="flex-col"
              md="items-center  space-x-2"
            >
              <p className="sol">{normalizeBN(mint.marketCap)}</p>
              <ProgressBar
                className="w-48 lt-md:flex-1"
                value={calculateBNPercentage(
                  mint.marketCap,
                  mint.boundingCurve?.maximumMarketCap ?? 0
                )}
              />
              <p
                className="sol"
                lt-md="self-end"
              >
                {normalizeBN(mint.boundingCurve?.maximumMarketCap ?? 0)}
              </p>
            </div>
          </div>
        </div>
        <SwapButton />
      </div>
    </header>
  );
}
