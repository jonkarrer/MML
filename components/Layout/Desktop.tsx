import { ILink } from "@/utils/interfaces";
import { FC } from "react";
import Logo from "./lib/Logo";
import DashButton from "./lib/DashButton";

const Desktop: FC = () => {
  return (
    <header
      data-cy="desktop-header"
      className="hidden lg:block w-full absolute top-0 left-0 py-2"
    >
      <div className="wrapper flex items-center justify-between m-auto">
        <nav className="grid grid-flow-col items-center gap-8 text-white">
          <Logo />
          <NavLink text="Features" address="/#features" newTab={false} />
          <NavLink
            text="Learn"
            address="http://learn.marketmakerlite.com/"
            newTab={true}
          />
          <NavLink text="Support" address="/support" newTab={false} />
          <NavLink
            text="Docs"
            address="https://docs.marketmakerlite.com/"
            newTab={true}
          />
        </nav>
        <menu className="grid grid-flow-col items-center gap-8 text-white">
          <a
            href="https://github.com/MarketMakerLite"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-7 cursor-pointer hover:opacity-60"
              src="/icons/github.svg"
              alt="github icon"
            />
          </a>
          <NavLink text="Sign In" address="/login" newTab={false} />
          <NavLink text="Sign Up" address="/signup" newTab={false} />
          <DashButton />
        </menu>
      </div>
    </header>
  );
};

export default Desktop;

const NavLink: FC<ILink> = ({ text, address, newTab }) => (
  <a href={address} target={newTab ? "_blank" : ""} rel="noreferrer">
    <span className="text-white text-xm lg:text-y font-medium cursor-pointer hover:opacity-60">
      {text}
    </span>
  </a>
);
