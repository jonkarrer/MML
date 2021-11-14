import { FC } from "react";
import Cards from "./lib/Bar/Container";
import Background from "./lib/Bar/Background";

const Bar: FC = () => (
  <section className=" bg-white dark:bg-black overflow-hidden">
    <article className="grid gap-12 m-auto w-full lg:grid-cols-2 lg:gap-0 lg:h-60 lg:max-w-1000 relative">
      <div className="w-full flex items-center justify-center lg:justify-start">
        <Background />
        <h2 className="dark:text-white text-center md:w-120 lg:text-left lg:w-110">
          Find the approach that fits your style
        </h2>
      </div>

      <Cards />
    </article>
  </section>
);

export default Bar;
