import type { NextPage } from "next";
import {
  Splash,
  Features,
  Plans,
  Bar,
  Benefits,
  Start,
} from "@/components/Home";
import Layout from "@/components/Home/Layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <main className="bg-white dark:bg-121212">
        <Splash />
        <Features />
        <Plans />
        <Bar />
        <Benefits />
        <Start />
      </main>
    </Layout>
  );
};

export default Home;
