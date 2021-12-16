import { FC } from "react";

const Plans: FC = () => {
  return (
    <section>
      <div id="pricing" className="wrapper grid gap-16 lg:gap-24">
        <h2 className="text-87 text-center md:w-120 md:m-auto lg:w-auto">
          Try free or sign up for premium features
        </h2>
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-6">
          <article className="border border-D4D4D4 rounded-base px-8 py-5">
            <h3 className=" text-lg font-black">Free</h3>
            <p className=" text-232333 opacity-50 text-14">
              Try it out for free with slightly delayed data and alerts
            </p>
            <h3 className="font-black text-lg">$0</h3>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Plans;
