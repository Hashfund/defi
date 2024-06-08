"use client";

import { MdMenu } from "react-icons/md";

import useNavigation from "@/composables/useNavigation";
import useThemeColor from "@/composables/useThemeColor";

export default function LayoutHeaderClient() {
  const { visible, setVisible } = useNavigation();
  useThemeColor(visible);

  return (
    <>
      <div className="flex items-center space-x-2">
        <button className="btn btn-primary truncate">
          Connect
          <span className="lt-md:hidden"> Wallet</span>
        </button>
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
