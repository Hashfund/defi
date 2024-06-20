import Image from "next/image";
import { MdArrowDownward, MdChevronLeft } from "react-icons/md";

export default function TokenPriceInput() {
  return (
    <div className="flex rounded bg-dark-950 px-4 space-x-4">
      <div className="flex items-center space-x-4">
        <Image
          src="/dev/ordi.jpg"
          alt="SOL"
          width={32}
          height={32}
          className="rounded-md"
        />
        <h4 className="text-base font-medium">SOL</h4>
        <MdChevronLeft className="text-xl -rotate-90" />
      </div>
      <div className="flex-1">
        <input
          placeholder="0.00"
          className="py-4 text-xl"
          lt-md="max-w-sm"
          md="flex-1 text-right"
        />
      </div>
    </div>
  );
}
