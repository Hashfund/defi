import Image from "next/image";
import { Mint } from "@/lib/api/models";
import { truncateAddress } from "@/web3/address";
import { MdDiamond, MdWeb } from "react-icons/md";
import { FaTelegram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

type HomeHashtorProps = {
  mint: Mint;
};

export default function HomeHashtor({ mint }: HomeHashtorProps) {
  return (
    <div className="relative flex rounded md:min-w-lg">
      <div>
        <Image
          src={mint.metadata.image}
          alt={mint.name}
          width={196}
          height={196}
          className="rounded-l"
        />
      </div>
      <div className="flex flex-1 flex-col rounded bg-amber/10 p-4 space-y-4">
        <div className="text-sm">
          <h1 className="text-lg font-bold">{mint.name}</h1>
          <p className="sol text-green">Market cap: {mint.marketCap}</p>
          <p className="sol">Last 24hr Volume: {mint.last24HrVolume}</p>
          <p>{mint.ticker}</p>
          <p className="text-amber/50">
            Deployed by <a>{truncateAddress(mint.creator)}</a>
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="p-2">
            <MdWeb className="text-2xl" />
          </div>
          <div className="p-2">
            <FaTelegram className="text-2xl" />
          </div>
          <div className="p-2">
            <FaTwitter className="text-2xl" />
          </div>
        </div>
      </div>
      <div className="absolute right-0 h-12 w-12 flex items-center justify-center rounded-full bg-amber text-black -top-8">
        <MdDiamond className="text-4xl" />
      </div>
    </div>
  );
}
