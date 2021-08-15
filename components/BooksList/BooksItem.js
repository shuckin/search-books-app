import Link from "next/link";
import { useRouter } from "next/router";
import { UilStar, UilEllipsisV } from "@iconscout/react-unicons";

export const BooksItem = ({ img, title, author, category, id }) => {
  const router = useRouter();
  return (
    <div
      className="flex bg-white rounded-md py-3 pl-4 pr-4 h-36 w-full mb-4 justify-between cursor-pointer"
      onClick={() => router.push(`/books/${id}`)}
    >
      <img src={img} alt="" width="80" height="auto" />
      <div className="flex flex-col ml-5 justify-between h-full">
        <div>
          <span className="text-gray-dark font-medium text-sm block max-h-10 overflow-hidden">
            {title}
          </span>
          <span className="text-gray font-medium text-sm mb-2 block max-h-10 overflow-hidden">
            {author}
          </span>
        </div>
        <span className="text-gray text-sm">{category}</span>
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
