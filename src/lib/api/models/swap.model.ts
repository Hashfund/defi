export type Swap = {
  id: number;
  mint: string;
  amountIn: string;
  amountOut: string;
  tradeDirection: 0 | 1;
  marketCap: number;
  timestamp: string;
  payer: string;
  signature: string;
};

export const mapTradeDirection = (direction: Swap["tradeDirection"]) =>
  direction === 0 ? "buy" : "sell";
