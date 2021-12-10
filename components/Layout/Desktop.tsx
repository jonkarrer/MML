import { FC } from "react";
import Logo from "./lib/Desktop/Logo";
import NavLink from "./lib/Desktop/NavLink";

const Desktop: FC = () => {
  return (
    <header className="hidden lg:block w-full absolute top-0 left-0 py-2">
      <div className="wrapper flex items-center justify-between m-auto">
        <nav className="grid grid-flow-col items-center gap-8 text-white">
          <Logo />
          <NavLink text="Features" address="/#features" />
          <NavLink text="Learn" address="http://learn.marketmakerlite.com/" />
          <NavLink text="Support" address="/support" />
          <NavLink text="Docs" address="https://docs.marketmakerlite.com/" />
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
          <NavLink text="Sign In" address="/login" />
          <NavLink text="Sign Up" address="/signup" />
          <a href="/dashboard">
            <span className="w-24 h-9 grid place-content-center bg-white rounded-full bg-opacity-20 hover:bg-opacity-40 cursor-pointer">
              <h6 className="dark:text-white text-ty font-medium">Dashboard</h6>
            </span>
          </a>
        </menu>
      </div>
    </header>
  );
};

export default Desktop;
