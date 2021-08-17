import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import {
  UilStar,
  UilHeartAlt,
  UilLink,
  UilAngleRight,
} from "@iconscout/react-unicons";
import Loading from "../../components/Loading";

export default function Book() {
  const URL = "https://611b4e6a22020a00175a43e3.mockapi.io/api/book/favorite";
  const router = useRouter();

  const { id } = router.query;
  const [book, setBook] = useState([]);
  const [itemId, setItemID] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const APIKey = "AIzaSyBxYsRC2RkOQGMr0yfr0nV5cgwxYQtSQ3c";
  const baseURL = `https://www.googleapis.com/books/v1/volumes/${id}`;

  console.log(baseURL);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(baseURL);
      setIsLoading(false);
      setItemID(result.data.id);
      setBook(result.data.volumeInfo);
    };
    fetchData();
  }, [setBook]);

  const handleSave = (e) => {
    e.preventDefault();
    axios
      .post(URL, {
        id: itemId,
        img: book.imageLinks.thumbnail,
        categories: book.categories,
        title: book.title,
        authors: book.authors,
        averageRating: book.averageRating,
      })
      .then((res) => {
        console.log(res.data);
      });
  };
  return (
    <Layout title={book.title}>
      {isLoading ? (
        <Loading />
      ) : (
        <section className="w-full px-5 py-7 lg:container ">
          <div className="flex mb-5 ">
            <div className="text-gray mr-3">Library</div>
            <div className="mr-3 flex justify-center items-center">
              <UilAngleRight className="text-gray h-5 w-5" />
            </div>
            <div className="text-gray-dark">{book.title}</div>
          </div>
          <div className="md:grid md:grid-cols-16 lg:gap-5">
            <div className="bg-white px-5 py-5 rounded-md shadow">
              <img
                src={
                  book.imageLinks
                    ? book.imageLinks.thumbnail
                    : "https://via.placeholder.com/"
                }
                alt={book.title}
              />
            </div>
            <div className="bg-white w-full px-5 py-5 rounded-md shadow">
              <div className="flex mb-5">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <span className="text-gray-dark font-medium text-xl block max-h-14 overflow-hidden">
                      {book.title}
                    </span>
                    <span className="text-gray font-medium text-md mb-2 block max-h-12 overflow-hidden">
                      {book.authors}
                    </span>
                  </div>
                  <span className="text-gray text-md block max-h-12 overflow-hidden">
                    {book.categories}
                  </span>
                  {book.averageRating && (
                    <div className="flex items-center justify-start">
                      <div className="flex text-primary mr-3">
                        <UilStar className="w-4 h-4" />
                        <UilStar className="w-4 h-4" />
                        <UilStar className="w-4 h-4" />
                        <UilStar className="w-4 h-4" />
                        <UilStar className="w-4 h-4" />
                      </div>
                      <div className="text-gray-dark text-md">
                        {book.averageRating}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="text-sm text-gray">
                <div className=" text-gray mb-5">{book.description}</div>
                <div className="grid grid-cols-20 gap-3">
                  <div className="flex justify-between">
                    <div className="text-gray-dark font-medium">
                      Categories:
                    </div>
                    <div className="">{book.categories}</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-gray-dark font-medium">Page:</div>
                    <div>{book.pageCount}</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-gray-dark font-medium">Published:</div>
                    <div>{book.publisher}</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-gray-dark font-medium">
                      Published Date:
                    </div>
                    <div>{book.publishedDate}</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-gray-dark font-medium">Language:</div>
                    <div>{book.language}</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center mt-5">
                <a
                  href={book.infoLink}
                  _blank
                  className="flex items-center justify-center border-2 border-primary-light w-full py-3 text-primary-dark text-md font-medium rounded-md shadow-md hover:bg-primary hover:text-white hover:shadow-lg active:shadow hover:border-primary transition-all mr-3"
                >
                  <UilLink className="mr-3" /> Link
                </a>
                <button
                  className="flex items-center justify-center bg-primary-light border-primary-light border-2 w-full py-3 text-primary-dark text-md font-medium rounded-md shadow-md hover:bg-primary hover:text-white hover:shadow-lg active:shadow transition-all hover:border-primary "
                  onClick={(itemId) => handleSave(itemId)}
                >
                  <UilHeartAlt className="mr-3" /> Favorite
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
