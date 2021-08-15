import { useState } from "react";
import BooksList from "../components/BooksList";
import CategoryBooks from "../components/CategoryBooks/CategoryBooks";
import Layout from "../components/Layout";
import Recommended from "../components/RecommendedList";
import Search from "../components/Search";

export default function Home() {
  const [keyword, setKeyword] = useState([]);
  const [hidden, setHidden] = useState(false);

  const handleFilter = (e) => {
    const seatchWord = e.target.value.toLowerCase();
    setKeyword(seatchWord);
    setHidden(true);
  };
  return (
    <Layout title="Search Books App">
      <Search placeholder="The name of book" onChange={handleFilter} />
      {!hidden && (
        <>
          <CategoryBooks />
          <Recommended />
        </>
      )}

      <BooksList params={keyword} />
    </Layout>
  );
}
