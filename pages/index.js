import Head from "next/head";
import BooksList from "../components/BooksList";
import CategoryBooks from "../components/CategoryBooks/CategoryBooks";
import Header from "../components/Header";
import Recommended from "../components/RecommendedList";
import Search from "../components/Search";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <Head>
        <title>Search Books App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-start w-full flex-1 bg-gray-light">
        <Search placeholder="The name of book" />
        <CategoryBooks />
        <Recommended/>
        <BooksList/>
      </main>
    </div>
  );
}
