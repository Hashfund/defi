import { Mint } from "@/lib/api/models";

type MintInfoGridProps = {
  mint: Mint;
};

export default function MintInfoGrid({ mint }: MintInfoGridProps) {
  return (
    <div className="grid grid-cols-3 grid-rows-2 rounded-xl from-black/50 via-green/20 to-black/20 bg-gradient-to-r p-4 md:grid-cols-6 md:grid-rows-1 lt-md:gap-y-2 md:gap-x-4">
      <div>
        <small className="text-white/80 font-medium">24H Change</small>
        <div className="flex">
          <p>{mint.last24HrVolumeChange}</p>
          <p>{mint.last24HrVolumeChangePercentage}%</p>
        </div>
      </div>
      <div>
        <small className="text-white/80 font-medium">24H Volume Change</small>
        <p>{mint.last24HrVolume}</p>
      </div>
      <div className="flex flex-col lt-md:items-end">
        <small className="text-white/80 font-medium">Total Volume</small>
        <p>{mint.totalVolume}</p>
      </div>
      <div>
        <small className="text-white/80 font-medium">Total Supply</small>
        <p>{mint.totalSupply}</p>
      </div>
      <div>
        <small className="text-white/80 font-medium">Market Cap</small>
        <p>{mint.marketCap}</p>
      </div>
      <div className="flex flex-col lt-md:items-end">
        <small className="text-white/80 font-medium">Balance</small>
        <p>0</p>
      </div>
    </div>
  );
}
