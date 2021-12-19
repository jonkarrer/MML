import { FC } from "react";

const Splash: FC = () => (
  <section className="h-140 grid place-items-center bg-light_grad dark:bg-dark_grad">
    <article className="wrapper text-center text-white">
      <h1 className="font-bold md:w-130">Make the market you deserve</h1>
      <p className="text-sm mt-8 md:w-120 md:text-base md:leading-10">
        Market alerts, statistics and analytics, delivered through an innovative
        interface, made for retail investors.
      </p>
      <div className="lg:grid lg:grid-flow-col place-content-center mt-12 md:gap-16 md:items-center">
        <button className="bg-white w-full md:w-44 text-150727 hover:opacity-80">
          Get Started
        </button>
        <a
          href="https://docs.marketmakerlite.com/"
          target="_blank"
          rel="noreferrer"
          className="hidden md:block font-bold text-14 cursor-pointer hover:underline hover:opacity-60"
        >
          View the Docs
        </a>
      </div>
    </article>
  </section>
);

export default Splash;
