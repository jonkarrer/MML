import type { NextPage } from "next";

const Splash: NextPage = () => {
  return (
    <section>
      <article className="grid text-center text-white">
        <h1>Make the market you deserve</h1>
        <p className="text-sm font-light mt-12">
          Market alerts, statistics and analytics, delivered through an
          innovative interface, made for retail investors.
        </p>
        <button className=" bg-white mx-auto mt-20 text-aqua dark:text-purple">
          Get Started
        </button>
      </article>
    </section>
  );
};

export default Splash;
