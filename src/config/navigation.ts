import { IconType } from "react-icons";
import { FaQuestionCircle } from "react-icons/fa";
import { FaTelegram, FaTwitter } from "react-icons/fa6";
import { MdAddCircle, MdHome } from "react-icons/md";

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
    name: "Create",
    href: "/create",
    icon: MdAddCircle,
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
