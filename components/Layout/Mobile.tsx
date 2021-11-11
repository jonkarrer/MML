import type { NextPage } from "next";

const Mobile: NextPage = () => {
  return (
    <header className="absolute w-full py-6 lg:hidden">
      <div className="flex items-center justify-between">
        <span className="text-xm text-white font-bold">mml</span>
        <span className="h-7 w-11 grid place-content-center rounded-base bg-white bg-opacity-20">
          <img className="w-7 h-7" src="/icons/burger.svg" alt="burger icon" />
        </span>
      </div>
    </header>
  );
};

export default Mobile;
