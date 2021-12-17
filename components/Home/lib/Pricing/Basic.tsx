import { CardWrapper, Feature, Headline } from "./lib";

export const Basic = () => {
  return (
    <CardWrapper borderColor="border-D4D4D4">
      <Headline
        title="Basic"
        desc="All the basics, including real time equities + crypto data and delayed
      options data"
      >
        <h3 className="font-black text-lg">
          $19<b className=" text-sm dark:text-999999">/mo</b>
        </h3>
      </Headline>

      <div className="grid gap-2 lg:h-70 lg:flex lg:flex-col">
        <h5 className="hidden lg:block text-15 font-bold lg:mb-1">
          WHAT{"'"}S INCLUDED
        </h5>
        <i className="text-15 text-232333 dark:text-white lg:not-italic lg:font-bold">
          All free features, plus:
        </i>

        <div className="hidden lg:grid gap-2">
          <Feature name="Real time equities" />
        </div>
        <Feature name="Real time crypto" />
        <Feature name="Equity forecasting models" />
        <Feature name="Exclusive Discord channels" />
      </div>

      <button className="bg-black text-white h-11 w-full dark:bg-white dark:text-black hover:opacity-80">
        Subscribe
      </button>
    </CardWrapper>
  );
};
