import Image from "next/image";
import IcLogoAsset from "./icons/ic_logo.png";

export function IcLogo(props: Omit<React.ComponentProps<typeof Image>, "src">) {
  return (
    <Image 
      {...props} 
      src={IcLogoAsset} />
  );
}
