import { IconType } from "react-icons";
import { FaQuestionCircle } from "react-icons/fa";
import { FaTelegram, FaTwitter } from "react-icons/fa6";
import { MdHome, MdLeaderboard, MdStopCircle } from "react-icons/md";

type Navigation = {
  name: string;
  href: string;
  icon: IconType;
};

export const layoutNavigations: Navigation[] = [
  {
    name: "Home",
    href: "/",
    icon: MdHome,
  },
  {
    name: "Leaderboard",
    href: "/leaderboard",
    icon: MdLeaderboard,
  },
  {
    name: "Mint",
    href: "/create",
    icon: MdStopCircle,
  },
  {
    name: "Twitter",
    href: "",
    icon: FaTwitter,
  },
  {
    name: "Telegram",
    href: "",
    icon: FaTelegram,
  },
  {
    name: "Support",
    href: "",
    icon: FaQuestionCircle,
  },
];
