import Image from "next/image";

export function LayoutBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 from-black via-primary/10 to-black bg-gradient-to-t" />
    </div>
  );
}
