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
  };
  marketCap: string,
  totalSupply: string;
  boundingCurve: BoundingCurve;
  totalVolume: string;
  last24HrVolume: string;
  last24HrVolumeChange: string,
  last24HrVolumeChangePercentage: string;
  signature: string
};
