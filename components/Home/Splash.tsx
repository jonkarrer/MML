import { FC } from "react";

const Splash: FC = () => (
  <section className="h-screen max-h-700 grid place-items-center bg-light_grad dark:bg-dark_grad">
    <article className="grid place-items-center text-center text-white">
      <h1 className=" font-black md:w-130">Make the market you deserve</h1>
      <p className="text-sm font-normal mt-12 md:w-120 md:text-base md:leading-10">
        Market alerts, statistics and analytics, delivered through an innovative
        interface, made for retail investors.
      </p>
      <div className="grid grid-flow-col gap-16 items-center mt-20">
        <button className=" bg-white  text-2AABC1 dark:text-222353">
          Get Started
        </button>
        <a
          href="https://docs.marketmakerlite.com/"
          target="_blank"
          rel="noreferrer"
          className="hidden md:block text-ty cursor-pointer"
        >
          View the Docs
        </a>
      </div>
    </article>
  </section>
);

export default Splash;
