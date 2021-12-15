import {
  FC,
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useContext,
} from "react";
import NavLink from "./lib/Desktop/NavLink";
import { Support } from "./lib/Support";
import { Developers } from "./lib/Developers";

interface IContext {
  userSelection: string;
  userDispatch: Dispatch<SetStateAction<string>>;
}

export const ToggleContext = createContext<IContext | undefined>(undefined);
export const useToggleContext = () => {
  return useContext(ToggleContext);
};
const Desktop: FC = () => {
  const [userSelection, setUserSelection] = useState("none");

  return (
    <header className="hidden lg:block w-full absolute top-0 left-0 py-2">
      <div className="wrapper flex items-center justify-between m-auto">
        <h6 className="text-white text-xm font-black">mml</h6>
        <nav className="grid grid-flow-col items-center gap-14 text-white">
          <NavLink text="Features" address="/#features" />

          <ToggleContext.Provider
            value={{
              userSelection: userSelection,
              userDispatch: setUserSelection,
            }}
          >
            <Support />
            <Developers />
          </ToggleContext.Provider>

          <NavLink text="Pricing" address="/#pricing" />
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
