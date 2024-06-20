import clsx from "clsx";
import LeaderboardItem from "../LeaderboardItem";
import { Leaderboard } from "@/lib/api/models/user.mode";
import { normalizeBN } from "@/web3/decimal";

type LiquidListProps = {
  className?: string;
  leaderboard: Leaderboard[];
};

export function LiquidList({ className, leaderboard }: LiquidListProps) {
  return (
    <section className={clsx(className, "flex flex-col space-y-4")}>
      <div>
        <h1 className="text-lg">Top Liquidators</h1>
      </div>
      <div className="flex flex-col space-y-2">
        {leaderboard.map((data, index) => (
          <LeaderboardItem
            key={data.user.id}
            index={index + 1}
            user={data.user}
            amount={normalizeBN(data.volumeIn)}
            ticker="SOL"
          />
        ))}
      </div>
    </section>
  );
}
