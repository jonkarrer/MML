import { FC } from "react";

export const MobilePrice: FC = () => (
  <div className="grid gap-7 lg:grid-cols-3 lg:gap-6">
    <article className="border border-D4D4D4 flex flex-col justify-between pt-5 pb-6 rounded-base px-8 leading-none h-84 dark:border-none dark:bg-dk.25 dark:text-white">
      <h3 className=" text-lg font-black">Free</h3>
      <p className=" text-232333 opacity-50 text-14 dark:text-lt.50">
        Try it out for free with slightly delayed data and alerts
      </p>
      <h3 className="font-black text-lg">
        $0<b className=" text-sm text-232333 opacity-50">/mo</b>
      </h3>
      <div className="grid gap-2">
        <span className="flex items-center space-x-3">
          <div className=" bg-EFF8FE rounded-full w-5 h-5 dark:bg-121212">
            <img src="/icons/check.svg" alt="check mark" />{" "}
          </div>
          <p className="text-15 text-232333 dark:text-white">
            Discord community
          </p>
        </span>
        <span className="flex items-center space-x-3">
          <div className=" bg-EFF8FE rounded-full w-5 h-5 dark:bg-121212">
            <img src="/icons/check.svg" alt="check mark" />{" "}
          </div>
          <p className="text-15 text-232333 dark:text-white">
            Open source models
          </p>
        </span>
        <span className="flex items-center space-x-3">
          <div className=" bg-EFF8FE rounded-full w-5 h-5 dark:bg-121212">
            <img src="/icons/check.svg" alt="check mark" />{" "}
          </div>
          <p className="text-15 text-232333 dark:text-white">
            Sentiment tracking
          </p>
        </span>
        <span className="flex items-center space-x-3">
          <div className=" bg-EFF8FE rounded-full w-5 h-5 dark:bg-121212">
            <img src="/icons/check.svg" alt="check mark" />{" "}
          </div>
          <p className="text-15 text-232333 dark:text-white">
            Financial literacy tools
          </p>
        </span>
      </div>
      <button className="bg-black text-white h-11 w-full dark:bg-white dark:text-black">
        Sign Up
      </button>
    </article>

    <article className="border border-D4D4D4 flex flex-col justify-between pt-5 pb-6 rounded-base px-8 leading-none h-84 dark:border-none dark:bg-dk.25 dark:text-white">
      <h3 className=" text-lg font-black">Basic</h3>
      <p className=" text-232333 opacity-50 text-14 dark:text-lt.50">
        All the basics, including real time equities + crypto data and delayed
        options data
      </p>
      <h3 className="font-black text-lg">
        $19<b className=" text-sm text-232333 opacity-50">/mo</b>
      </h3>
      <div className="grid gap-2.5">
        <i className="text-15 text-232333 dark:text-white">
          All free features, plus:
        </i>
        <span className="flex items-center space-x-3">
          <div className=" bg-EFF8FE rounded-full w-5 h-5 dark:bg-121212">
            <img src="/icons/check.svg" alt="check mark" />{" "}
          </div>
          <p className="text-15 text-232333 dark:text-white">
            Real time equity and crypto data
          </p>
        </span>
        <span className="flex items-center space-x-3">
          <div className=" bg-EFF8FE rounded-full w-5 h-5 dark:bg-121212">
            <img src="/icons/check.svg" alt="check mark" />{" "}
          </div>
          <p className="text-15 text-232333 dark:text-white">
            Equity forecasting models
          </p>
        </span>
        <span className="flex items-center space-x-3">
          <div className=" bg-EFF8FE rounded-full w-5 h-5 dark:bg-121212">
            <img src="/icons/check.svg" alt="check mark" />{" "}
          </div>
          <p className="text-15 text-232333 dark:text-white">
            Exclusive Discord channels
          </p>
        </span>
      </div>
      <button className="bg-black text-white h-11 w-full dark:bg-white dark:text-black">
        Subscribe
      </button>
    </article>

    <article className="border border-006EFF flex flex-col justify-between pt-5 pb-6 rounded-base px-8 leading-none h-84 shadow-price_card dark:bg-dk.25 dark:text-white">
      <h3 className=" text-lg font-black">Premium</h3>
      <p className=" text-232333 opacity-50 text-14 dark:text-lt.50">
        Everything you need, real time, for one low monthly price
      </p>
      <h3 className="font-black text-lg">
        $39<b className=" text-sm text-232333 opacity-50">/mo</b>
      </h3>
      <div className="grid gap-2.5">
        <i className="text-15 text-232333 dark:text-white">
          All free features, plus:
        </i>
        <span className="flex items-center space-x-3">
          <div className=" bg-EFF8FE rounded-full w-5 h-5 dark:bg-121212">
            <img src="/icons/check.svg" alt="check mark" />{" "}
          </div>
          <p className="text-15 text-232333 dark:text-white">
            Real time options data
          </p>
        </span>
        <span className="flex items-center space-x-3">
          <div className=" bg-EFF8FE rounded-full w-5 h-5 dark:bg-121212">
            <img src="/icons/check.svg" alt="check mark" />{" "}
          </div>
          <p className="text-15 text-232333 dark:text-white">
            Premium models and alerts
          </p>
        </span>
        <span className="flex items-center space-x-3">
          <div className=" bg-EFF8FE rounded-full w-5 h-5 dark:bg-121212">
            <img src="/icons/check.svg" alt="check mark" />{" "}
          </div>
          <p className="text-15 text-232333 dark:text-white">
            All Discord channels
          </p>
        </span>
      </div>
      <button className="bg-006EFF text-white h-11 w-full dark:text-black">
        Subscribe
      </button>
    </article>

    <article className="border border-D4D4D4 flex flex-col justify-between pt-5 pb-6 rounded-base px-8 leading-none h-84 dark:border-none dark:bg-dk.25 dark:text-white">
      <h3 className=" text-lg font-black">Annual</h3>
      <p className=" text-232333 opacity-50 text-14 dark:text-lt.50">
        Pay once a year, lock your price and save on your subscription cost
      </p>
      <h3 className="font-black text-lg">
        $399<b className=" text-sm text-232333 opacity-50">/yr</b>
      </h3>
      <div className="grid gap-2.5">
        <i className="text-15 text-232333 dark:text-white">
          All free features, plus:
        </i>
        <span className="flex items-center space-x-3">
          <div className=" bg-EFF8FE rounded-full w-5 h-5 dark:bg-121212">
            <img src="/icons/check.svg" alt="check mark" />{" "}
          </div>
          <p className="text-15 text-232333 dark:text-white">
            Real time equity and crypto data
          </p>
        </span>
        <span className="flex items-center space-x-3">
          <div className=" bg-EFF8FE rounded-full w-5 h-5 dark:bg-121212">
            <img src="/icons/check.svg" alt="check mark" />{" "}
          </div>
          <p className="text-15 text-232333 dark:text-white">15% savings</p>
        </span>
        <span className="flex items-center space-x-3">
          <div className=" bg-EFF8FE rounded-full w-5 h-5 dark:bg-121212">
            <img src="/icons/check.svg" alt="check mark" />{" "}
          </div>
          <p className="text-15 text-232333 dark:text-white">
            Support our development
          </p>
        </span>
      </div>
      <button className="bg-black text-white h-11 w-full dark:bg-white dark:text-black">
        Subscribe
      </button>
    </article>
  </div>
);
