import type { NextPage } from "next";
import {
  Splash,
  Features,
  Plans,
  Bar,
  Benefits,
  Start,
} from "@/components/Home";

const Home: NextPage = () => {
  return (
    <main className="bg-white dark:bg-black">
      <Splash />
      <Features />
      <Plans />
      <Bar />
      <Benefits />
      <Start />
    </main>
  );
};

export default Home;
