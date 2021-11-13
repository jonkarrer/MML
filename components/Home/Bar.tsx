import { FC } from "react";
import Cards from "./lib/Bar/Container";
import Background from "./lib/Bar/Background";

const Bar: FC = () => (
  <section className="bg-white dark:bg-black overflow-hidden">
    <article className="grid gap-12 lg:flex lg:justify-between lg:m-auto lg:gap-0 lg:h-60 xl:w-230 relative">
      <Background />

      <h2 className="dark:text-white text-center md:w-120 md:m-auto lg:w-110 lg:text-left">
        Find the approach that fits your style
      </h2>

      <Cards />
    </article>
  </section>
);

export default Bar;
