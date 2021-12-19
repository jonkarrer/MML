import { FC } from "react";
import SocialMediaIcons from "./lib/Footer/Social";
import NavLink from "./lib/Footer/NavLink";

const Footer: FC = () => (
  <footer
    data-test="footer"
    className="grid place-items-center gap-9 pt-16 pb-8 lg:pb-10 bg-white dark:bg-121212 "
  >
    <SocialMediaIcons />

    <div className="grid xl:grid-flow-col gap-8">
      <p className="text-black text-15 dark:text-white opacity-40 text-center m-auto">
        Market Maker Lite &copy; 2021. All Rights Reserved.
      </p>

      <nav className="hidden lg:grid lg:grid-flow-col gap-5">
        <NavLink text="Learn" address="https://learn.marketmakerlite.com/" />

        <NavLink text="Support" address="/support" />

        <NavLink
          text="Documentation"
          address="https://docs.marketmakerlite.com/"
        />

        <NavLink text={`Terms ${"&"} Conditions`} address="/terms" />

        <NavLink text="Privacy Policy" address="/policy" />

        <NavLink text="Sign In" address="/login" />

        <NavLink text="Sign Up" address="/signup" />

        <NavLink text="Dashboard" address="/dashboard" />
      </nav>
    </div>
  </footer>
);

export default Footer;
