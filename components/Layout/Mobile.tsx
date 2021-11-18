import Link from "next/dist/client/link";
import { useState, FC } from "react";
import { ILink } from "@/utils/interfaces";
import SocialIcons from "./lib/Social";

const Mobile: FC = () => {
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
          data-cy="hamburger"
          onClick={() => handleClick()}
          className="grid place-content-center h-7 w-11 rounded-base bg-white bg-opacity-20"
        >
          {toggle ? (
            <h6 className=" text-sm text-white">X</h6>
          ) : (
            <img
              className="w-7 h-7 cursor-pointer"
              src="/icons/burger.svg"
              alt="burger icon"
            />
          )}
        </span>
      </div>

      <nav className={`grid mt-14 gap-6 lg:hidden ${toggle ? "" : "hidden"} `}>
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
        <NavLink text="Sign In" address="/login" newTab={false} />
        <NavLink text="Sign Up" address="/signup" newTab={false} />
        <NavLink text="Dashboard" address="/dashboard" newTab={false} />
      </nav>
      <div className={`flex-1 flex lg:hidden ${toggle ? "" : "hidden"}`}>
        <SocialIcons forHeader={true} />
      </div>
    </header>
  );
};

export default Mobile;

const NavLink: FC<ILink> = ({ text, address, newTab }) => (
  <a href={address} target={newTab ? "_blank" : ""} rel="noreferrer">
    <span className="text-white text-xm lg:text-y hover:font-black cursor-pointer">
      {text}
    </span>
  </a>
);
