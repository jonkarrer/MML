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
    <main className="bg-light_grad dark:bg-dark_grad">
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
