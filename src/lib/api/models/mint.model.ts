export type BoundingCurve = {
  id: string;
  mint: string;
  maximumMarketCap: string;
  initialPrice: string;
  timestamp: string;
};

export type Mint = {
  id: string;
  name: string;
  ticker: string;
  creator: string;
  timestamp: string;
  metadata: {
    name: string;
    symbol: string;
    image: string;
    external_url: string;
    properties: [
      files: [
        {
          type: string;
          uri: string;
        }
      ]
    ];
  };
  totalSupply: string;
  boundingCurve?: BoundingCurve;
};
