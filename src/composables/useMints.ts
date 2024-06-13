import { useEffect, useState } from "react";

import Api from "@/lib/api";
import { Mint } from "@/lib/api/models";

export const useMints = () => {
  const [mints, setMints] = useState<Mint[]>([]);
  const [next, setNext] = useState<string | null>(null);

  useEffect(() => {
    Api.instance.mint.getAllMints().then(({ data }) => {
      console.log(data)
      setMints(data.results);
      setNext(data.next);
    });
  }, []);

  return {
    mints,
    next: () => {
      if (next) {
        Api.instance.mint.getAllMints(next).then(({ data }) => {
          setMints((mints) => mints.concat(data.results));
          setNext(data.next);
        });
      }
    },
  };
};
