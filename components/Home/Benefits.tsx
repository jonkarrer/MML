import { FC } from "react";
import { Diamonds, Rocket, Lightning } from "./lib/icons";

const Benefits = () => (
  <section className="bg-white dark:bg-black">
    <article className="grid gap-12 m-auto md:gap-24 lg:grid-cols-3">
      <h2 className="text-black text-opacity-80 dark:text-white text-center w-72 m-auto md:w-auto lg:col-span-3">
        We{`'`}re dedicated to you
      </h2>

      <Benefit>
        <div className="flex items-center justify-between w-full col-span-2 md:flex-col md:space-y-9">
          <Diamonds />
          <h4 className="text-black opacity-80 dark:text-white  px-2">
            More Markets
          </h4>
        </div>
        <p className="text-xs opacity-60 text-black dark:text-white col-span-2">
          Analyze everything in one place. We support over 9,000 stocks,
          indices, and etfs, over 150 crypto pairs...{" "}
          <b>and we support options!</b> {""}
          Support for NFTs, futures, and forex coming soon.
        </p>
      </Benefit>
      <Benefit>
        <div className="flex items-center justify-between w-full col-span-2 md:flex-col md:space-y-9">
          <Rocket />
          <h4 className="text-black opacity-80 dark:text-white px-2">
            Stellar support
          </h4>
        </div>
        <p className="text-xs opacity-60 text-black dark:text-white col-span-2">
          Our goal is to provide <b>the best support</b> and the highest quality
          free educational tools. You can chat directly with our team, or ask
          the community a question.
        </p>
      </Benefit>
      <Benefit>
        <div className="flex items-center justify-between w-full col-span-2 md:flex-col md:space-y-9">
          <Lightning />
          <h4 className="text-black opacity-80 dark:text-white px-2">
            Reliable speed
          </h4>
        </div>
        <p className="text-xs opacity-60 text-black dark:text-white col-span-2">
          We know <b>reliability is everything</b>, so we created our dashboard
          and API with stability and performance in mind.
        </p>
      </Benefit>
    </article>
  </section>
);

export default Benefits;

const Benefit: FC = ({ children }) => (
  <div className="grid place-items-center grid-cols-2 m-auto w-71  md:w-64 md:gap-9">
    {children}
  </div>
);
