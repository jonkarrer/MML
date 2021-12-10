import { FC } from "react";
import { ILink } from "@/utils/interfaces";

const NavLink: FC<ILink> = ({ text, address }) => (
  <a data-test={text} href={address}>
    <span className="text-white text-xm lg:text-y font-medium cursor-pointer hover:opacity-60">
      {text}
    </span>
  </a>
);

export default NavLink;
