import { FC } from "react";
import { ILink } from "@/utils/interfaces";
import Social from "./lib/Social";

const Footer: FC = () => (
  <footer
    data-cy="footer"
    className="grid place-items-center gap-9 pt-16 pb-8 lg:pb-10 bg-white dark:bg-black "
  >
    <Social forHeader={false} />
    <div className="grid xl:grid-flow-col gap-8">
      <p className="text-black dark:text-white opacity-40 text-center m-auto">
        Market Maker Lite &copy; 2021. All Rights Reserved.
      </p>
      <nav className="hidden lg:grid lg:grid-flow-col gap-5">
        <NavLink
          text="Learn"
          address="https://learn.marketmakerlite.com/"
          newTab={true}
        />
        <NavLink text="Support" address="/support" newTab={false} />
        <NavLink
          text="Documentation"
          address="https://docs.marketmakerlite.com/"
          newTab={true}
        />
        <NavLink
          text={`Terms ${"&"} Conditions`}
          address="/terms"
          newTab={false}
        />
        <NavLink text="Privacy Policy" address="/policy" newTab={false} />
        <NavLink text="Sign In" address="/login" newTab={false} />
        <NavLink text="Sign Up" address="/signup" newTab={false} />
        <NavLink text="Dashboard" address="/dashboard" newTab={false} />
      </nav>
    </div>
  </footer>
);

export default Footer;

const NavLink: FC<ILink> = ({ text, address, newTab }) => (
  <a href={address} target={newTab ? "_blank" : ""} rel="noreferrer">
    <span className="opacity-87 dark:text-white text-xm lg:text-y cursor-pointer hover:opacity-60">
      {text}
    </span>
  </a>
);
