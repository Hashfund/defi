"use client";
import clsx from "clsx";
import { useSearchParams, useRouter } from "next/navigation";
import { TimeFilter, timeFilters } from "@/composables/useTimeFilter";

type TimeValue = (typeof TimeFilter)[keyof typeof TimeFilter];

export default function TimeFilterInput() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const value = searchParams.get("time");

  return (
    <div className="flex border border-amber/20 rounded-md bg-black/50 px-2 py-1 text-sm space-x-2">
      {timeFilters.map((timeFilter, index) => {
        const isActive = value
          ? timeFilter === value
          : timeFilter === TimeFilter.DEFAULT;
        return (
          <button
            key={index}
            className={clsx("px-3 py-2", [
              { "bg-amber/20 text-amber rounded": isActive },
            ])}
            onClick={() => router.push(`?time=${timeFilter}`)}
          >
            {timeFilter}
          </button>
        );
      })}
    </div>
  );
}
