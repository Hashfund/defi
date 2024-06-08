import clsx from "clsx";
import { MdSearch } from "react-icons/md";

type SearchProps = {
  className?: string;
};

export default function Search({ className }: SearchProps) {
  return (
    <div
      className={clsx(
        "input-with-icon flex items-center bg-black/50 border-1 border-transparent px-2 rounded-md focus-within:ring-3 focus-within:ring-amber-300/50 focus-within:border-amber/50",
        className
      )}
    >
      <MdSearch className="text-xl text-amber-50/50" />
      <input
        className="bg-transparent p-2 outline-none lt-md:max-w-48 placeholder-amber-50/50"
        placeholder="Search for token"
      />
    </div>
  );
}
