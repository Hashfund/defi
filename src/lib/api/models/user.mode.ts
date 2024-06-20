import { Mint } from "./mint.model";

export type User = {
  id: string;
  name: string | null;
  avatar: string | null;
};

export type Leaderboard = Pick<Mint, "volumeIn" | "volumeOut"> & { user: User };
