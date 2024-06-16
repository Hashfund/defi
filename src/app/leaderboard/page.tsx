import TokenList from "@/components/TokenList";
import { useMints } from "@/composables/useMints";
import TimeFilterInput from "@/components/widgets/TimeFilterInput";

export default async function LeaderboardPage() {
  const { mints } = await useMints();

  return (
    <main className="flex flex-col">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center px-4 space-x-2">
          <div className="flex-1">
            <h1 className="text-nowrap text-xl font-bold md:text-2xl">
              Leaderboard
            </h1>
          </div>
          <TimeFilterInput />
        </div>
        <TokenList mints={mints} />
      </div>
    </main>
  );
}
