import { FC } from "react";

const Annual: FC = () => {
  return (
    <article className="py-9 text-center shadow-card rounded-xl dark:bg-161616">
      <div className="grid place-content-center gap-9">
        <h3 className="text-232333 dark:text-white dark:opacity-80">Annual</h3>
        <p className="text-xm text-232333 dark:text-white dark:opacity-80">
          <span className="font-bold">$399</span> per year
        </p>
        <button className="bg-D1CCFF dark:bg-8678FF">Support {`&`} Save</button>
      </div>
    </article>
  );
};

export default Annual;
