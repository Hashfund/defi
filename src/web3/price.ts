import BN from "bn.js";
import { log10BN } from "./decimal";

export const TOTAL_SUPPLY = new BN(1_000_000_000)
  .mul(new BN(10))
  .pow(new BN(6));

export const calculateInitialPrice = (initialBuyAmount: BN) => {
  const offset = new BN(1);
  const adjustmentFactor = initialBuyAmount.div(new BN(10).pow(new BN(9)));

  return adjustmentFactor.add(
    log10BN(initialBuyAmount).add(offset.mul(log10BN(offset.add(TOTAL_SUPPLY))))
  );
};

export const calculateTokenAPrice = (initialPrice: BN, amount: BN) =>
  amount.mul(initialPrice);
export const calculateTokenBPrice = (initialPrice: BN, amount: BN) =>
  amount.div(initialPrice);
