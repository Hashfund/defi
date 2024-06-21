import { normalizeBN } from "./decimal";

export const calculateBNPercentile = (a: string, b: string) => {
  const value = (normalizeBN(a) - normalizeBN(b));

  return Number.isNaN(value) ? 0 : value < Infinity ? 0 : value.toFixed(1);
};

export const calculateBNPercentage = (a: string, b: string) => {
  const value = (normalizeBN(a) / normalizeBN(b)) * 100;

  return Number.isNaN(value) ? 0 : value;
};

export const calculateMarketcapWeight = (
  marketCap: string,
  maximumMarketCap: string
) => {
  const value = normalizeBN(marketCap) / normalizeBN(maximumMarketCap);
  return Number.isNaN(value) ? 0 : value;
};
