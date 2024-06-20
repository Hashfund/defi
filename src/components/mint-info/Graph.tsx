"use client";
import { Line } from "react-chartjs-2";
import {
  LineElement,
  Chart,
  Tooltip,
  LinearScale,
  PointElement,
  TimeScale,
} from "chart.js";
import "chartjs-adapter-moment";
import TimeFilter from "../widgets/TimeFilter";
import { Mint } from "@/lib/api/models";
import { Graph } from "@/lib/api/models/graph.model";
import { useState } from "react";
import { normalizeBN } from "@/web3/decimal";
import moment from "moment";
import { calculateBNPercentile } from "@/web3/math";

Chart.register(LineElement, Tooltip, TimeScale, LinearScale, PointElement);

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
              {normalizeBN(selected?.volumeIn ?? mint.volumeIn)}
            </h1>
            <p className="per self-end text-sm text-green">
              {calculateBNPercentile(
                mint.volumeIn,
                selected?.volumeIn ?? mint.volumeIn
              )}
            </p>
          </div>
          <div>
            <p className="text-sm text-white/75 font-light">
              {moment(selected?.date).format("Do MMMM YYYY, hh:mm a")}
            </p>
          </div>
        </div>
        <TimeFilter />
      </div>
      <div className="flex-1">
        <Line
          data={{
            datasets: [
              {
                // @ts-ignore
                lineTension: 0.3,
                borderColor: "#FAA46A",
                data: graph.map(({ date, volumeIn }) => ({
                  date,
                  volumeIn: normalizeBN(volumeIn),
                })),
                parsing: { xAxisKey: "volumeIn", yAxisKey: "date" },
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
                type: "time",
                time: {
                  unit: "hour",
                },
              },
              y: {
                beginAtZero: true,
              },
            },
            onHover(e, data) {
              if(data.length > 0)
              setSelected(graph[data[0].index]);
            },
          }}
        />
      </div>
    </section>
  );
}
