import { FC } from "react";
import Tile from "./lib/Tile";
import { Dashboard, Exclaimation, Flag, Graph, People, Tag } from "./lib/icons";

const Features: FC = () => (
  <section className="bg-white dark:bg-black">
    <h2 className="text-center dark:text-white">Simplify your research</h2>
    <div
      className="
    grid place-items-center grid-cols-2 gap-12 mt-12 px-8 
    md:mt-24 md:grid-cols-3 
    lg:max-w-3xl lg:mx-auto
    "
    >
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
  </section>
);

export default Features;
