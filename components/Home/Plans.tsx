import { FC } from "react";

const Plans: FC = () => {
  return (
    <section>
      <article id="pricing" className="wrapper grid gap-16 lg:gap-24">
        <h2 className="text-87 text-center md:w-120 md:m-auto lg:w-auto">
          Try free or sign up for premium features
        </h2>
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-6"></div>
      </article>
    </section>
  );
};

export default Plans;
