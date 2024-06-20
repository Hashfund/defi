import { Api } from "./impl";
import { Leaderboard } from "./models/user.mode";

export class userApi extends Api {
  path = "users";

  getLeaderboard() {
    return this.axios<Leaderboard[]>(this.buildPath("leaderboard"));
  }
}
