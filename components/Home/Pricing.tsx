import { FC } from "react";
import { MobilePrice } from "./lib/Pricing/Mobile";

const Plans: FC = () => {
  return (
    <section>
      <div id="pricing" className="wrapper grid gap-16 lg:gap-24">
        <h2 className="text-87 text-center md:w-120 md:m-auto lg:w-auto">
          Try free or sign up for premium features
        </h2>
        <MobilePrice />
      </div>
    </section>
  );
};

export default Plans;
