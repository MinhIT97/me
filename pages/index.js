import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import Example from '../component/Header';


export default function Home() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Minh Nguyen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Example />

        <div className="grid grid-cols-4 gap-4 mt-10">
          <div className="col-span-2 m-auto">
            <div className="text-5xl font-bold">
              <div>
                Hello I'm Here.
              </div>
              <div>
                A web developer
              </div>
            </div>
            <div className="mt-4 text-xl  text-gray-600">
              <p>
                I will help you build a website, app, or 2D motion. I deploy excellence agile product teams on demand.
              </p>
            </div>
          </div>
          <div className="col-span-2 m-auto">
            <img src="../Group 1.png" />
          </div>
        </div>
      </main>


    </div>
  )
}
