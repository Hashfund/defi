"use client";
import { Line, Bar } from "react-chartjs-2";
import {
  LineElement,
  BarElement,
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
  BarElement,
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
    <Bar
      data={{
        datasets: [
          {
            data: data,
            barThickness: 55,
            backgroundColor: "#86efac",
            borderColor: "#FAA46A",
            borderRadius: 8,
            label: "Market Cap",
            parsing: { xAxisKey: "x", yAxisKey: "y" },
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
            display: false,
            time: {
              unit: "hour",
            },
          },
          y: {
            beginAtZero: true,
            display: false,
          },
        },
      }}
    />
  );
}
