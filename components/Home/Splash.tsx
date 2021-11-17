import { FC, useState } from "react";

const Splash: FC = () => {
  const [hover, setHover] = useState(false);
  return (
    <section className="h-screen max-h-700 grid place-items-center bg-light_grad dark:bg-dark_grad">
      <article className="wrapper grid place-items-center text-center text-white">
        <h1 className="font-bold md:w-130">Make the market you deserve</h1>
        <p className="text-sm font-normal mt-12 md:w-120 md:text-base md:leading-10">
          Market alerts, statistics and analytics, delivered through an
          innovative interface, made for retail investors.
        </p>
        <div className="grid grid-flow-col gap-16 items-center mt-20">
          <button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="bg-white  text-2AABC1 dark:text-222353 hover:shadow-button"
          >
            {hover ? <Start /> : "Get Started"}
          </button>
          <a
            href="https://docs.marketmakerlite.com/"
            target="_blank"
            rel="noreferrer"
            className="hidden md:block text-ty cursor-pointer hover:underline hover:opacity-60"
          >
            View the Docs
          </a>
        </div>
      </article>
    </section>
  );
};

export default Splash;

const Start = () => (
  <span className="flex justify-center items-center relative">
    <h6>Start now</h6>{" "}
    <h6 className="absolute top-0 bottom-0 m-auto right-6 font-normal text-xm h-10 w-10">
      ›
    </h6>
  </span>
);
