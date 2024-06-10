"use client";
import clsx from "clsx";
import { TimeFilter, timeFilters } from "@/composables/useTimeFilter";

type TimeValue = (typeof TimeFilter)[keyof typeof TimeFilter];

type TimeFilterInputProps = {
  value?: (typeof timeFilters)[number];
  setValue: React.Dispatch<
    React.SetStateAction<(typeof timeFilters)[number] | undefined>
  >;
};

export default function TimeFilterInput({
  value,
  setValue,
}: TimeFilterInputProps) {
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
              { "bg-white/10 text-amber-500 rounded": isActive },
            ])}
            onClick={() => setValue(timeFilter)}
          >
            {timeFilter}
          </button>
        );
      })}
    </div>
  );
}
