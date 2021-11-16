import NavLink from "./lib/NavLink";
import Logo from "./lib/Logo";
import DashButton from "./lib/DashButton";

const Desktop = () => {
  return (
    <header
      data-cy="desktop-header"
      className="hidden lg:flex items-center justify-between w-full absolute top-0 left-0 py-2"
    >
      <nav className="grid grid-flow-col items-center gap-8 text-white">
        <Logo />
        <NavLink text="Features" address="/#features" newTab={false} />
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
      </nav>

      <menu className="grid grid-flow-col items-center gap-8 text-white">
        <a
          href="https://github.com/jonkarrer/mml"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="w-6 cursor-pointer"
            src="/icons/github.svg"
            alt="github icon"
          />
        </a>
        <NavLink text="Sign In" address="/login" newTab={false} />
        <NavLink text="Sign Up" address="/signup" newTab={false} />
        <DashButton />
      </menu>
    </header>
  );
};

export default Desktop;
