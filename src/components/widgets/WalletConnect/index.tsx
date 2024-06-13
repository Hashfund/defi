import { useWallet } from "@solana/wallet-adapter-react";

import {
  Popover,
  PopoverButton,
  MenuButton,
  Menu,
  MenuItem,
  MenuItems,
} from "@headlessui/react";

import { truncateAddress } from "../../../web3/address";
import WalletConnectModal from "./WalletConnectModal";

export default function WalletConnect() {
  const { publicKey, connected, disconnect } = useWallet();
  let Button = connected ? MenuButton : PopoverButton;

  return (
    <Popover>
      <Menu
        as="div"
        className="relative"
      >
        <Button className="btn btn-primary truncate outline-none">
          {publicKey ? (
            truncateAddress(publicKey.toBase58())
          ) : (
            <>
              Connect
              <span className="lt-md:hidden"> Wallet</span>
            </>
          )}
        </Button>
        {connected && (
          <MenuItems
            as="div"
            className="absolute right-1/28 mt-2 w-56 flex flex-col rounded bg-gray-950/50 p-4 pt-8 outline-none backdrop-blur-3xl"
          >
            <MenuItem>
              <button
                className="rounded bg-stone-700/50 py-2"
                onClick={disconnect}
              >
                Disconnect
              </button>
            </MenuItem>
          </MenuItems>
        )}
      </Menu>
      {!connected && <WalletConnectModal />}
    </Popover>
  );
}
