import { useRouter } from "next/router";
import { UilStar } from "@iconscout/react-unicons";
export const RecommendedItem = ({
  img,
  title,
  author,
  category,
  id,
  rating,
}) => {
  const router = useRouter();
  return (
    <div onClick={() => router.push(`/books/${id}`)}>
      <div className="flex bg-white rounded-md p-3 h-36 w-64 overflow-hidden">
        {img && <img src={img} alt="" width="80" height="auto" />}
        <div className=" flex flex-col justify-between ml-3">
          <div className="flex flex-col  justify-start">
            <span className="text-gray-dark font-medium text-sm max-h-10 overflow-hidden">
              {title}
            </span>
            <span className="text-gray font-medium text-sm mb-3 max-h-10 overflow-hidden">
              {author}
            </span>
            <span className="text-gray text-sm">{category}</span>
          </div>
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
      </div>
    </div>
  );
};
