import axios from "axios";
import { useState, useEffect } from "react";
import { BooksItem } from "./BooksItem";

export const BooksList = ({ params }) => {
  const [books, setBooks] = useState({
    loading: false,
    data: [],
  });
  const [URL, setURL] = useState("");
  const APIkey = "AIzaSyBxYsRC2RkOQGMr0yfr0nV5cgwxYQtSQ3c";
  const baseURL = "https://www.googleapis.com/books/v1/volumes";
  const paramsURL = !params
    ? `${baseURL}?q=${params}:keyes&key=${APIkey}`
    : `${baseURL}?q=russia:keyes&key=${APIkey}`;

  useEffect(() => {
    setURL(paramsURL);
  }, [setURL]);

  useEffect(() => {
    setBooks({ loading: true });
    const apiUrl = async () => {
      const result = await axios.get(URL);
      console.log(result);
      setBooks({ loading: false, data: result.data.items });
    };
    apiUrl();
  }, [setBooks]);

  return (
    <section className="w-full px-5 pt-8">
      <div className="flex items-center justify-between w-full mb-2">
        <h4 className="text-sm text-gray-dark font-medium">Result</h4>
        <div className="text-sm text-gray-dark font-medium"></div>
      </div>
      <div>
        {/* {books.map((book) => {
          <BooksItem
            key={book.etag}
            id={book.id}
            title={book.volumeInfo.title}
            img={book.volumeInfo.imageLinks.smallThumbnail}
            author={book.volumeInfo.authors}
            category={book.volumeInfo.categories}
          />;
        })} */}
      </div>
    </section>
  );
};
