import { FC } from "react";
import Free from "./lib/Free";
import Premium from "./lib/Premium";
import Annual from "./lib/Annual";

const Plans: FC = () => {
  return (
    <section className="bg-white dark:bg-black">
      <article className="grid gap-16">
        <h2 className="text-center dark:text-white">
          Try free or sign up for premium features.
        </h2>
        <div className="grid gap-10">
          <Free />
          <Premium />
          <Annual />
        </div>
      </article>
    </section>
  );
};

export default Plans;
