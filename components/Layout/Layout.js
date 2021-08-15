import Head from "next/head";
import Header from "../../components/Header";

export const Layout = ({ title, children }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-start w-full flex-1 bg-gray-light">
        {children}
      </main>
      <footer className="flex items-center justify-center w-full border-t bg-blue-500 px-5 py-3 text-white bg-primary">
        <a
          className="flex items-center justify-center"
          href="https://anteytech.ru"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Shuckin.io
        </a>
      </footer>
    </div>
  );
};
