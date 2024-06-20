import { Mint } from "@/lib/api/models";

type MyInfoProps = {
  mint: Mint;
};

export function MyInfo({ mint }: MyInfoProps) {
  return (
    <section
      className="bg-secondary/10 p-4 text-white/75"
      md="px-8"
    >
      <div className="border-b border-dark-100 py-4">
        <h1 className="text-2xl font-medium">Info</h1>
      </div>
      <div className="flex flex-col divide-y divide-dark-100">
        <div className="flex py-2">
          <p className="flex-1">Balance</p>
          <p>0</p>
        </div>
        <div className="flex py-2">
          <p className="flex-1">Value</p>
          <p>0</p>
        </div>
        <div className="flex py-2">
          <p className="flex-1">Buy</p>
          <p>0</p>
        </div>
        <div className="flex py-2">
          <p className="flex-1">Sold</p>
          <p>0</p>
        </div>
      </div>
    </section>
  );
}
