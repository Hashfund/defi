"use client";
import { useState } from "react";

import TokenList from "@/components/TokenList";
import { timeFilters } from "@/composables/useTimeFilter";
import TimeFilterInput from "@/components/widgets/TimeFilterInput";
import { useMints } from "@/composables/useMints";

export default function HomePage() {
  const [intervalFilter, setIntervalFilter] = useState<
    (typeof timeFilters)[number] | undefined
  >();

  const { mints, next } = useMints();

  return (
    <main className="flex flex-col">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center px-4 space-x-2">
          <div className="flex-1">
            <h1 className="text-nowrap text-xl font-bold md:text-2xl">
              Leaderboard
            </h1>
          </div>
          <TimeFilterInput
            value={intervalFilter}
            setValue={setIntervalFilter}
          />
        </div>
        <TokenList mints={mints} />
      </div>
    </main>
  );
}
