import Link from "next/dist/client/link";
import SocialMediaIcons from "./lib/Mobile/Social";
import NavLink from "./lib/Mobile/NavLink";
import { Support } from "./lib/Mobile/Support";
import { Developers } from "./lib/Mobile/Developers";
import {
  FC,
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useContext,
} from "react";

interface IContext {
  userSelection: string;
  userDispatch: Dispatch<SetStateAction<string>>;
}

export const ToggleContext = createContext<IContext | undefined>(undefined);
export const useToggleContext = () => {
  return useContext(ToggleContext);
};

const Mobile: FC = () => {
  const [toggle, setToggle] = useState(false);
  const [userSelection, setUserSelection] = useState("none");

  function handleClick() {
    setToggle(!toggle);

    if (toggle === false) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }

  return (
    <header
      data-test="mobile-header"
      className={`flex flex-col w-full pt-4 pb-4 top-0 lg:hidden z-50 shadow-header ${
        toggle ? "fixed h-screen bg-white dark:bg-121212" : "absolute"
      } `}
    >
      <div className="flex items-center justify-between relative">
        <Link passHref href="/">
          <span className="text-xm text-232333 dark:text-white font-bold cursor-pointer">
            mml
          </span>
        </Link>
        <span
          data-test="hamburger"
          onClick={() => handleClick()}
          className={`grid place-content-center h-7 w-11 rounded-base ${
            toggle ? "bg-E7E7F3 dark:bg-lt.15" : "bg-none"
          } `}
        >
          {toggle ? (
            <h6 className="text-sm text-232333 dark:text-white">X</h6>
          ) : (
            <svg
              className="m-auto"
              width="20"
              height="28"
              viewBox="0 0 20 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="fill-current text-black dark:text-white"
                d="M2 8H17V10H2V8ZM2 13H17V15H2V13ZM2 18H17V20H2V18Z"
              />
            </svg>
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

        <ToggleContext.Provider
          value={{
            userSelection: userSelection,
            userDispatch: setUserSelection,
          }}
        >
          <Support />
          <Developers />
        </ToggleContext.Provider>

        <div onClick={() => handleClick()}>
          <NavLink text="Pricing" address="/#pricing" />
        </div>
      </nav>

      <div
        className={`${
          toggle ? "flex" : "hidden"
        } justify-between space-x-2 items-center text-232333 dark:text-white w-full max-w-100 mt-6 lg-hidden `}
      >
        <button className="bg-E7E7F3 dark:bg-lt.15 text-232333 dark:text-white w-44">
          <Link href="/auth/signup">Sign Up</Link>
        </button>
        <button className="bg-E7E7F3 dark:bg-lt.15 w-44 text-232333 dark:text-white">
          <Link href="/dashboard">Dashboard</Link>
        </button>
      </div>
      <div className={`${toggle ? "grid" : "hidden"} flex-1 lg:hidden `}>
        <SocialMediaIcons />
      </div>
    </header>
  );
};

export default Mobile;
