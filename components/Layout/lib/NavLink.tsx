import { ILink } from "@/utils/interfaces";
import Link from "next/link";
import { FC } from "react";

const NavLink: FC<ILink> = ({ text, address }) => (
  <Link passHref href={address}>
    <span className="opacity-80 dark:text-white text-xm lg:text-ty cursor-pointer">
      {text}
    </span>
  </Link>
);

export default NavLink;
