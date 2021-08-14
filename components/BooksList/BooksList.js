import { BooksItem } from "./BooksItem";

export const BooksList = () => {
  return (
    <section className="w-full px-5 pt-8">
      <div className="flex items-center justify-start w-full mb-2">
        <h4 className="text-sm text-gray-dark font-medium">Result</h4>
      </div>
      <div>
        <BooksItem />
        <BooksItem />
        <BooksItem />
        
      </div>
    </section>
  );
};
