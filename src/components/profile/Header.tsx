import Image from "next/image";
import { MdSquare, MdDiamond } from "react-icons/md";

import { User } from "@/lib/api/models/user.mode";
import EditProfile from "./EditProfile";

type ProfileHeaderProps = {
  user: User;
  mints: number;
  tokens: number;
};

export function ProfileHeader({ user, mints, tokens }: ProfileHeaderProps) {
  return (
    <section
      className="flex space-x-4 px-4"
      md="px-8"
    >
      <div>
        <Image
          src={user.avatar}
          width={128}
          height={128}
          alt={user.name}
          className="w-12 h-12 bg-red rounded-full"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <div>
          <h1>{user.name}</h1>
          <div className="flex space-x-4">
            <div className="flex items-center space-x-1 text-green">
              <MdSquare />
              <span>{mints} Mints</span>
            </div>
            <div className="flex items-center space-x-1 text-purple">
              <MdDiamond />
              <span>{tokens} Tokens</span>
            </div>
          </div>
        </div>
        <EditProfile />
      </div>
    </section>
  );
}
