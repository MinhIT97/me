import Head from "next/head";
import "tailwindcss/tailwind.css";
import Example from "../component/Header";
import CoppyRight from "../component/copyright";

import styles from "../styles/Home.module.scss";
import useTrans from "../src/hooks/useTrans";
import Me from "../component/portfolio/me";

export default function Home() {
  const trans = useTrans();
  return (
    <div>
      <Head>
        <title>Minh Nguyen</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Portfolio Nguyễn Văn Minh developer "
        ></meta>
        <meta property="og:image" content="./Group 69.png"></meta>
        <meta property="og:title" content="Minh Nguyen"></meta>
        <meta
          property="og:title"
          content="Portfolio Nguyễn Văn Minh developer"
        ></meta>
      </Head>
      <Example />

      <div className="w-full">
        <CoppyRight />
      </div>

      <main className={styles.test}>
        <Me />
      </main>
    </div>
  );
}
