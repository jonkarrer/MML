import { FC } from "react";

const Annual: FC = () => {
  return (
    <article className="py-9 text-center shadow-card rounded-xl dark:bg-161616 md:w-110 md:m-auto lg:w-full xl:w-80">
      <div className="grid place-content-center gap-9 md:gap-2">
        <h3 className="text-232333 dark:text-white dark:opacity-80">Annual</h3>

        <div className="md:grid md:gap-4 md:max-w-max md:m-auto">
          <p className="text-xm text-232333 dark:text-white dark:opacity-80">
            <span className="font-bold">$399</span> per year
          </p>

          <ul className="hidden md:grid place-content-start gap-2 text-left text-ty font-light opacity-60 h-72 dark:text-white ">
            <li>
              <i className="font-bold">All free features, plus</i>
            </li>
            <li>15% savings</li>
            <li>Priority feature requests</li>
            <li>Support our development</li>
          </ul>
        </div>
        <button className="bg-D1CCFF dark:bg-8678FF">Support {`&`} Save</button>
      </div>
    </article>
  );
};

export default Annual;
