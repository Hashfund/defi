"use client";
import { Line } from "react-chartjs-2";
import {
  LineElement,
  Chart,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  TimeScale,
} from "chart.js";
import "chartjs-adapter-moment";
import { Graph } from "@/lib/api/models/graph.model";

Chart.register(
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  TimeScale,
  PointElement
);

type TimeLineChartProps = {
  data: Graph[];
};

export default function TimeLineChart({ data }: TimeLineChartProps) {
  return (
    <Line
      data={{
        // labels: data.map(({ x }) => x),
        datasets: [
          {
            data: data,
            backgroundColor: "#FAA46A",
            borderColor: "#FAA46A",
            label: "Market Cap",
            parsing: { xAxisKey: "x", yAxisKey: "y" },
          },
        ],
      }}
      options={{
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
        },
        scales: {
          x: {
            type: "time",
            display: false,
            time: {
              unit: "hour",
            },
          },
          y: {
            display: false,
          }
        },
      }}
    />
  );
}
