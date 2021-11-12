import { FC } from "react";

const Premium: FC = () => {
  return (
    <article className="py-9 text-center shadow-card rounded-xl border-t-8 border-BFE5FF dark:border-6BC3FF dark:bg-161616">
      <div className="grid place-content-center gap-9">
        <span className="text-x font-bold w-32 py-1 bg-BFE5FF dark:bg-6BC3FF m-auto rounded">
          Try free for 7 days!
        </span>
        <h3 className="text-232333 dark:text-white dark:opacity-80">Premium</h3>
        <p className="text-xm text-232333 dark:text-white dark:opacity-80">
          <span className="font-bold">$39</span> per month
        </p>
        <button className="bg-BFE5FF dark:bg-6BC3FF">Subscribe</button>
      </div>
    </article>
  );
};

export default Premium;
