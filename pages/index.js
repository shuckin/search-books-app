import BooksList from "../components/BooksList";
import CategoryBooks from "../components/CategoryBooks/CategoryBooks";

import Layout from "../components/Layout";
import Recommended from "../components/RecommendedList";
import Search from "../components/Search";

export default function Home() {
  return (
    <Layout title="Search Books App">
      <Search placeholder="The name of book" />
      <CategoryBooks />
      <Recommended />
      <BooksList />
    </Layout>
  );
}
