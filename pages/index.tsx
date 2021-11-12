import type { NextPage } from "next";
import { Splash, Features, Plans } from "@/components/Home";
import Bar from "@/components/Home/Bar";

const Home: NextPage = () => {
  return (
    <main className="bg-light_grad dark:bg-dark_grad">
      <Splash />
      <Features />
      <Plans />
      <Bar />
    </main>
  );
};

export default Home;
