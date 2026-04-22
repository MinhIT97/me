import Head from "next/head";
import { ReactElement } from "react";
import "tailwindcss/tailwind.css";

import Layout from "../component/layout/layout";
import Me from "../component/portfolio/me";
import About from "../component/About";
import Skills from "../component/Skills";
import Experiences from "../component/Experiences";
import MyProject from "../component/MyProject";

function Home() {
  return (
    <div className="bg-portfolio-bg text-portfolio-200">
      <Me />
      <About />
      <Skills />
      <Experiences />
      <MyProject />
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Home;