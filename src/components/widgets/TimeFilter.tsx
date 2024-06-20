"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { TimeFrame } from "@/composables/useGraph";
import clsx from "clsx";

export default function TimeFilter() {
  const search = useSearchParams();
  const timeFrame = search.get("timeFrame");

  return (
    <div className="flex text-sm font-light space-x-4">
      {Object.keys(TimeFrame).map((time) => {
        const isActive = timeFrame ? time === timeFrame : time === "24h";
        return (
          <Link
            key={time}
            href={`?timeFrame=${time}`}
            className={clsx(
              "px-2 py-0.5 rounded-md",
              isActive ? "text-primary bg-primary/20" : ""
            )}
          >
            {time}
          </Link>
        );
      })}
    </div>
  );
}
