import { FC } from "react";
import { ILink } from "@/utils/interfaces";

const NavLink: FC<ILink> = ({ text, address, newTab }) => (
  <a href={address} target={newTab ? "_blank" : ""} rel="noreferrer">
    <span className="text-87 text-xm lg:text-y cursor-pointer hover:opacity-60">
      {text}
    </span>
  </a>
);

export default NavLink;
