import { FC } from "react";
import NavLink from "./lib/Desktop/NavLink";

const Desktop: FC = () => {
  return (
    <header className="hidden lg:block w-full absolute top-0 left-0 py-2">
      <div className="m-auto w-179">
        <nav className="grid grid-flow-col items-center gap-8 text-white">
          <h6 className="text-xm font-black" style={{ marginBottom: "2px" }}>
            mml
          </h6>
          <NavLink text="Features" address="/#features" />
          <NavLink text="Support" address="/support" />
          <NavLink
            text="Developers"
            address="https://docs.marketmakerlite.com/"
          />
          <NavLink text="Pricing" address="/pricing" />
          <NavLink text="Sign Up" address="/auth/signup" />
          <a href="/dashboard">
            <span className="w-24 h-9 grid place-content-center bg-white rounded-button bg-opacity-20 hover:bg-opacity-40 cursor-pointer">
              <h6 className="dark:text-white text-14 font-medium">Dashboard</h6>
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Desktop;
