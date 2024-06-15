"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { MdClose } from "react-icons/md";

import { IcLogo } from "@/assets";
import useNavigation from "@/composables/useNavigation";
import { layoutNavigations } from "@/config/navigation";

type LayoutNavigationProps = {
  className?: string;
};

export default function LayoutNavigation({ className }: LayoutNavigationProps) {
  const pathname = usePathname();
  const { visible, setVisible } = useNavigation();

  return (
    <nav
      className={clsx(className, "backdrop-blur-sm z-10 md:flex md:flex-col", [
        visible
          ? "lt-md:fixed lt-md:inset-0 lt-md:animate-fade-in lt-md:animate-duration-150 lt-md:bg-black/30"
          : "lt-md:hidden",
      ])}
    >
      <div className="flex flex-1 flex-col bg-black/50 backdrop-blur-3xl lt-md:animate-slide-in-down lt-md:animate-duration-250 md:bg-black/20">
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
          {layoutNavigations.map((navigation, index) => {
            const isActive = pathname === navigation.href;

            return (
              <Link
                key={index}
                href={navigation.href}
                className={clsx(
                  "flex items-center p-4 space-x-4 hover:text-white/60",
                  [isActive ? "text-green" : "text-white"]
                )}
                onClick={() => setVisible(false)}
              >
                <navigation.icon className="text-xl" />
                <p>{navigation.name}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
