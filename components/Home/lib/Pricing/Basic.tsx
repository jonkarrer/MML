import { CardWrapper, Feature, Headline } from "./lib";

export const Basic = () => {
  return (
    <CardWrapper borderColor="border-D4D4D4">
      <Headline
        title="Basic"
        desc="All the basics, including real time equities + crypto data and delayed
      options data"
      />

      <h3 className="font-black text-lg">
        $19<b className=" text-sm text-232333 opacity-50">/mo</b>
      </h3>

      <div className="grid gap-2.5">
        <i className="text-15 text-232333 dark:text-white">
          All free features, plus:
        </i>
        <Feature name="Real time crypto" />
        <Feature name="Equity forecasting models" />
        <Feature name="Exclusive Discord channels" />
      </div>

      <button className="bg-black text-white h-11 w-full dark:bg-white dark:text-black">
        Subscribe
      </button>
    </CardWrapper>
  );
};
