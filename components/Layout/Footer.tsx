import NavLink from "./lib/NavLink";
import Social from "./lib/Social";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black grid place-items-center gap-9 pt-16 pb-8 lg:pb-10">
      <Social />
      <div className="grid xl:grid-flow-col gap-8">
        <p className="text-black dark:text-white opacity-40 text-center m-auto">
          Market Maker Lite &copy; 2021. All Rights Reserved
        </p>
        <nav className="lg:grid lg:grid-flow-col gap-5">
          <NavLink text="Support" address="/" />
          <NavLink text="Learn" address="/" />
          <NavLink text="Documentation" address="/" />
          <NavLink text={`Terms ${"&"} Conditions`} address="/" />
          <NavLink text="Privacy Policy" address="/" />
          <NavLink text="Sign Up" address="/" />
          <NavLink text="Login" address="/" />
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
