import { useState, useEffect } from "react";
import axios from "axios";
import BooksList from "../components/BooksList";
import CategoryBooks from "../components/CategoryBooks/CategoryBooks";
import Layout from "../components/Layout";
import Recommended from "../components/RecommendedList";
import Search from "../components/Search";

export default function Home({ data }) {
  const [keyword, setKeyword] = useState();
  const [hidden, setHidden] = useState(false);
  const APIkey = "AIzaSyBxYsRC2RkOQGMr0yfr0nV5cgwxYQtSQ3c";
  const baseURL = "https://www.googleapis.com/books/v1/volumes";

  const paramsURL = keyword
    ? `${baseURL}?q=${keyword}:keyes&key=${APIkey}`
    : `${baseURL}?q=russia:keyes&key=${APIkey}`;

  console.log(paramsURL);

  const handleFilter = (e) => {
    const searchWord = e.target.value.toLowerCase();
    setKeyword(searchWord);
    setHidden(true);
  };

  return (
    <Layout title="Search Books App">
      <Search placeholder="The name of book" onChange={handleFilter} />
      {!hidden && (
        <>
          <CategoryBooks />
          <Recommended books={data.items} />
        </>
      )}
      <BooksList books={data.items} />
    </Layout>
  );
}

export const getStaticProps = async (keyword) => {
  const APIkey = "AIzaSyBxYsRC2RkOQGMr0yfr0nV5cgwxYQtSQ3c";
  const baseURL = "https://www.googleapis.com/books/v1/volumes";
  const res = await fetch(`${baseURL}?q=harry-potter:keyes&key=${APIkey}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
