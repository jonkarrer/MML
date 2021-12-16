import Link from "next/dist/client/link";
import { useState, FC } from "react";
import SocialMediaIcons from "./lib/Mobile/Social";
import NavLink from "./lib/Mobile/NavLink";
import { Support } from "./lib/Mobile/Support";
import { Developers } from "./lib/Mobile/Developers";

const Mobile: FC = () => {
  const [toggle, setToggle] = useState(false);

  function handleClick() {
    setToggle(!toggle);
  }

  return (
    <header
      data-test="mobile-header"
      className={`flex flex-col w-full pt-6 pb-11 top-0 lg:hidden z-50 ${
        toggle ? "fixed h-screen bg-light_grad dark:bg-dark_grad" : "absolute"
      } `}
    >
      <div className="flex items-center justify-between relative">
        <Link passHref href="/">
          <span className="text-xm text-white font-bold cursor-pointer">
            mml
          </span>
        </Link>
        <span
          data-test="hamburger"
          onClick={() => handleClick()}
          className="grid place-content-center h-7 w-11 rounded-base bg-white bg-opacity-20"
        >
          {toggle ? (
            <h6 className="text-sm text-white">X</h6>
          ) : (
            <img
              className="w-7 h-7 cursor-pointer"
              src="/icons/burger.svg"
              alt="burger icon"
            />
          )}
        </span>
      </div>

      <nav
        data-test="mobile-nav"
        className={`${toggle ? "grid" : "hidden"} mt-14 gap-6 lg:hidden`}
      >
        <div onClick={() => handleClick()}>
          <NavLink text="FEATURES" address="/#features" />
        </div>
        <Support />
        <Developers />
        <div onClick={() => handleClick()}>
          <NavLink text="PRICING" address="/#pricing" />
        </div>
        <NavLink text="SIGN UP" address="/auth/signup" />
        <NavLink text="DASHBOARD" address="/dashboard" />
      </nav>

      <div className={`${toggle ? "grid" : "hidden"} flex-1 lg:hidden `}>
        <SocialMediaIcons />
      </div>
    </header>
  );
};

export default Mobile;
