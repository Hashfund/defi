import Image from "next/image";
import { MdArrowDownward, MdChevronLeft } from "react-icons/md";

type TokenPriceInputProps = {
  image: string;
  ticker: string;
  onChange: (value: string) => void;
};

export default function TokenPriceInput({
  image,
  ticker,
  onChange,
}: TokenPriceInputProps) {
  return (
    <div className="flex rounded bg-dark-950 px-4 space-x-4">
      <div className="flex items-center space-x-4">
        <Image
          src={image}
          alt={ticker}
          width={32}
          height={32}
          className="rounded-md"
        />
        <h4 className="font-medium">{ticker}</h4>
        <MdChevronLeft className="text-xl -rotate-90" />
      </div>
      <div className="flex-1">
        <input
          placeholder="0.00"
          className="py-4 text-xl"
          lt-md="max-w-sm"
          md="flex-1 text-right"
          onChange={(event) => {
            const value = event.target.value;
            onChange(value);
          }}
        />
      </div>
    </div>
  );
}
