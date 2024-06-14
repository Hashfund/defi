import { useEffect, useState } from "react";

import Api from "@/lib/api";
import { Mint } from "@/lib/api/models";

export default function useMint(mintAddress: string) {
  return Api.instance.mint.getMint(mintAddress).then(({ data }) => data);
}
