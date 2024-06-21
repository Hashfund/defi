"use client";
import { Line } from "react-chartjs-2";
import {
  LineElement,
  Chart,
  Tooltip,
  LinearScale,
  PointElement,
  TimeScale,
  CategoryScale,
} from "chart.js";
import "chartjs-adapter-moment";
import TimeFilter from "../widgets/TimeFilter";
import { Mint } from "@/lib/api/models";
import { Graph } from "@/lib/api/models/graph.model";
import { useState } from "react";
import { normalizeBN } from "@/web3/decimal";
import moment from "moment";
import { calculateBNPercentile } from "@/web3/math";

Chart.register(
  LineElement,
  Tooltip,
  TimeScale,
  LinearScale,
  PointElement,
  CategoryScale
);

type GraphProps = {
  mint: Mint;
  graph: Graph[];
};

export function MintInfoGraph({ mint, graph }: GraphProps) {
  const [selected, setSelected] = useState<Graph>(graph.at(0)!);

  return (
    <section
      className="h-lg flex flex-col px-4 space-y-8"
      md="px-8"
    >
      <div className="flex items-center space-x-2">
        <div className="flex flex-1 flex-col">
          <div className="flex items-center space-x-4">
            <h1 className="sol text-4xl font-bold">
              {normalizeBN(selected.marketCap)}
            </h1>
            <p className="per self-end text-sm text-green">
              {calculateBNPercentile(selected.marketCap, mint.marketCap)}
            </p>
          </div>
          <div>
            <p className="text-sm text-white/75 font-light">
              {moment(selected?.date).format("Do MMMM YYYY, hh:mm a")}
            </p>
          </div>
        </div>
        <TimeFilter className="!hidden" />
      </div>
      <div className="flex-1">
        <Line
          data={{
            datasets: [
              {
                label: "MarketCap",
                borderColor: "#FAA46A",
                // @ts-ignore
                //lineTension: 0.1,
                data: graph.map((data) => ({
                  date: data.date,
                  volumeIn: normalizeBN(data.marketCap),
                })),
                parsing: { xAxisKey: "date", yAxisKey: "volumeIn" },
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              x: {
                display: false,
                type: "time",
                time: {
                  unit: "day",
                  displayFormats: {
                    day: "Do MMMM YYYY, hh:mm a",
                  },
                },
              },
              y: {
                display: false,
              },
            },
            onHover(e, data) {
              if (data.length > 0) {
                setSelected(graph[data[0].index]);
              }
            },
          }}
        />
      </div>
    </section>
  );
}
