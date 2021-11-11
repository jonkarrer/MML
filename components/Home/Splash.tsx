import type { NextPage } from "next";

const Splash: NextPage = () => {
  return (
    <section className="bg-light_grad dark:bg-dark_grad pt-24 pb-16">
      <article className="grid gap-12">
        <h1 className="text-center text-white">Make the market you deserve</h1>
        <p className="text-center text-white text-sm font-light">
          Market alerts, statistics and analytics, delivered through an
          innovative interface, made for retail investors.
        </p>
        <button className="h-12 w-64 bg-white rounded-full m-auto text-sm font-bold text-aqua dark:text-purple">
          Get Started
        </button>
      </article>
    </section>
  );
};

export default Splash;
