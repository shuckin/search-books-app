import { useRouter } from "next/router";
export const RecommendedItem = ({ img, title, author, category, id }) => {
  const router = useRouter();
  return (
    <div className="shadow-md" onClick={() => router.push(`/books/${id}`)}>
      <div className="flex bg-white rounded-md p-3 h-36 w-64 ">
        <img src={img} alt="" width="80" height="auto" />
        <div className="flex flex-col ml-3 justify-between h-full">
          <span className="text-gray-dark font-medium text-sm max-h-10 overflow-hidden">
            {title}
          </span>
          <span className="text-gray font-medium text-sm mb-3 max-h-10 overflow-hidden">
            {author}
          </span>
          <span className="text-gray text-sm">{category}</span>
        </div>
      </div>
    </div>
  );
};
