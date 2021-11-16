import { ILink } from "@/utils/interfaces";
import { FC } from "react";

const NavLink: FC<ILink> = ({ text, address, newTab }) => (
  <a href={address} target={newTab ? "_blank" : ""} rel="noreferrer">
    <span className="text-white text-xm lg:text-y font-bold cursor-pointer">
      {text}
    </span>
  </a>
);

export default NavLink;
