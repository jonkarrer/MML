import type { NextPage } from "next";
import { Splash, Features } from "@/components/Home";

const Home: NextPage = () => {
  return (
    <main className="bg-light_grad dark:bg-dark_grad">
      <Splash />
      <Features />
    </main>
  );
};

export default Home;
