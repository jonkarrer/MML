import { CardWrapper, Feature, Headline } from "./lib";

export const Premium = () => {
  return (
    <CardWrapper borderColor="border-00EFF" shadow="shadow-price_card">
      <Headline
        title="Premium"
        desc="Everything you need, real time, for one low monthly price"
      />

      <h3 className="font-black text-lg">
        $39<b className=" text-sm text-232333 opacity-50">/mo</b>
      </h3>

      <div className="grid gap-2.5">
        <i className="text-15 text-232333 dark:text-white">
          All free features, plus:
        </i>
        <Feature name="Real time options data" />
        <Feature name="Premium models and alerts" />
        <Feature name="All Discord channels" />
      </div>

      <button className="bg-006EFF text-white h-11 w-full dark:text-black">
        Subscribe
      </button>
    </CardWrapper>
  );
};
