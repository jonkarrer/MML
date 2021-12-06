import Link from "next/dist/client/link";
import { useState, FC } from "react";
import SocialMediaIcons from "./lib/Mobile/Social";
import NavLink from "./lib/Mobile/NavLink";

const Mobile: FC = () => {
  const [toggle, setToggle] = useState(false);

  function handleClick() {
    setToggle(!toggle);

    //Prevent scrolling when header is open.
    if (toggle) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }

  return (
    <header
      data-test="mobile-header"
      className={`flex flex-col w-full py-6 top-0 lg:hidden z-50 ${
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
          <NavLink text="Features" address="/#features" />
        </div>
        <NavLink text="Learn" address="http://learn.marketmakerlite.com/" />
        <NavLink text="Support" address="/support" />
        <NavLink text="Docs" address="https://docs.marketmakerlite.com/" />
        <NavLink text="Sign In" address="/login" />
        <NavLink text="Sign Up" address="/signup" />
        <NavLink text="Dashboard" address="/dashboard" />
      </nav>

      <div className={`${toggle ? "flex" : "hidden"} flex-1 lg:hidden `}>
        <SocialMediaIcons />
      </div>
    </header>
  );
};

export default Mobile;
