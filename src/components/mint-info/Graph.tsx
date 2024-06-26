"use client";
import moment from "moment";
import { useState } from "react";

import { Mint } from "@/lib/api/models";
import { Graph } from "@/lib/api/models/graph.model";

import { normalizeBN } from "@/web3/decimal";
import { calculateBNPercentile } from "@/web3/math";

import TimeFilter from "../widgets/TimeFilter";
import Chart from "../widgets/Chart";

type GraphProps = {
  mint: Mint;
  graph: Graph[];
};

export function MintInfoGraph({ mint, graph }: GraphProps) {
  const index0 = graph.at(0)!;

  const [selected, setSelected] = useState<{ time: number; value: number }>({
    time: Date.parse(index0.date),
    value: normalizeBN(index0.marketCap),
  });

  return (
    <section
      className="h-lg flex flex-col px-4 space-y-8"
      md="px-8"
    >
      <div className="flex items-center space-x-2">
        <div className="flex flex-1 flex-col">
          <div className="flex items-center space-x-4">
            <h1 className="sol text-4xl font-bold">{selected.value}</h1>
            <p className="per self-end text-sm text-green">
              {((normalizeBN(mint.marketCap) - selected.value) /
                normalizeBN(mint.marketCap)) *
                100}
            </p>
          </div>
          <div>
            <p className="text-sm text-white/75 font-light">
              {moment(selected.time * 1000).format("Do MMMM YYYY, hh:mm a")}
            </p>
          </div>
        </div>
        <TimeFilter className="!hidden" />
      </div>
      <Chart
        className="flex-1"
        data={graph.map(
          ({ date, marketCap, amountIn, amountOut, tradeDirection }) => ({
            time: Date.parse(date) / 1000,
            high:
              normalizeBN(marketCap) +
              normalizeBN(tradeDirection === 0 ? amountIn : amountOut),
            open: normalizeBN(marketCap),
            close: normalizeBN(mint.marketCap),
            low:
              normalizeBN(marketCap) -
              normalizeBN(tradeDirection === 0 ? amountIn : amountOut),
            value: normalizeBN(marketCap),
          })
        )}
        onClick={(data) => {
          if ("close" in data)
            setSelected({
              time: data.time,
              value: data.close,
            });
        }}
      />
    </section>
  );
}
