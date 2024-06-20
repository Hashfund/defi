"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { FaQuestionCircle } from "react-icons/fa";

import { IcLogo } from "@/assets";
import { layoutNavigations } from "@/config";

type NavigationProps = {
  className?: string;
};

export function Navigation({ className }: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav
      className={clsx(className, "flex")}
      md="flex-col p-2 space-y-4"
    >
      <Link
        href="/"
        lt-md="hidden"
      >
        <IcLogo
          alt="Hashfund"
          width={64}
          height={64}
        />
      </Link>
      <ol
        className="flex flex-1 items-center"
        md="flex-col space-y-4"
      >
        {layoutNavigations.map((navigation) => {
          const isActive = navigation.href === pathname;

          return (
            <Link
              key={navigation.name}
              href={navigation.href}
              className={clsx(
                "p-2 cursor-pointer hover:text-primary",
                isActive ? "text-primary" : "text-white/75"
              )}
              lt-md="flex-1 flex flex-col items-center justify-center"
              md="bg-dark-300 rounded-full"
            >
              <navigation.icon className="text-2xl md:text-xl" />
              <small md="hidden">{navigation.name}</small>
            </Link>
          );
        })}
      </ol>
      <ol
        className="flex flex-col items-center"
        lt-md="hidden"
      >
        <li className="cursor-pointer p-2 text-white/75">
          <FaQuestionCircle className="text-2xl" />
        </li>
      </ol>
    </nav>
  );
}
