"use client";
import clsx from "clsx";
import { MdClose } from "react-icons/md";
import useNavigation from "@/composables/useNavigation";
import { layoutNavigations } from "@/config/navigation";
import { IcLogo } from "@/assets";
import Link from "next/link";

type LayoutNavigationProps = {
  className?: string;
};

export default function LayoutNavigation({ className }: LayoutNavigationProps) {
  const { visible, setVisible } = useNavigation();

  return (
    <nav
      className={clsx(className, "md:flex md:flex-col", [
        visible
          ? "lt-md:fixed lt-md:inset-0 lt-md:animate-fade-in lt-md:animate-duration-150 lt-md:bg-black/30"
          : "lt-md:hidden",
      ])}
    >
      <div className="flex-1 flex flex-col bg-black/50 lt-md:backdrop-blur-3xl lt-md:animate-slide-in-down lt-md:animate-duration-250">
        <div className="flex">
          <div className="flex-1">
            <IcLogo
              alt="HashFund"
              width={64}
              height={64}
            />
          </div>
          <button
            className="self-end p-4 md:hidden"
            onClick={() => setVisible(false)}
          >
            <MdClose className="text-xl" />
          </button>
        </div>
        <div className="md:flex md:flex-col">
          {layoutNavigations.map((navigation, index) => (
            <Link
              href={navigation.href}
              className="flex space-x-2 items-center p-4 hover:text-white/60"
            >
              <navigation.icon className="text-xl" />
              <p>{navigation.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
