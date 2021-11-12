import { FC } from "react";

const Card: FC = () => {
  return (
    <article className="py-9 text-center shadow-card rounded-xl dark:bg-161616 md:w-110 md:m-auto lg:w-full xl:w-80">
      <div className="grid place-items-center gap-9 md:gap-2">
        <h3 className="text-232333 dark:text-white dark:opacity-80">Free</h3>

        <div className="md:grid md:gap-4 md:max-w-max md:m-auto">
          <p className="text-xm text-232333 dark:text-white dark:opacity-80">
            <span className="font-bold">$0</span> per month
          </p>

          <ul className="hidden md:grid place-content-start gap-2 text-left text-ty font-light opacity-60 h-72">
            <li>Delayed charts</li>
            <li>Delayed alerts</li>
            <li>Discord community</li>
            <li>Open source models</li>
            <li>Sentiment tracking</li>
            <li>Financial literacy tools</li>
          </ul>
        </div>
        <button className="bg-FFEED0 dark:bg-FFD184">Get Started</button>
      </div>
    </article>
  );
};

export default Card;
