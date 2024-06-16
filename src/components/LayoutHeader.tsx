import Search from "./widgets/Search";
import LayoutHeaderClient from "./LayoutHeaderClient";
import Image from "next/image";
import { IcLogo } from "@/assets";

export default function LayoutHeader() {
  return (
    <header className="flex items-center p-2 space-x-2 md:p-4">
      <div className="shrink-0 md:hidden">
        <IcLogo
          alt="HashFund"
          width={64}
          height={64}
        />
      </div>
      <div className="flex-1">
        <Search className="max-w-[calc(100vw-16em)] md:w-3/4 xl:w-1/3" />
      </div>
      <LayoutHeaderClient />
    </header>
  );
}
