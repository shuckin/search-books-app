import { useState, useEffect } from "react";
import axios from "axios";
import BooksList from "../components/BooksList";
import CategoryBooks from "../components/CategoryBooks/CategoryBooks";
import Layout from "../components/Layout";
import Recommended from "../components/RecommendedList";
import Search from "../components/Search";
import Loading from "../components/Loading";

export default function Home() {
  const [keyword, setKeyword] = useState();
  const [hidden, setHidden] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [books, setBooks] = useState([]);

  const handleFilter = (e) => {
    const searchWord = e.target.value.toLowerCase();
    setKeyword(searchWord);
    setHidden(true);
  };

  useEffect(() => {
    const APIkey = "AIzaSyBxYsRC2RkOQGMr0yfr0nV5cgwxYQtSQ3c";
    const baseURL = "https://www.googleapis.com/books/v1/volumes";
    const paramsURL = `${baseURL}?q=${keyword}:keyes&key=${APIkey}`;

    const getDataResult = async () => {
      const res = await axios(paramsURL);
      setIsLoading(false);
      setBooks(res.data.items);
    };

    getDataResult();
  }, [setBooks]);

  return (
    <Layout title="Search Books App">
      <Search placeholder="The name of book" onChange={handleFilter} />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <CategoryBooks isHidden={hidden} />
          <Recommended books={books} isHidden={hidden} />
          <BooksList books={books} />
        </>
      )}
    </Layout>
  );
}
