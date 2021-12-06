import { FC } from "react";
import { ILink } from "@/utils/interfaces";

const NavLink: FC<ILink> = ({ text, address, newTab }) => (
  <a href={address} target={newTab ? "_blank" : ""} rel="noreferrer">
    <span className="text-white text-xm lg:text-y hover:font-black cursor-pointer">
      {text}
    </span>
  </a>
);

export default NavLink;
