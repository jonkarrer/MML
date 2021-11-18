import { FC } from "react";
import Cards from "./lib/Bar/Cards";
import Background from "./lib/Bar/Background";

const Bar: FC = () => (
  <section className="overflow-hidden">
    <article className="wrapper grid gap-12 m-auto w-full lg:grid-cols-2 lg:gap-0 lg:h-60 relative">
      <div className="w-full flex items-center justify-center lg:justify-start">
        <Background />

        <h2 className="opacity-87 text-black dark:text-white text-center md:w-120 lg:text-left lg:w-110">
          Find the approach that fits your style
        </h2>
      </div>

      <Cards />
    </article>
  </section>
);

export default Bar;
