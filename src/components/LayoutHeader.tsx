import { IcLogo } from "@/assets";
import Search from "./widgets/Search";
import LayoutHeaderClient from "./LayoutHeaderClient";

export default function LayoutHeader() {
  return (
    <header className="flex items-center space-x-4 p-4 md:px-8">
      <div className="flex-1">
        <Search className="md:w-3/4 xl:w-1/3" />
      </div>
      <LayoutHeaderClient />
    </header>
  );
}
