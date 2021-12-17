import { CardWrapper, Feature, Headline } from "./lib";

export const Annual = () => {
  return (
    <CardWrapper borderColor="border-D4D4D4">
      <Headline
        title="Annual"
        desc="Pay once a year, lock your price and save on your subscription cost"
      >
        <h3 className="font-black text-lg">
          $399<b className=" text-sm text-232333 opacity-50">/yr</b>
        </h3>
      </Headline>

      <div className="grid gap-2 lg:h-70 lg:flex lg:flex-col">
        <h5 className="hidden lg:block text-15 font-bold lg:mb-1">
          WHAT{"'"}S INCLUDED
        </h5>
        <i className="text-15 text-232333 dark:text-white lg:not-italic lg:font-bold">
          All premium features, plus:
        </i>

        <Feature name="15% savings" />
        <Feature name="Priority requests" />
        <Feature name="Support our development" />
      </div>

      <button className="bg-black text-white h-11 w-full dark:bg-white dark:text-black">
        Subscribe
      </button>
    </CardWrapper>
  );
};
