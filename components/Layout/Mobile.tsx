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
      data-cy="desktop-mobile"
      className={`w-full py-6 flex flex-col top-0 lg:hidden z-50 ${
        toggle ? "fixed h-screen bg-light_grad dark:bg-dark_grad" : "absolute"
      } `}
    >
      <div className="flex items-center justify-between relative">
        <span className="text-xm text-white font-bold">mml</span>
        <span
          data-cy="hamburger"
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
        <div onClick={() => handleClick()}>
          <NavLink text="Features" address="/#features" newTab={false} />
        </div>
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
        <NavLink text="Login" address="/login" newTab={false} />
        <NavLink text="Sign Up" address="/signup" newTab={false} />
      </nav>
      <div className={`flex-1 flex lg:hidden ${toggle ? "" : "hidden"}`}>
        <Social forHeader={true} />
      </div>
    </header>
  );
};

export default Mobile;
