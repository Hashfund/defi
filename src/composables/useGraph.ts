import moment from "moment";
import Api from "@/lib/api";

export const TimeFrame = {
  "24h": 1,
  "7d": 7,
  "30d": 30,
};

const reverseTimeFrame = (key: keyof typeof TimeFrame) => {
  const delta = TimeFrame[key];

  return [
    new Date().toISOString(),
    moment()
      .subtract(delta * 24, "hour")
      .toISOString(),
  ];
};

export default function useGraph(mint: string, timeFrame: string) {
  const [from, to] = reverseTimeFrame(timeFrame as keyof typeof TimeFrame);
  return Api.instance.mint
    .getGraph(mint, { from, to, unit: timeFrame === "24h" ? "time" : "day" })
    .then(({ data }) => data);
}
