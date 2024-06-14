import { Mint } from "@/lib/api/models";
import { normalizeBNString } from "@/web3/decimal";

type MintInfoGridProps = {
  mint: Mint;
};

export default function MintInfoGrid({ mint }: MintInfoGridProps) {
  return (
    <div className="grid grid-cols-3 grid-rows-2 rounded-xl from-black/50 via-green/20 to-black/20 bg-gradient-to-r p-4 md:grid-cols-6 md:grid-rows-1 lt-md:gap-y-2 md:gap-x-4">
      <div>
        <small className="text-white/80 font-medium">24H Change</small>
        <div className="flex space-x-2 items-center">
          <p className="sol text-sm">{normalizeBNString(mint.last24HrVolumeChange)}</p>
          <p className="text-green text-xs">{mint.last24HrVolumeChangePercentage}%</p>
        </div>
      </div>
      <div>
        <small className="text-white/80 font-medium">24H Volume Change</small>
        <p className="sol text-sm">{normalizeBNString(mint.last24HrVolume)}</p>
      </div>
      <div className="flex flex-col lt-md:items-end">
        <small className="text-white/80 font-medium">Total Volume</small>
        <p className="sol text-sm">{normalizeBNString(mint.totalVolume)}</p>
      </div>
      <div>
        <small className="text-white/80 font-medium">Total Supply</small>
        <p className="sol text-sm">{normalizeBNString(mint.totalSupply)}</p>
      </div>
      <div>
        <small className="text-white/80 font-medium">Market Cap</small>
        <p className="sol text-sm">{normalizeBNString(mint.marketCap)}</p>
      </div>
      <div className="flex flex-col lt-md:items-end">
        <small className="text-white/80 font-medium">Balance</small>
        <p>0</p>
      </div>
    </div>
  );
}
