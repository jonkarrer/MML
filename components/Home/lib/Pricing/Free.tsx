import { CardWrapper, Feature, Headline } from "./lib";

export const Free = () => {
  return (
    <CardWrapper borderColor="border-D4D4D4">
      <Headline
        title="Free"
        desc="Try it out for free with slightly delayed data and alerts"
      >
        {" "}
        <h3 className="font-black text-lg">
          $0<b className="text-sm dark:text-999999">/mo</b>
        </h3>
      </Headline>

      <div className="grid gap-2 lg:h-70 lg:flex lg:flex-col">
        <div className="hidden lg:grid gap-2">
          <h5 className="text-15 font-bold lg:mb-1">WHAT{"'"}S INCLUDED</h5>
          <Feature name="Delayed options" />
          <Feature name="Delayed Alerts" />
          <Feature name="Delayed options data" />
        </div>

        <Feature name="Discord community" />
        <Feature name="Open source models" />
        <Feature name="Sentiment tracking" />
        <Feature name="Financial literacy tools" />
      </div>

      <button className="bg-black text-white h-11 w-full dark:bg-white dark:text-black hover:opacity-80">
        Sign Up
      </button>
    </CardWrapper>
  );
};
