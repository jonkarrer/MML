import type { NextPage } from "next";
import {
  Splash,
  Features,
  Pricing,
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
        <Pricing />
        <Bar />
        <Benefits />
        <Start />
      </main>
    </Layout>
  );
};

export default Home;
