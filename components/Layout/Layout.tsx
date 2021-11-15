import type { NextPage } from "next";
import Head from "next/head";
import MobileHeader from "./Mobile";
import DesktopHeader from "./Desktop";
import Footer from "./Footer";

const Layout: NextPage = ({ children }) => {
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
