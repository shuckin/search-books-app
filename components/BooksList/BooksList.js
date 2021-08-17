import { BooksItem } from "./BooksItem";

export const BooksList = ({ books }) => {
  return (
    <section className="w-full px-5 pt-8 lg:container">
      <div className="flex items-center justify-between w-full mb-2">
        <h4 className="text-sm text-gray-dark font-medium">Result</h4>
        <div className="text-sm text-gray-dark font-medium"></div>
      </div>
      <div className="grid lg:grid-rows-4 lg:grid-cols-4 md:grid-rows-2 md:grid-cols-2 md:gap-3 lg:gap-7">
        {books.map((book) => {
          const {
            etag,
            id,
            volumeInfo: {
              title,
              authors,
              imageLinks,
              categories,
              averageRating,
            },
          } = book;

          return (
            <BooksItem
              key={etag}
              id={id}
              title={title}
              img={
                imageLinks
                  ? imageLinks.thumbnail
                  : "https://via.placeholder.com/"
              }
              author={authors}
              category={categories}
              rating={averageRating}
            />
          );
        })}
      </div>
    </section>
  );
};
