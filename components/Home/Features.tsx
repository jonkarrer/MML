import type { NextPage } from "next";
import Tile from "./lib/Tile";

const Features: NextPage = () => {
  return (
    <section className="bg-white">
      <h2>Simplify your research</h2>
      <div className="grid place-items-center grid-cols-2 gap-12 mt-12 px-8">
        <Tile text="Actionable Notifications" img="/icons/exclaim.svg" />
        <Tile text="Modern Dashboard" img="/icons/dash.svg" />
        <Tile text="Unusual Options" img="/icons/flag.svg" />
        <Tile text="Market Analytics" img="/icons/graph.svg" />
        <Tile text="Dedicated Community" img="/icons/people.svg" />
        <Tile text="Actionable Notifications" img="/icons/tag.svg" />
      </div>
    </section>
  );
};

export default Features;
