import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import Image from "next/image";
import { MdWallet } from "react-icons/md";

import {
  Popover,
  PopoverButton,
  PopoverPanel,
  PopoverOverlay,
} from "@headlessui/react";

export default function WalletConnectButton() {
  const { wallets } = useWallet();
  return (
    <Popover>
      <PopoverButton className="btn btn-primary truncate">
        Connect
        <span className="lt-md:hidden"> Wallet</span>
      </PopoverButton>
      <PopoverPanel className="absolute right-1/16 z-10 h-1/2 w-2/3 overflow-y-scroll rounded bg-stone-950/50 p-4 backdrop-blur-xl md:right-1/24 md:w-1/2 xl:w-1/3">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <div className="items-center rounded bg-green p-2">
              <MdWallet className="text-2xl md:text-4xl" />
            </div>
            <div className="flex-1">
              <h1 className="text-green font-bold md:text-2xl md:text-xl">
                Connect Wallet
              </h1>
              <p className="text-sm text-white/80">
                Choose the wallet you want to connect
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {wallets.map((wallet, index) => (
              <div
                key={index}
                className="flex items-center border-1 border-transparent rounded bg-stone-700/50 p-3 space-x-4 hover:border-green hover:bg-green/20"
              >
                <div>
                  <Image
                    src={wallet.adapter.icon}
                    width={32}
                    height={32}
                    alt={wallet.adapter.name}
                  />
                </div>
                <div>
                  <p>{wallet.adapter.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  );
}
