import MintInfo from "@/components/MintInfo";
import Image from "next/image";

export default function MintPage() {
  return (
    <main className="flex flex-1 flex-col px-4 space-y-8 md:px-8">
      <MintInfo />
      <div className="flex flex-col">
        <div className="self-start border border-green rounded p-1">
          <button className="rounded bg-green px-6 py-2 text-black">
            Market
          </button>
          <button className="px-6 py-2 text-green">Activity</button>
          <button className="px-6 py-2 text-green">My Orders</button>
        </div>
      </div>
    </main>
  );
}
