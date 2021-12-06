import { FC } from "react";

const Start: FC = () => (
  <section>
    <article className="wrapper grid place-items-center gap-7 dark:bg-1E1F20 bg-white shadow-action rounded-base py-8 md:gap-8 lg:flex lg:justify-between lg:px-20 lg:h-52">
      <div className="grid gap-6 place-items-center lg:place-items-start lg:gap-3">
        <h2 className="font-bold text-87 text-left leading-none">
          Get started today
        </h2>
        <p className="opacity-60 text-xs text-232333 dark:text-white text-center w-56 lg:col-start-1 md:w-auto lg:text-left lg:text-base">
          Ready to own your investing? We{"'"}ve got you covered.
        </p>
      </div>
      <button className="dark:bg-8678FF bg-D1CCFF hover:bg-8678FF dark:hover:bg-D1CCFF">
        Subscribe Now
      </button>
    </article>
  </section>
);

export default Start;
