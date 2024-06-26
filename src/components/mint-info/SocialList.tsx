import clsx from "clsx";
import { FaTelegram, FaTwitter } from "react-icons/fa";
import { MdWeb } from "react-icons/md";

type SocialListProps = {
  className?: string;
};

export default function SocialList({ className }: SocialListProps) {
  return (
    <div className={clsx(className, "flex space-x-4 text-sm")}>
      <button className="flex items-center rounded bg-dark p-2 space-x-2">
        <FaTelegram className="text-xl text-purple" />
        <span>Telegram</span>
      </button>
      <button className="flex items-center rounded bg-dark p-2 space-x-2">
        <FaTwitter className="text-xl text-blue" />
        <span>Twitter</span>
      </button>
      <button className="flex items-center rounded bg-dark p-2 space-x-2">
        <MdWeb className="text-xl" />
        <span>Website</span>
      </button>
    </div>
  );
}
