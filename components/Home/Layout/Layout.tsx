import Head from "next/head";
import MobileHeader from "./Mobile";
import DesktopHeader from "./Desktop";
import Footer from "./Footer";
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

const Layout: FC = ({ children }) => {
  const [userSelection, setUserSelection] = useState("none");
  return (
    <div>
      <Head>
        <title>Market Maker Lite</title>
        <meta name="description" content="Stocks, tickers, algorithms." />
      </Head>

      <MobileHeader />

      <ToggleContext.Provider
        value={{
          userSelection: userSelection,
          userDispatch: setUserSelection,
        }}
      >
        <DesktopHeader />

        {children}
      </ToggleContext.Provider>
      <Footer />
    </div>
  );
};

export default Layout;
