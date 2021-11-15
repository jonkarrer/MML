import { FC } from "react";

const Splash: FC = () => (
  <section className="h-screen md:max-h-800 lg:max-h-1100 grid place-items-center bg-light_grad dark:bg-dark_grad">
    <article className="grid place-items-center text-center text-white">
      <h1 className="md:w-120">Make the market you deserve</h1>
      <p className="text-sm font-light mt-12 md:w-120 md:text-base md:leading-10">
        Market alerts, statistics and analytics, delivered through an innovative
        interface, made for retail investors.
      </p>
      <div className="grid grid-flow-col gap-16 items-center mt-20">
        <button className=" bg-white  text-2AABC1 dark:text-222353">
          Get Started
        </button>
        <span className="hidden md:block text-ty">View the Docs</span>
      </div>
    </article>
  </section>
);

export default Splash;
