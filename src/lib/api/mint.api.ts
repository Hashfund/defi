import { Api } from "./impl";
import { LimitOffsetPagination, Mint } from "./models";

export class MintApi extends Api {
  path = "mints";

  getAllMints(url?: string) {
    return this.axios.get<LimitOffsetPagination<Mint>>(url ?? this.path);
  }

  getMint(id: string) {
    return this.axios.get<Mint>(this.buildPath(id));
  }
}
