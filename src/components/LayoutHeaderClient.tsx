"use client";

import { MdMenu } from "react-icons/md";

import useNavigation from "@/composables/useNavigation";

export default function LayoutHeaderClient() {
  const { visible, setVisible } = useNavigation();

  return (
    <>
      <div className="flex space-x-4 items-center">
        <button className="btn btn-primary">Connect Wallet</button>
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
