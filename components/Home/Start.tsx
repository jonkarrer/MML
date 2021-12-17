import { FC } from "react";

const Start: FC = () => (
  <section className="bg-F6F8FE dark:bg-dark_grad h-110 flex items-center">
    <article className="wrapper w-full grid place-items-center gap-7 dark:bg-000-80 bg-white shadow-action rounded-base py-8 md:gap-8 lg:flex lg:justify-between lg:px-20 lg:h-52">
      <div className="grid gap-6 place-items-center lg:place-items-start lg:gap-3">
        <h2 className="text-87 text-left leading-none">Get started today</h2>
        <p className="opacity-60 text-xs text-232333 dark:text-white text-center w-56 lg:col-start-1 md:w-auto lg:text-left lg:text-base">
          Ready to own your investing? We{"'"}ve got you covered.
        </p>
      </div>
      <button className="bg-006EFF hover:bg-3E8DFF text-white">
        Subscribe Now
      </button>
    </article>
  </section>
);

export default Start;
