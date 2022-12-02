import Head from "next/head"
import Link from "next/link"

import { data } from "../constance/CardsData"


export default function Home() {


  return (
    <>
      <Head>
        <title>My Nextjs Home page</title>
        <meta property='description' content='Thank you for the chance you gave me' />
      </Head>
      <div className="max-w-3xl m-auto py-8 flex flex-col gap-y-16">
        <div className="text-center flex flex-col gap-y-16">
          <h1 className="text-5xl font-bold">
            Welcome to <br /> <a href="https://nextjs.org" className="text-blue-500">Next.js!</a>
          </h1>
          <div className="">
            <p>Get started by editing</p>
            <code className="bg-zinc-100 text-xs py-2 px-4">pages/index.js</code>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 w-3/4 m-auto md:grid-cols-2 md:w-full">
          {
            data.map(i =>
              <Link href={i.link} target="_blank" rel="noreferrer" className="border rounded-lg p-6">
                <p className="text-lg font-bold">{i.title}</p> <br />
                <p>
                  {i.text}
                </p>
              </Link>
            )
          }
        </div>
      </div>
    </>
  )
}