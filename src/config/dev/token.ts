type Token = {
  name: string;
  icon: string;
  price: {
    nativePrice: string;
    dollarPrice: string;
    percentage: string;
  };
  volume: string;
  totalSupply: string;
  marketCap: string;
  holders: string;
};

export const tokens: Token[] = [
  {
    name: "Goku",
    icon: "/dev/goku.jpeg",
    price: {
      nativePrice: "1 SOL",
      dollarPrice: "152.9",
      percentage: "+5.76",
    },
    volume: "10,000,000",
    totalSupply: "100,000,000",
    marketCap: "1,000,000",
    holders: "500",
  },
  {
    name: "Pepe",
    icon: "/dev/pepe.jpg",
    price: {
      nativePrice: "0.5 SOL",
      dollarPrice: "56.1",
      percentage: "+2.76",
    },
    volume: "5,000,000",
    totalSupply: "100,000,000",
    marketCap: "3,000,000",
    holders: "1,000",
  },
  {
    name: "Ordi",
    icon: "/dev/ordi.jpeg",
    price: {
      nativePrice: "5 SOL",
      dollarPrice: "2600",
      percentage: "+2.76",
    },
    volume: "2,000,000",
    totalSupply: "100,000,000",
    marketCap: "4,000,000",
    holders: "4,000,000",
  },
  {
    name: "Spam",
    icon: "/dev/spam.gif",
    price: {
      nativePrice: "2 SOL",
      dollarPrice: "256",
      percentage: "-1.76",
    },
    volume: "3,000,000",
    totalSupply: "100,000,000",
    marketCap: "1,000,000",
    holders: "1250",
  },
];
