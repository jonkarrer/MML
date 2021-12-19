import { FC } from "react";
import Tile from "./lib/Features/Tile";
import { Dashboard, Exclaimation, Flag, Graph, People, Tag } from "./lib/icons";

const Features: FC = () => (
  <section id="features">
    <article className="wrapper grid gap-12 m-auto md:gap-24">
      <h2 className="heading-text text-center">Simplify your research</h2>

      <div className="grid place-items-center grid-cols-2 gap-12 md:grid-cols-3 md:w-140 md:m-auto lg:w-170">
        <Tile text="Actionable Notifications">
          <Exclaimation />
        </Tile>
        <Tile text="Modern Dashboard">
          <Dashboard />
        </Tile>
        <Tile text="Market Analytics">
          <Graph />
        </Tile>
        <Tile text="Unusual Options">
          <Flag />
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
