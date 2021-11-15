import { FC } from "react";

import { Dashboard, Exclaimation, Flag, Graph, People, Tag } from "./lib/icons";

const Features: FC = () => (
  <section className="bg-white dark:bg-black">
    <article className="grid gap-12 m-auto md:gap-24">
      <h2 className="text-center dark:text-white">Simplify your research</h2>

      <div className="grid place-items-center grid-cols-2 gap-12 md:grid-cols-3">
        <Tile text="Actionable Notifications">
          <Exclaimation />
        </Tile>
        <Tile text="Modern Dashboard">
          <Dashboard />
        </Tile>
        <Tile text="Unusual Options">
          <Flag />
        </Tile>
        <Tile text="Market Analytics">
          <Graph />
        </Tile>
        <Tile text="Dedicated Community">
          <People />
        </Tile>
        <Tile text={`Developer Tools ${"&"} API`}>
          <Tag />
        </Tile>
      </div>
    </article>
  </section>
);

export default Features;

interface ITile {
  text: string;
}

const Tile: FC<ITile> = ({ children, text }) => (
  <div className="grid place-items-center gap-7">
    <div className="grid place-content-center h-26 w-26 rounded-3xl bg-EFF8FE dark:bg-282929">
      {children}
    </div>
    <p className=" text-xs font-medium text-center w-26 opacity-60 dark:text-white">
      {text}
    </p>
  </div>
);
