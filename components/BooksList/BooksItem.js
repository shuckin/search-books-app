import Link from "next/link";
import { UilStar, UilEllipsisV } from "@iconscout/react-unicons";

export const BooksItem = () => {
  return (
    <div className="flex bg-white rounded-md py-3 pl-4 pr-2 h-36 w-full mb-4">
      <img
        src="http://books.google.com/books/content?id=PDTD2hPNcjAC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
        alt=""
        width="80"
        height="auto"
      />
      <div className="flex flex-col ml-5 justify-between h-full">
        <span className="text-gray-dark font-medium text-sm">
          Flores para Algernon
        </span>
        <span className="text-gray font-medium text-sm mb-2">Daniel Keyes</span>
        <span className="text-gray text-sm">Comics & Graphic Novels</span>
        <div className="flex items-center justify-start">
          <div className="flex text-primary mr-3">
            <UilStar className="w-4 h-4" />
            <UilStar className="w-4 h-4" />
            <UilStar className="w-4 h-4" />
            <UilStar className="w-4 h-4" />
            <UilStar className="w-4 h-4" />
          </div>
          <div className="text-gray-dark text-sm">4,5</div>
        </div>
      </div>
      <div>
        <Link href="/">
          <button className="text-primary">
            <UilEllipsisV className="w-5 h-5" />
          </button>
        </Link>
      </div>
    </div>
  );
};
