import { FC } from "react";

const Card: FC = () => {
  return (
    <article className="py-9 text-center shadow-card rounded-xl dark:bg-161616">
      <div className="grid place-content-center gap-9">
        <h3 className="text-232333 dark:text-white dark:opacity-80">Free</h3>
        <p className="text-xm text-232333 dark:text-white dark:opacity-80">
          <span className="font-bold">$0</span> per month
        </p>
        <button className="bg-FFEED0 dark:bg-FFD184">Get Started</button>
      </div>
    </article>
  );
};

export default Card;
