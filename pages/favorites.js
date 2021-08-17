import { useState, useEffect } from "react";
import axios from "axios";
import BooksList from "../components/BooksList";
import Layout from "../components/Layout";
import { BooksItem } from "../components/BooksList/BooksItem";

export default function Favorites() {
  const URL = "https://611b4e6a22020a00175a43e3.mockapi.io/api/book/favorite";
  const [book, setBook] = useState([]);
  const [handleDelite, setHandleDelite] = useState(true);

  const handleDeliteDB = (e) => {
    e.preventDefault();
    console.log(e);
    axios.delete(`${URL}${e}`).then((res) => {
      console.log(res.data);
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(URL);
      setBook(result.data);
    };
    fetchData();
  }, []);

  return (
    <Layout title={"Favorite"}>
      <section className="w-full px-5 pt-8 lg:container">
        <div className="flex items-center justify-between w-full mb-2">
          <h4 className="text-sm text-gray-dark font-medium">Favorite</h4>
          <div className="text-sm text-gray-dark font-medium"></div>
        </div>
        <div>
          <div className="grid lg:grid-rows-4 lg:grid-cols-4 md:grid-rows-2 md:grid-cols-2 md:gap-3 lg:gap-7">
            {book.map((book) => {
              const { id, title, authors, img, categories, averageRating } =
                book;

              return (
                <BooksItem
                  key={id}
                  id={id}
                  title={title}
                  img={img ? img : "https://via.placeholder.com/"}
                  author={authors}
                  category={categories}
                  rating={averageRating}
                  handleDeliteDB={handleDeliteDB}
                />
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
