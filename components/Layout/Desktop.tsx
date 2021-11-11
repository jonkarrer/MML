import Link from "next/link";

const Desktop = () => {
  return (
    <header className="hidden lg:flex items-center justify-between w-full absolute top-0 left-0 py-2">
      <nav className="grid grid-flow-col items-center gap-8 text-white">
        <div
          className="
        grid place-content-center 
        bg-white dark:bg-darkgrey 
        w-11 h-11 rounded-full 
        filter bg-opacity-30
        shadow-lg  dark:drop-shadow-logo"
        >
          <h6 className="text-ty font-bold">mml</h6>
        </div>
        <Link passHref href="/">
          <span className="opacity-80 dark:text-white text-ty">Features</span>
        </Link>
        <Link passHref href="/">
          <span className="opacity-80 dark:text-white text-ty">Learn</span>
        </Link>
        <Link passHref href="/">
          <span className="opacity-80 dark:text-white text-ty">Support</span>
        </Link>
        <Link passHref href="/">
          <span className="opacity-80 dark:text-white text-ty">Docs</span>
        </Link>
      </nav>

      <menu className="grid grid-flow-col items-center gap-8 text-white">
        <img className="w-8" src="/icons/github.svg" alt="github icon" />
        <Link passHref href="/">
          <span className="opacity-80 dark:text-white text-ty">Login</span>
        </Link>
        <Link passHref href="/">
          <span className="opacity-80 dark:text-white text-ty">Sign Up</span>
        </Link>
        <Link passHref href="/">
          <span className="w-24 h-9 grid place-content-center bg-white rounded-full bg-opacity-30">
            <h6 className="opacity-80 dark:text-white text-ty">Dashboard</h6>
          </span>
        </Link>
      </menu>
    </header>
  );
};

export default Desktop;
