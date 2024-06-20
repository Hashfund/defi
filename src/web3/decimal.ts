import { safeBN, unsafeBnToNumber } from "@solocker/safe-bn";
import BN from "bn.js";

export const normalizeBNString = function (
  value: BN | string,
  decimals: number = 9
) {
  return unsafeBnToNumber(
    safeBN(value, decimals).div(new BN(10).pow(new BN(decimals))),
    decimals
  );
};

export const normalizeBN = (value: string, decimals: number = 9) =>
  normalizeBNString(new BN(value).toString("hex"), decimals);

export const log10BN = function (value: BN) {
  if (value.isZero()) return new BN(-Infinity);
  if (value.eqn(1)) return new BN(0);

  const str = value.toString();
  const integerLength = str.length;

  const integerLog = integerLength - 1;

  const mantissaStr = "0." + str.slice(1);
  const mantissa = parseFloat(mantissaStr);

  if (mantissa === 0) return new BN(integerLog);

  const fractionalLog = Math.log10(mantissa);

  return new BN(integerLog + fractionalLog);
};
