import Image from "next/image";
import { MdWeb } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

import MintInfoGrid from "./MintInfoGrid";

export default function MintInfo() {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-2">
        <div className="flex flex-1 lt-md:flex-col lt-md:space-y-4 md:space-x-2">
          <div className="lt-md:flex lt-md:items-center lt-md:space-x-2">
            <Image
              width={64}
              height={64}
              src="/dev/pepe.jpg"
              alt="Pepe"
              className="rounded"
            />
            <p className="text-lg md:hidden">Pepe</p>
          </div>
          <div className="flex flex-1 flex-col space-y-2">
            <div className="flex items-center md:space-x-2">
              <p className="text-lg lt-md:hidden">Pepe</p>
              <div className="flex flex-1 items-center space-x-2">
                <button className="flex items-center rounded-full bg-stone-950/50 px-4 py-1 space-x-2">
                  <FaTelegramPlane />
                  <span className="text-sm">Telegram</span>
                </button>
                <button className="flex items-center rounded-full bg-stone-950/50 px-4 py-1 space-x-2">
                  <FaTwitter />
                  <span className="text-sm">Twitter</span>
                </button>
                <button className="flex items-center rounded-full bg-stone-950/50 px-4 py-1 space-x-2">
                  <MdWeb />
                  <span className="text-sm">Website</span>
                </button>
              </div>
            </div>
            <p className="line-clamp-3 text-sm text-white/80">
              WOOF! I&apos;m a fucking dog wif bars! Entries sized like gently used
              cars. Fees never stop me, sub-second slot spree, Hat right on top
              me, mooning to MARS!
            </p>
          </div>
        </div>
        <button className="rounded from-green to-green-200/50 bg-gradient-to-r px-4 py-2 text-black">
          Trade
        </button>
      </div>
      <MintInfoGrid />
    </div>
  );
}
