import NavLink from "./lib/NavLink";
import Social from "./lib/Social";

const Footer = () => {
  return (
    <footer
      data-cy="footer"
      className="bg-white dark:bg-black grid place-items-center gap-9 pt-16 pb-8 lg:pb-10"
    >
      <Social forHeader={false} />
      <div className="grid xl:grid-flow-col gap-8">
        <p className="text-black dark:text-white opacity-40 text-center m-auto">
          Market Maker Lite &copy; 2021. All Rights Reserved
        </p>
        <nav className="hidden lg:grid lg:grid-flow-col gap-5">
          <NavLink text="Support" address="/support" newTab={false} />
          <NavLink
            text="Learn"
            address="http://learn.marketmakerlite.com/"
            newTab={true}
          />
          <NavLink
            text="Documentation"
            address="https://docs.marketmakerlite.com/"
            newTab={true}
          />
          <NavLink
            text={`Terms ${"&"} Conditions`}
            address="/terms"
            newTab={false}
          />
          <NavLink text="Privacy Policy" address="/policy" newTab={false} />
          <NavLink text="Sign Up" address="/signup" newTab={false} />
          <NavLink text="Login" address="/login" newTab={false} />
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
