import Link from "next/link";
import { useRouter } from "next/router";
import { UilStar, UilEllipsisV, UilTrashAlt } from "@iconscout/react-unicons";

export const BooksItem = ({
  img,
  title,
  author,
  category,
  id,
  rating,
  handleDeliteDB,
}) => {
  const router = useRouter();
  return (
    <div
      className="grid grid-cols-16 gap-2 bg-white rounded-md py-3 pl-4 pr-4 h-36 lg:h-48 w-full mb-4 cursor-pointer shadow hover:shadow-md"
      onClick={() => router.push(`/books/${id}`)}
    >
      <div className="w-20 h-full bg-auto overflow-hidden">
        {img && <img src={img} alt="" className="w-full h-full " />}
      </div>
      <div className="flex flex-col justify-start h-full">
        <div>
          <span className="text-gray-dark font-medium text-sm block max-h-10 overflow-hidden">
            {title}
          </span>
          <span className="text-gray font-medium text-sm mb-2 block max-h-10 overflow-hidden">
            {author}
          </span>
        </div>
        <span className="text-gray text-sm  block max-h-10 overflow-hidden">
          {category}
        </span>
        {rating && (
          <div className="flex items-center justify-start">
            <div className="flex text-primary mr-3">
              <UilStar className="w-4 h-4" />
              <UilStar className="w-4 h-4" />
              <UilStar className="w-4 h-4" />
              <UilStar className="w-4 h-4" />
              <UilStar className="w-4 h-4" />
            </div>
            <div className="text-gray-dark text-sm">{rating}</div>
          </div>
        )}
      </div>
      <div className="">
        <Link href="/">
          <button className="text-primary hover:text-gray-dark">
            <UilEllipsisV className="w-5 h-5" />
          </button>
        </Link>
        {handleDeliteDB && (
          <button className="text-primary hover:text-gray-dark">
            <UilTrashAlt
              className="w-5 h-5"
              onClick={(e) => handleDeliteDB(e)}
            />
          </button>
        )}
      </div>
    </div>
  );
};
