const Start = () => {
  return (
    <section className="bg-white dark:bg-black">
      <article className="grid place-items-center gap-7 dark:bg-1E1F20 bg-white shadow-action rounded-base py-8 md:gap-8 lg:flex lg:justify-between lg:px-20 lg:h-52">
        <div className="grid gap-6 place-items-center lg:place-items-start lg:gap-3">
          <h2 className="font-bold opacity-87 dark:text-white text-left leading-none">
            Get started today
          </h2>
          <p className="opacity-60 text-xs dark:text-white text-center w-56 lg:col-start-1 md:w-auto lg:text-left lg:text-base">
            Ready to own your investing? We{"'"}ve got you covered.
          </p>
        </div>
        <button className="dark:bg-8678FF bg-D1CCFF relative hover:shadow-plan_button">
          Subscribe Now
        </button>
      </article>
      <style jsx>
        {`
          button:hover::after {
            content: "›";
            font-size: 24px;
            font-weight: bold;

            position: absolute;
            top: 0;
            bottom: 0;
            right: 6px;
            margin: auto;

            height: 40px;
            width: 40px;
          }
        `}
      </style>
    </section>
  );
};

export default Start;
