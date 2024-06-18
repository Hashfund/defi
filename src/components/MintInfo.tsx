"use client";
import Link from "next/link";
import Image from "next/image";
import { MdWeb } from "react-icons/md";
import { FaTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

import type { Mint } from "@/lib/api/models";

import MintTrade from "./MintTrade";
import MintInfoGrid from "./MintInfoGrid";
import { useWallet } from "@solana/wallet-adapter-react";

type MintInfoProps = {
  mint: Mint;
};

export default function MintInfo({ mint }: MintInfoProps) {
  const { connected } = useWallet();

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex md:space-x-2">
        <div className="flex flex-1 lt-md:flex-col lt-md:space-y-4 md:space-x-2">
          <div className="lt-md:flex lt-md:items-center lt-md:space-x-2">
            <Image
              width={64}
              height={64}
              src={mint.metadata.image}
              alt={mint.name}
              className="rounded"
            />
            <p className="text-lg md:hidden">{mint.name}</p>
          </div>
          <div className="flex flex-1 flex-col space-y-2">
            <div className="flex items-center md:space-x-2">
              <p className="text-lg lt-md:hidden">{mint.name}</p>
              <div className="flex flex-1 items-center space-x-2">
                <button className="flex items-center rounded-full bg-stone-950/50 px-4 py-1 space-x-2">
                  <FaTelegramPlane />
                  <span className="text-sm">Telegram</span>
                </button>
                <button className="flex items-center rounded-full bg-stone-950/50 px-4 py-1 space-x-2">
                  <FaTwitter />
                  <span className="text-sm">Twitter</span>
                </button>
                {mint.metadata.external_url && (
                  <Link
                    href={mint.metadata.external_url}
                    target="_blank"
                    className="flex items-center rounded-full bg-stone-950/50 px-4 py-1 space-x-2"
                  >
                    <MdWeb />
                    <span className="text-sm">Website</span>
                  </Link>
                )}
              </div>
            </div>
            <p className="line-clamp-3 text-sm text-white/80">
              {mint.metadata.description}
            </p>
          </div>
        </div>
        {connected && <MintTrade mint={mint} />}
      </div>
      <MintInfoGrid mint={mint} />
    </div>
  );
}
