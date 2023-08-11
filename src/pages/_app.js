import "@/styles/globals.css";
import Nav from "@/components/Nav";
import Head from "next/head";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [current, setCurrent] = useState("about");
  return (
    <div className="">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="flex flex-col md:flex-row font-neue-haas tracking-wider leading-7 text-slate-500">
        <Nav current={current} setCurrent={setCurrent} />
        <Component {...pageProps} current={current} setCurrent={setCurrent} />
      </div>
    </div>
  );
}
