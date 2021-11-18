import Head from "next/head";
import MobileHeader from "./Mobile";
import DesktopHeader from "./Desktop";
import Footer from "./Footer";
import { FC } from "react";

const Layout: FC = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Market Maker Lite</title>
        <meta name="description" content="Stocks, tickers, algorithms." />
      </Head>

      <MobileHeader />
      <DesktopHeader />

      {children}

      <Footer />
    </div>
  );
};

export default Layout;
