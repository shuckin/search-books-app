export const Recommended = () => {
  return (
    <section className="w-full px-5 pt-8">
      <div className="flex items-center justify-start w-full mb-2">
        <h4 className="text-sm text-gray-dark font-medium">Recommended</h4>
      </div>
      <div>
        <div>
          <div className="flex bg-white rounded-md p-3 h-36 w-72">
            <img
              src="http://books.google.com/books/content?id=F1wgqlNi8AMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
              alt=""
            />
            <div className="flex flex-col ml-3 justify-between h-full">
              <span className="text-gray-dark font-medium text-sm">
                Algernon, Charlie, and I
              </span>
              <span className="text-gray font-medium text-sm mb-3">
                Daniel Keyes
              </span>
              <span className="text-gray text-sm">
                Biography & Autobiography
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
