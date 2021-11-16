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
          Market Maker Lite &copy; 2021. All Rights Reserved.
        </p>
        <nav className="hidden lg:grid lg:grid-flow-col gap-5">
          <a href="https://learn.marketmakerlite.com/">
            <span className="text-black dark:text-white text-xm lg:text-y font-bold cursor-pointer">
              Learn
            </span>
          </a>
          <a href="/support">
            <span className="text-black dark:text-white text-xm lg:text-y font-bold cursor-pointer">
              Support
            </span>
          </a>

          <a href="https://docs.marketmakerlite.com/">
            <span className="text-black dark:text-white text-xm lg:text-y font-bold cursor-pointer">
              Documentation
            </span>
          </a>
          <a href="/terms">
            <span className="text-black dark:text-white text-xm lg:text-y font-bold cursor-pointer">
              Terms {`&`} Conditions
            </span>
          </a>
          <a href="/policy">
            <span className="text-black dark:text-white text-xm lg:text-y font-bold cursor-pointer">
              Privacy Policy
            </span>
          </a>
          <a href="/login">
            <span className="text-black dark:text-white text-xm lg:text-y font-bold cursor-pointer">
              Sign In
            </span>
          </a>
          <a href="/signup">
            <span className="text-black dark:text-white text-xm lg:text-y font-bold cursor-pointer">
              Sign Up
            </span>
          </a>
          <a href="/dashboard">
            <span className="text-black dark:text-white text-xm lg:text-y font-bold cursor-pointer">
              Dashboard
            </span>
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
