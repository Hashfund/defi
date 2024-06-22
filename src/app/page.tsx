import { useMints } from "@/composables/api/useMints";
import {
  Annoucement,
  RecentMint,
  RecentFreed,
  Token,
} from "@/components/home";

export default async function HomePage() {
  const { mints: recent } = await useMints({ orderBy: "timestamp" });
  const { mints: freed } = await useMints({
    orderBy: "timestamp",
    canTrade: false,
  });
  const { mints } = await useMints({ orderBy: "volumeIn" });

  return (
    <main className="flex flex-col space-y-8">
      <Annoucement className="self-center" />
      <div
        className="flex px-4 md:px-8"
        lt-md="flex-col space-y-8"
        md="space-x-6"
      >
        <RecentMint
          mints={recent}
          className="flex-1"
        />
        <RecentFreed
          mints={freed}
          className="flex-1"
        />
      </div>
      <Token mints={mints} />
    </main>
  );
}
