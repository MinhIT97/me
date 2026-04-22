import Head from "next/head";
import { ReactElement } from "react";
import "tailwindcss/tailwind.css";

import Layout from "../component/layout/layout";
import Me from "../component/portfolio/me";
import About from "../component/About";
import Skills from "../component/Skills";
import Experiences from "../component/Experiences";
import MyProject from "../component/MyProject";
import Contact from "../component/Contact";
import Blog from "../component/Blog";
import { Reveal } from "../component/Reveal";

function Home() {
  return (
    <div className="bg-portfolio-bg text-portfolio-200">
      <Reveal width="100%">
        <Me />
      </Reveal>
      <Reveal width="100%">
        <About />
      </Reveal>
      <Reveal width="100%">
        <Skills />
      </Reveal>
      <Reveal width="100%">
        <Experiences />
      </Reveal>
      <Reveal width="100%">
        <MyProject />
      </Reveal>
      <Reveal width="100%">
        <Blog />
      </Reveal>
      <Reveal width="100%">
        <Contact />
      </Reveal>
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