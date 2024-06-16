import { useEffect, useState } from "react";

import Api from "@/lib/api";
import { Mint } from "@/lib/api/models";

export const useMints = async () => {
  const { next, results } = await Api.instance.mint
    .getAllMints()
    .then(({ data }) => data);

  return {
    next,
    mints: results,
  };
};
