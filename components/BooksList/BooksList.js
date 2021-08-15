import axios from "axios";
import { useState, useEffect } from "react";
import { BooksItem } from "./BooksItem";

export const BooksList = () => {
  const [books, setBooks] = useState([]);
  const baseURL =
    "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyBxYsRC2RkOQGMr0yfr0nV5cgwxYQtSQ3c";

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(baseURL);
      setBooks(result.data.items);
    };
    fetchData();
  }, []);

  return (
    <section className="w-full px-5 pt-8">
      <div className="flex items-center justify-between w-full mb-2">
        <h4 className="text-sm text-gray-dark font-medium">Result</h4>
        <div className="text-sm text-gray-dark font-medium"></div>
      </div>
      <div>
        {books.map((books) => {
          return (
            <BooksItem
              key={books.etag}
              id={books.id}
              title={books.volumeInfo.title}
              img={books.volumeInfo.imageLinks.smallThumbnail}
              author={books.volumeInfo.authors}
              category={books.volumeInfo.categories}
            />
          );
        })}
      </div>
    </section>
  );
};
