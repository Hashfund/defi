import { Api } from "./impl";
import type { Swap } from "./models/swap.model";
import type { LimitOffsetPagination } from "./models";
import { Graph } from "./models/graph.model";

export class SwapApi extends Api {
  path = "swaps";

  getSwapsByMint(mint: string) {
    return this.axios.get<LimitOffsetPagination<Swap>>(this.buildPath(mint));
  }

  getSwapsGraphByMint(mint: string, filter: { from: string; to: string }) {
    return this.axios.get<Graph[]>(
      this.buildQueryPath(this.buildPath("graph", mint), filter)
    );
  }
}
