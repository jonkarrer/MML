import type { NextPage } from "next";

const Mobile: NextPage = () => {
  return (
    <header className="absolute w-full px-7 py-6 md:px-28 lg:hidden">
      <div className="flex items-center justify-between">
        <span className="text-xm text-white font-bold">mml</span>
        <span className="h-7 w-11 rounded-base bg-white bg-opacity-20">
          <BurgerImage />
        </span>
      </div>
    </header>
  );
};

export default Mobile;

const BurgerImage = () => (
  <svg
    className="m-auto"
    width="20"
    height="28"
    viewBox="0 0 20 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2 8H17V10H2V8ZM2 13H17V15H2V13ZM2 18H17V20H2V18Z" fill="white" />
  </svg>
);
