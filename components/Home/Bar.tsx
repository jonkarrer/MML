import { FC } from "react";

const Bar: FC = () => (
  <section className="">
    <article className="wrapper grid">
      <h2 className="heading-text text-center m-auto md:w-120 lg:w-auto">
        Find the approach that fits your style
      </h2>

      <div className=" mt-16 grid gap-11.5 m-auto lg:w-full lg:max-w-900 lg:mt-28 lg:flex items-center justify-between">
        <article className="flex items-center space-x-7">
          <div className="h-17 w-17 rounded-full shadow-0,3,6,0,.1 bg-00D6C9 grid place-content-center">
            <img src="/approach/dash.svg" alt="dashboard icon" />
          </div>{" "}
          <span>
            <h6 className="text-19 text-150727 dark:text-white font-medium">
              Dashboard
            </h6>{" "}
            <p className="text-17 text-150727 dark:text-white font-light">
              News, data, and trading tools
            </p>
          </span>{" "}
        </article>

        <article className="flex items-center space-x-7">
          <div className="h-17 w-17 rounded-full shadow-0,3,6,0,.1 bg-white grid place-content-center">
            <img src="/approach/python.svg" alt="dashboard icon" />
          </div>{" "}
          <span>
            <h6 className="text-19 text-150727 dark:text-white font-medium">
              Develop
            </h6>{" "}
            <p className="text-17 text-150727 dark:text-white font-light">
              Read the docs
            </p>
          </span>{" "}
        </article>

        <article className="flex items-center space-x-7">
          <div className="h-17 w-17 rounded-full shadow-0,3,6,0,.1 bg-5865F2 grid place-content-center">
            <img src="/approach/discord.svg" alt="dashboard icon" />
          </div>{" "}
          <span>
            <h6 className="text-19 text-150727 dark:text-white font-medium">
              Discord
            </h6>{" "}
            <p className="text-17 text-150727 dark:text-white font-light">
              Join the community
            </p>
          </span>{" "}
        </article>
      </div>
    </article>
  </section>
);

export default Bar;
