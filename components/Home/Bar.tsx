import { FC } from "react";
import Cards from "./lib/Bar/Cards";

const Bar: FC = () => (
  <section className="dark:bg-black overflow-hidden">
    <article className="grid gap-12 lg:flex lg:justify-between lg:m-auto lg:gap-0 lg:h-60 xl:w-220 relative">
      <span className="hidden lg:block h-60 absolute bg-1E1F20 rounded-xl w-full top-0 left-0 transform -translate-x-1/2"></span>
      <h2 className="dark:text-white text-center md:w-120 md:m-auto lg:w-110 lg:text-left">
        Find the approach that fits your style
      </h2>
      <Cards />
    </article>
  </section>
);

export default Bar;
