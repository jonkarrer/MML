/* eslint-disable @next/next/no-html-link-for-pages */
import { FC } from "react";
import NavLink from "./lib/Desktop/NavLink";
import { Support } from "./lib/Desktop/Support";
import { Developers } from "./lib/Desktop/Developers";

const Desktop: FC = () => {
  return (
    <header className="hidden lg:block w-full absolute top-0 left-0 py-2">
      <div className="wrapper flex items-center justify-between m-auto">
        <a
          href="/"
          className="text-white text-center text-xm font-black w-24 hover:opacity-60"
        >
          mml
        </a>
        <nav className="grid grid-flow-col place-items-center items-center gap-14 text-white">
          <NavLink text="Features" address="/#features" />

          <Support />
          <Developers />

          <NavLink text="Pricing" address="/#pricing" />
          <NavLink text="Sign Up" address="/auth/signup" />
        </nav>
        <a href="/dashboard">
          <span className="w-24 h-9 grid place-content-center bg-white rounded-button bg-opacity-20 hover:bg-opacity-40 cursor-pointer">
            <h6 className="text-white text-15 font-medium">Dashboard</h6>
          </span>
        </a>
      </div>
    </header>
  );
};

export default Desktop;
