type PriceInputProps = {
  value: number;
  onChange: (value: number) => void;
};
export default function PriceInput({ value, onChange }: PriceInputProps) {
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex items-center border border-stone-500/50 rounded px-1 space-x-2">
        <input
          type="number"
          className="flex-1 bg-transparent p-2 outline-none"
          onChange={(event) => {
            const value = event.currentTarget.value;
            onChange(Number(value));
          }}
        />
        <button className="rounded-md bg-amber/20 px-2 py-1 text-sm text-amber">
          Max
        </button>
      </div>
      <div className="flex items-center space-x-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <button
            key={index}
            className="rounded-md bg-white px-2 py-1 text-xs text-black hover:bg-white/80 after-font-mono after-content-['%']"
          >
            {25 * (index + 1)}
          </button>
        ))}
      </div>
    </div>
  );
}
