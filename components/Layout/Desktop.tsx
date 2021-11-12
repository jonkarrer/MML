import NavLink from "./lib/NavLink";
import Logo from "./lib/Logo";
import DashButton from "./lib/DashButton";

const Desktop = () => {
  return (
    <header className="hidden lg:flex items-center justify-between w-full absolute top-0 left-0 py-2">
      <nav className="grid grid-flow-col items-center gap-8 text-white">
        <Logo />
        <NavLink text="Features" address="/" />
        <NavLink text="Learn" address="/" />
        <NavLink text="Support" address="/" />
        <NavLink text="Docs" address="/" />
      </nav>

      <menu className="grid grid-flow-col items-center gap-8 text-white">
        <img
          className="w-8 cursor-pointer"
          src="/icons/github.svg"
          alt="github icon"
        />
        <NavLink text="Login" address="/" />
        <NavLink text="Sign Up" address="/" />
        <DashButton />
      </menu>
    </header>
  );
};

export default Desktop;
