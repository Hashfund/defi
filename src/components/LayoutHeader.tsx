import { IcLogo } from "@/assets";
import LayoutHeaderClient from "./LayoutHeaderClient";

export default function LayoutHeader() {
  return (
    <header className="flex items-center p-4 md:px-8">
      <div className="flex-1" />
      <LayoutHeaderClient />
    </header>
  );
}
