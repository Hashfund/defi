import TokenList from "@/components/TokenList";
import { useMints } from "@/composables/useMints";
import HomeHashtor from "@/components/HomeHashtor";

export default async function HomePage() {
  const { mints } = await useMints();

  return (
    <main className="flex flex-col space-y-8">
      <div className="self-center rounded bg-amber px-8 py-1 text-black">
        <p className="text-sm"> Bought 0.5SOL Of ORDI</p>
      </div>
      <div className="flex snap-x snap-mandatory overflow-x-scroll px-4 md:items-center md:justify-center space-x-8">
        <div className="flex shrink-0 flex-col snap-center space-y-2">
          <h1 className="text-xl font-medium">Hashtor</h1>
          <HomeHashtor mint={mints.at(0)!} />
        </div>
        <div className="flex shrink-0 flex-col snap-center space-y-2">
          <h1 className="text-xl font-medium">Recent freed</h1>
          <HomeHashtor mint={mints.at(0)!} />
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <TokenList mints={mints} />
      </div>
    </main>
  );
}
