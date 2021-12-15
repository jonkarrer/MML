import { FC, useState } from "react";
import NavLink from "./lib/Desktop/NavLink";
import {
  Start,
  About,
  Learn,
  Blog,
  Contact,
  Triangle,
} from "./lib/Support/index";

const Desktop: FC = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="hidden lg:block w-full absolute top-0 left-0 py-2">
      <div className="wrapper flex items-center justify-between m-auto">
        <h6 className="text-white text-xm font-black">mml</h6>
        <nav className="grid grid-flow-col items-center gap-14 text-white">
          <NavLink text="Features" address="/#features" />

          <div className="text-white text-xm lg:text-14 font-medium cursor-pointer relative">
            <p
              onClick={() => setToggle(!toggle)}
              className={`${toggle ? "opacity-60" : ""} hover:opacity-60`}
            >
              Support
            </p>
            <div
              className={`${
                toggle ? "absolute" : "hidden"
              } bg-white dark:bg-121212 top-10 -left-8 w-59 h-60 p-6 flex flex-col justify-between rounded-base`}
            >
              <Start />
              <About />
              <Learn />
              <Blog />
              <Contact />
              <span className="absolute top-0 left-12 transform -translate-y-3/4">
                <Triangle />
              </span>
            </div>
          </div>

          <NavLink
            text="Developers"
            address="https://docs.marketmakerlite.com/"
          />
          <NavLink text="Pricing" address="/pricing" />
          <NavLink text="Sign Up" address="/auth/signup" />
        </nav>
        <a href="/dashboard">
          <span className="w-24 h-9 grid place-content-center bg-white rounded-button bg-opacity-20 hover:bg-opacity-40 cursor-pointer">
            <h6 className="text-white text-14 font-medium">Dashboard</h6>
          </span>
        </a>
      </div>
    </header>
  );
};

export default Desktop;
