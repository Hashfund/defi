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
      <MdSearch className="text-amber-50/50 shrink-0 text-xl" />
      <input
        className="placeholder-amber-50/50 flex-1 bg-transparent p-2 outline-none"
        placeholder="Search for token"
      />
    </div>
  );
}
