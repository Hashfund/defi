"use client";

import { MdMenu } from "react-icons/md";

import useNavigation from "@/composables/useNavigation";
import useThemeColor from "@/composables/useThemeColor";
import WalletConnectButton from "./widgets/WalletConnect";

export default function LayoutHeaderClient() {
  const { visible, setVisible } = useNavigation();
  useThemeColor(visible);

  return (
    <>
      <div className="flex items-center space-x-2">
       <WalletConnectButton />
        <button
          className="px-2 py-4 md:hidden"
          onClick={() => setVisible(!visible)}
        >
          <MdMenu className="text-xl" />
        </button>
      </div>
    </>
  );
}
