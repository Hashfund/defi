import { tokens } from "@/config/dev/token";
import Image from "next/image";

export default function TokenList() {
  return (
    <div className="relative max-w-[100vw] overflow-x-scroll px-4">
      <table className="table-auto">
        <thead>
          <tr>
            <th scope="col">Token</th>
            <th scope="col">Unit Price</th>
            <th scope="col">24h Volume</th>
            <th scope="col">Total Supply</th>
            <th scope="col">Market Cap</th>
            <th scope="col">Holders</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token, index) => (
            <>
              <tr>
                <td
                  scope="row"
                  className="pr-24"
                >
                  <div className="flex items-center text-white/80 space-x-4">
                    <span>{index + 1}</span>
                    <div className="flex items-center space-x-2">
                      <Image
                        src={token.icon}
                        alt={token.name}
                        width={64}
                        height={64}
                        className="rounded-md"
                      />
                      <span>{token.name}</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <p className="text-sm font-medium">
                      {token.price.nativePrice}
                    </p>
                    <div className="flex text-xs space-x-2">
                      <p className="dollar text-white/80">
                        {token.price.dollarPrice}
                      </p>
                      <p className="text-green">{token.price.percentage}%</p>
                    </div>
                  </div>
                </td>
                <td className="dollar text-sm">{token.volume}</td>
                <td className="text-sm">{token.totalSupply}</td>
                <td className="dollar text-sm">{token.marketCap}</td>
                <td className="text-sm">{token.holders}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}
