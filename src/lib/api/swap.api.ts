import { Api } from "./impl";
import type { Swap } from "./models/swap.model";
import type { LimitOffsetPagination } from "./models";

export class SwapApi extends Api {
  path = "swaps";

  getSwapsByMint(mint: string) {
    return this.axios.get<LimitOffsetPagination<Swap>>(this.buildPath(mint));
  }
}
