export const RecommendedItem = ({ img, title, author, category }) => {
  return (
    <div className="shadow-md">
      <div className="flex bg-white rounded-md p-3 h-36 w-64 ">
        <img
          src="http://books.google.com/books/content?id=F1wgqlNi8AMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
          alt=""
          width="80"
          height="auto"
        />
        <div className="flex flex-col ml-3 justify-between h-full">
          <span className="text-gray-dark font-medium text-sm">
            Algernon, Charlie, and I
          </span>
          <span className="text-gray font-medium text-sm mb-3">
            Daniel Keyes
          </span>
          <span className="text-gray text-sm">Biography & Autobiography</span>
        </div>
      </div>
    </div>
  );
};
