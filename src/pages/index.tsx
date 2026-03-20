import { FAQ, HowToChooseBookmaker, MainInfo, StepsToBet } from "@/widgets";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Stats</title>
        <meta name="description" content="Stats" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className=""
      >
        <MainInfo />
        <HowToChooseBookmaker />
        <StepsToBet />
        <FAQ />
      </div>
    </>
  );
}
