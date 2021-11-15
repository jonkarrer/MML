import { ILink } from "@/utils/interfaces";
import Link from "next/link";
import { FC } from "react";

const NavLink: FC<ILink> = ({ text, address, newTab }) => (
  <a href={address} target={newTab ? "_blank" : ""} rel="noreferrer">
    <span className="opacity-80 text-white text-xm lg:text-ty cursor-pointer">
      {text}
    </span>
  </a>
);

export default NavLink;
