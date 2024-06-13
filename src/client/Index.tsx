"use client";

import { useState } from "react";

import TokenList from "@/components/TokenList";
import { timeFilters } from "@/composables/useTimeFilter";
import TimeFilterInput from "@/components/widgets/TimeFilterInput";
import { Mint } from "@/lib/api/models";

type IndexProps = {
  mints: Mint[];
};

export default function IndexPage({ mints }: IndexProps) {
  const [intervalFilter, setIntervalFilter] = useState<
    (typeof timeFilters)[number] | undefined
  >();

  return (
    <>
      <div className="flex items-center px-4 space-x-2">
        <div className="flex-1">
          <h1 className="text-nowrap text-xl font-bold md:text-2xl">
            Recent Mint
          </h1>
        </div>
        <TimeFilterInput
          value={intervalFilter}
          setValue={setIntervalFilter}
        />
      </div>
      <TokenList mints={mints} />
    </>
  );
}
