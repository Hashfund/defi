import clsx from "clsx";

import { Mint } from "@/lib/api/models";
import { TokenList } from "../TokenList";

type TokenProps = {
  className?: string;
  mints: Mint[];
};

export function Token({ className, mints }: TokenProps) {
  return (
    <div className={clsx(className, "flex flex-col space-y-4")}>
      <div
        className="px-4"
        md="px-8"
      >
        <div className="flex items-center p-2 text-amber space-x-2">
          <span>Tokens</span>
          <div className="rounded bg-amber-100/20 px-3 text-amber-100">
            {mints.length}
          </div>
        </div>
      </div>
      <TokenList
        className="flex-1 px-4 md:px-8"
        mints={mints}
      />
    </div>
  );
}
