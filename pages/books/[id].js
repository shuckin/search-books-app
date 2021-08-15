import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { UilStar, UilHeartAlt, UilLink } from "@iconscout/react-unicons";

export default function Book() {
  const router = useRouter();

  const { id } = router.query;
  const [book, setBook] = useState([]);
  const APIKey = 'AIzaSyBxYsRC2RkOQGMr0yfr0nV5cgwxYQtSQ3c';
  const baseURL = `https://www.googleapis.com/books/v1/volumes/${id}?key=${APIKey}`;

  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(baseURL);
      setBook(result.data.volumeInfo);
    };
    fetchData();
  }, []);

  return (
    <Layout title="feff">
      <section className="w-full px-5 py-7">
        <div className="bg-white w-full px-5 py-5 rounded-md shadow">
          <div className="flex mb-5">
            <img
              src={book.imageLinks}
              alt={book.title}
              width="100"
              height="auto"
            />
            <div className="flex flex-col ml-5 justify-between h-full">
              <div>
                <span className="text-gray-dark font-medium text-xl block">
                  {book.title}
                </span>
                <span className="text-gray font-medium text-md mb-2 block">
                  {book.authors}
                </span>
              </div>
              <span className="text-gray text-md">{book.categories}</span>
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
            </div>
          </div>
          <div className="text-sm text-gray">
            <div className=" text-gray mb-5">{book.description}</div>
            <div className="grid grid-cols-20 gap-3">
              <div className="flex justify-between">
                <div className="text-gray-dark font-medium">Categories:</div>
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
          <button className="flex items-center justify-center border-2 border-primary-light w-full py-3 text-primary-dark text-md font-medium rounded-md shadow-md hover:bg-primary hover:text-white hover:shadow-lg active:shadow hover:border-primary transition-all mr-3">
              <UilLink className="mr-3" /> Link
            </button>
            <button className="flex items-center justify-center bg-primary-light border-primary-light border-2 w-full py-3 text-primary-dark text-md font-medium rounded-md shadow-md hover:bg-primary hover:text-white hover:shadow-lg active:shadow transition-all hover:border-primary ">
              <UilHeartAlt className="mr-3" /> Favorite
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
