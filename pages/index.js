import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import Example from '../component/Header';
import MyProject from '../component/MyProject';
import CoppyRight from '../component/copyright';
import Service from '../component/Services';
import Contact from '../component/Contact';
import ReactPageScroller from "react-page-scroller";
import Me from '../component/Me';

export default function Home() {
  return (
    <div >
      <Head>
        <title>Minh Nguyen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Example />

      <div className="w-full">
        <CoppyRight />
      </div>

      <main>
        <ReactPageScroller containerHeight="100vh"  animationTimer={500} forwardRef={c => this.reactPageScroller = c}>
          <Me />
          <MyProject />
          <Service />
          <Contact />

        </ReactPageScroller>


      </main>


    </div>
  )
}
