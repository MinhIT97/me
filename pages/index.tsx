import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import Example from '../component/Header';
import MyProject from '../component/MyProject';
import CoppyRight from '../component/copyright';
import Service from '../component/Services';
import Contact from '../component/Contact';
import ReactPageScroller from "react-page-scroller";
import Me from '../component/Me';

import styles from "../styles/Home.module.scss";
import useTrans from '../src/hooks/useTrans';

import Skills from '../component/Skills';
import About from '../component/About';
import Experiences from '../component/Experiences';


export default function Home() {
  const trans = useTrans();
  return (
    <div >
      <Head>
        <title>Minh Nguyen</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Portfolio Nguyễn Văn Minh developer "></meta>
        <meta property="og:image" content="./Group 69.png"></meta>
        <meta property="og:title" content="Minh Nguyen"></meta>
        <meta property="og:title" content="Portfolio Nguyễn Văn Minh developer"></meta>
      </Head>
      <Example />

      <div className="w-full">
        <CoppyRight />
      </div>

      <main className={styles.test}>
        {/* <ReactPageScroller containerHeight="100vh" animationTimer={500}   > */}
        <Me />
        <About />
        <MyProject />
        <Skills />
        <Experiences />
        <Service />
        <Contact />

        {/* </ReactPageScroller> */}


      </main>


    </div>
  )
}
