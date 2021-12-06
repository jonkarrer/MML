import { FC } from "react";
import { ILink } from "@/utils/interfaces";

const NavLink: FC<ILink> = ({ text, address }) => (
  <a href={address}>
    <span className="text-white text-xm lg:text-y hover:font-black cursor-pointer">
      {text}
    </span>
  </a>
);

export default NavLink;
