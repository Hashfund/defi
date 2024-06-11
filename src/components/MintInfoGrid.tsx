export default function MintInfoGrid() {
  return (
    <div className="grid grid-cols-3 grid-rows-2 rounded-xl from-black/50 via-green/20 to-black/20 bg-gradient-to-r p-4 md:grid-cols-6 md:grid-rows-1 lt-md:gap-y-2 md:gap-x-4">
      <div>
        <small className="text-white/80 font-medium">24H Change</small>
        <p>0%</p>
      </div>
      <div>
        <small className="text-white/80 font-medium">24H Volume</small>
        <p>0.1715 SOL</p>
      </div>
      <div className="flex flex-col lt-md:items-end">
        <small className="text-white/80 font-medium">Total Volume</small>
        <p>253.41 SOL</p>
      </div>
      <div>
        <small className="text-white/80 font-medium">Total Supply</small>
        <p>690,000,00</p>
      </div>
      <div>
        <small className="text-white/80 font-medium">Market Cap</small>
        <p>144.9 SOL</p>
      </div>
      <div className="flex flex-col lt-md:items-end">
        <small className="text-white/80 font-medium">Holders</small>
        <p>2,248</p>
      </div>
    </div>
  );
}
