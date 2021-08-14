import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Search Books App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center w-full flex-1 text-center bg-gray-light"></main>
    </div>
  );
}
