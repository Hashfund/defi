"use client";

import clsx from "clsx";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { MdArrowDropDown, MdCheck } from "react-icons/md";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const filters = {
  market_cap: "Market Cap",
  max_marketcap: "Max Marketcap",
  volume: "Volume",
  price: "Price",
  created_at: "Created At",
};

export default function TokenFilter() {
  const searchParams = useSearchParams();
  const tokenFilter = searchParams.get("token_filter") ?? "market_cap";

  return (
    <Menu
      as="div"
      className="relative"
    >
      <MenuButton className="w-40 flex border border-dark rounded p-2 text-white/75">
        <span className="flex-1 text-left">{filters[tokenFilter as unknown as keyof typeof filters]}</span>
        <MdArrowDropDown className="text-xl" />
      </MenuButton>
      <MenuItems className="absolute right-0 min-w-48 flex flex-col rounded bg-dark-500/50 backdrop-blur-sm divide-y divide-dark-100">
        {Object.entries(filters).map(([key, value]) => {
          const isActive = tokenFilter === key;

          return (
            <MenuItem
              key={key}
              as={Link}
              className={clsx("flex space-x-2 text-left px-4 py-2", {
                "text-primary": isActive,
              })}
              href={`?token_filter=${key}`}
            >
              {isActive && <MdCheck className="text-xl" />}
              <span> {value}</span>
            </MenuItem>
          );
        })}
      </MenuItems>
    </Menu>
  );
}
