import Api from "@/lib/api";

type TimeFrame = "24h" | "7d" | "1m";

const reverseTimeFrame = (value: TimeFrame) => {
  const now = new Date();

  switch (value) {
    case "24h":
      const last24h = new Date();
      last24h.setTime(last24h.getTime() - 24 * 60 * 60 * 1000);
      return [last24h.toISOString(), now.toISOString()];
  }

  return [];
};

export default function useGraph(mint: string, timeFrame: TimeFrame) {
  const [from, to] = reverseTimeFrame(timeFrame);
  return Api.instance.swap
    .getSwapsGraphByMint(mint, { from, to })
    .then(({ data }) => data);
}
