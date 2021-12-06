import { FC } from "react";
import Free from "./lib/Plans/Free";
import Premium from "./lib/Plans/Premium";
import Annual from "./lib/Plans/Annual";

const Plans: FC = () => {
  return (
    <section>
      <article className="wrapper grid gap-16 lg:gap-24">
        <h2 className="text-87 text-center md:w-120 md:m-auto lg:w-auto">
          Try free or sign up for premium features
        </h2>
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-6">
          <Free />
          <Premium />
          <Annual />
        </div>
      </article>
    </section>
  );
};

export default Plans;
