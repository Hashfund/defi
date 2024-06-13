import { BN } from "bn.js";

export const normalizeBNString = function (
  value: string,
  decimals: number = 9
) {
  return new BN(value, "hex").div(new BN(10).pow(new BN(decimals))).toNumber();
};
