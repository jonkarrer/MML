import type { NextPage } from "next";
import { useEffect, useState } from "react";
import NavLink from "./lib/NavLink";
import Social from "./lib/Social";

const Mobile: NextPage = () => {
  const [toggle, setToggle] = useState(false);

  function handleClick() {
    setToggle(!toggle);

    if (toggle) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }
  return (
    <header
      className={`w-full py-6 flex flex-col top-0 lg:hidden z-50 ${
        toggle ? "fixed h-screen bg-light_grad dark:bg-dark_grad" : "absolute"
      } `}
    >
      <div className="flex items-center justify-between relative">
        <span className="text-xm text-white font-bold">mml</span>
        <span
          onClick={() => handleClick()}
          className="h-7 w-11 grid place-content-center rounded-base bg-white bg-opacity-20"
        >
          {toggle ? (
            <h6 className=" text-sm text-white">X</h6>
          ) : (
            <img
              className="w-7 h-7"
              src="/icons/burger.svg"
              alt="burger icon"
            />
          )}
        </span>
      </div>
      <nav className={`grid mt-14 gap-8 lg:hidden ${toggle ? "" : "hidden"} `}>
        <NavLink text="Features" address="/" />
        <NavLink text="Learn" address="/" />
        <NavLink text="Support" address="/" />
        <NavLink text="Docs" address="/" />
        <NavLink text="Login" address="/" />
        <NavLink text="Sign Up" address="/" />
      </nav>
      <div className={`flex-1 flex lg:hidden ${toggle ? "" : "hidden"}`}>
        <Social forHeader={true} />
      </div>
    </header>
  );
};

export default Mobile;
