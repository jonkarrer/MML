import { CardWrapper, Feature, Headline } from "./lib";

export const Free = () => {
  return (
    <CardWrapper borderColor="border-D4D4D4">
      <Headline
        title="Free"
        desc="Try it out for free with slightly delayed data and alerts"
      />

      <h3 className="font-black text-lg">
        $0<b className=" text-sm text-232333 opacity-50">/mo</b>
      </h3>

      <div className="grid gap-2">
        <Feature name="Discord community" />
        <Feature name="Open source models" />
        <Feature name="Sentiment tracking" />
        <Feature name="Financial literacy tools" />
      </div>

      <button className="bg-black text-white h-11 w-full dark:bg-white dark:text-black">
        Sign Up
      </button>
    </CardWrapper>
  );
};
