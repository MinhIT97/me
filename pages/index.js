import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import Example from '../component/Header';
import MyProject from '../component/MyProject';
import CoppyRight from '../component/copyright';
import Service from '../component/Services';
import Contact from '../component/Contact';


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

      <main className="max-w-screen-lg mx-auto">

        <div className="md:grid md:grid-flow-col md:grid-cols-2 grid:gap-4 mt-16 ">
          <div className="sm:col-span-1 m-auto ">
            <div className="md:text-5xl text-2xl font-bold ">
              <div>
                Hello I'm Here.
              </div>
              <div>
                A web developer
              </div>
            </div>
            <div className="mt-4 md:text-xl text-base  text-gray-600">
              <p>
                I will help you build a website, app, or 2D motion. I deploy excellence agile product teams on demand.
              </p>
            </div>
          </div>
          <div className="m-auto">
            <img src="../Group 1.png" />
          </div>
        </div>

        
        <MyProject />
        <Service />
        <Contact/>
      </main>


    </div>
  )
}
