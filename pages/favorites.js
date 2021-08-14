import Head from "next/head";
import Header from "../components/Header";


export default function Favorites() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <Head>
        <title>Favorites</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-start w-full flex-1 bg-gray-light">
        
      </main>
    </div>
  );
}
