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
    description: string;
    external_url: string;
    properties: [
      files: [
        {
          type: string;
          uri: string;
        }
      ]
    ];
    socials: {
      telegram?: string,
      twitter?: string,
    }
  };
  marketCap: string,
  totalSupply: string;
  boundingCurve: BoundingCurve;
  volumeIn: string;
  volumeOut: string;
  volumeInFrom: string,
  volumeOutFrom: string;
  signature: string,
};
