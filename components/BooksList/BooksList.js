import { BooksItem } from "./BooksItem";

export const BooksList = (props) => {
  return (
    <section className="w-full px-5 pt-8">
      <div className="flex items-center justify-between w-full mb-2">
        <h4 className="text-sm text-gray-dark font-medium">Result</h4>
        <div className="text-sm text-gray-dark font-medium"></div>
      </div>
      <div>
        {props.books.map((book) => (
          <BooksItem
            key={book.etag}
            id={book.id}
            title={book.volumeInfo.title}
            img={book.volumeInfo.imageLinks.smallThumbnail}
            author={book.volumeInfo.authors}
            category={book.volumeInfo.categories}
          />
        ))}
      </div>
    </section>
  );
};
