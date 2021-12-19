/// Styles are located in styles/components/Home/index.css

import { FC } from "react";
import { Diamonds, Rocket, Lightning } from "./lib/icons";

const Benefits: FC = () => (
  <section>
    <div className="wrapper grid gap-16 m-auto md:gap-24">
      <h2 className="heading-text text-center w-72 m-auto md:w-auto">
        We{`'`}re dedicated to you
      </h2>

      <div className="grid gap-16 m-auto md:gap-24 lg:flex lg:justify-between lg:gap-0 lg:w-full">
        <article className="benefit">
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
        </article>

        <article className="benefit">
          <div className="headline-wrapper">
            <Rocket />
            <h4 className="title">Stellar support</h4>
          </div>
          <p className="text">
            Our goal is to provide <b>the best support</b> and the highest
            quality free educational tools. You can chat directly with our team,
            or ask the community a question.
          </p>
        </article>

        <article className="benefit">
          <div className="headline-wrapper">
            <Lightning />
            <h4 className="title">Reliable speed</h4>
          </div>
          <p className="text">
            We know <b>reliability is everything</b>, so we created our
            dashboard and API with stability and performance in mind.
          </p>
        </article>
      </div>
    </div>
  </section>
);

export default Benefits;
