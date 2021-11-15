import { FC } from "react";
import { Diamonds, Rocket, Lightning } from "./lib/icons";

const Benefits = () => (
  <section className="bg-white dark:bg-black">
    <article className="grid gap-16 m-auto md:gap-24 lg:grid-cols-3">
      <h2 className="text-black text-opacity-80 dark:text-white text-center w-72 m-auto md:w-auto lg:col-span-3">
        We{`'`}re dedicated to you
      </h2>

      <Benefit>
        <div className="headline-wrapper">
          <Diamonds />
          <h4 className="title">More Markets</h4>
        </div>
        <p className="text">
          Analyze everything in one place. We support over 9,000 stocks,
          indices, and etfs, over 150 crypto pairs...{" "}
          <b>and we support options!</b> {""}
          Support for NFTs, futures, and forex coming soon.
        </p>
      </Benefit>
      <Benefit>
        <div className="headline-wrapper">
          <Rocket />
          <h4 className="title">Stellar support</h4>
        </div>
        <p className="text">
          Our goal is to provide <b>the best support</b> and the highest quality
          free educational tools. You can chat directly with our team, or ask
          the community a question.
        </p>
      </Benefit>
      <Benefit>
        <div className="headline-wrapper">
          <Lightning />
          <h4 className="title">Reliable speed</h4>
        </div>
        <p className="text">
          We know <b>reliability is everything</b>, so we created our dashboard
          and API with stability and performance in mind.
        </p>
      </Benefit>
    </article>
  </section>
);

export default Benefits;

const Benefit: FC = ({ children }) => <div className="benefit">{children}</div>;
