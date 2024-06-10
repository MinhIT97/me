import Head from "next/head";
import "tailwindcss/tailwind.css";
import Example from "../component/Header";
import CoppyRight from "../component/copyright";

import styles from "../styles/Home.module.scss";
import useTrans from "../src/hooks/useTrans";
import Me from "../component/portfolio/me";
import Layout from "../component/layout/layout";
import { ReactElement } from "react";

function Home() {
  const trans = useTrans();
  return (
    <div>
      <Me />
    </div>
  );
}
Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title="Home" >
      {page}
    </Layout>
  )
}

export default Home