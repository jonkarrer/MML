import { FC } from "react";

const Premium: FC = () => {
  return (
    <article className="py-8 text-center shadow-card rounded-xl border-t-8 border-BFE5FF dark:border-6BC3FF dark:bg-161616 md:w-110 md:m-auto md:relative lg:w-full xl:w-80">
      <div className="grid place-content-center gap-9 md:gap-2">
        <span className="text-x font-bold w-32 bg-BFE5FF dark:bg-6BC3FF m-auto rounded md:absolute md:top-3 md:left-0 md:right-0 md:m-auto">
          Try free for 7 days!
        </span>
        <h3 className="text-232333 dark:text-white dark:opacity-80">Premium</h3>

        <div className="md:grid md:gap-4 md:max-w-max md:m-auto">
          <p className="text-xm text-232333 dark:text-white dark:opacity-80">
            <span className="font-bold">$39</span> per month
          </p>

          <ul className="hidden md:grid place-content-start gap-2 text-left text-ty font-light opacity-60 h-72 dark:text-white ">
            <li>
              <i className="font-bold">All free features, plus</i>
            </li>
            <li>Real time charts</li>
            <li>Instant alerts</li>
            <li>Exclusive Discord</li>
            <li>Options support</li>
            <li>Proprietary models</li>
            <li>Curated news feed</li>
            <li>Portfolio tracking</li>
            <li>Earn rewards</li>
          </ul>
        </div>
        <button className="bg-BFE5FF dark:bg-6BC3FF">Subscribe</button>
      </div>
    </article>
  );
};

export default Premium;
