import { useState, useEffect } from "react";
import axios from "axios";
import BooksList from "../components/BooksList";
import CategoryBooks from "../components/CategoryBooks/CategoryBooks";
import Layout from "../components/Layout";
import Recommended from "../components/RecommendedList";
import Search from "../components/Search";
import Loading from "../components/Loading";

export default function Home() {
  const [keyword, setKeyword] = useState("Ray Bradbury");
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const APIkey = "AIzaSyBxYsRC2RkOQGMr0yfr0nV5cgwxYQtSQ3c";
  const baseURL = "https://www.googleapis.com/books/v1/volumes";

  useEffect(async () => {
    setIsLoading(true);
    const res = await axios.get(
      `${baseURL}?q=${keyword ? keyword : "Stephen Kin"}`
    );
    setBooks(res.data.items);
    setIsLoading(false);
  }, [keyword]);

  return (
    <Layout title="Search Books App">
      <Search
        type="text"
        placeholder="The name of book"
        onChange={(e) => setKeyword(e.target.value.toLowerCase())}
        value={keyword}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <CategoryBooks books={books} isHidden={keyword} />
          <Recommended books={books} isHidden={keyword} />
          <BooksList books={books} />
        </>
      )}
    </Layout>
  );
}
