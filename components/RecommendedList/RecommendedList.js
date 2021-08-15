import { RecommendedItem } from "./RecommendedItem";
import { Swiper, SwiperSlide } from "swiper/react";

export const Recommended = ({ books }) => {
  return (
    <section className="w-full px-5 pt-8">
      <div className="flex items-center justify-start w-full mb-2">
        <h4 className="text-sm text-gray-dark font-medium">Recommended</h4>
      </div>
      <div>
        <Swiper className="mySwiper" slidesPerView={1.5} spaceBetween={70}>
          {books.map((book) => (
            <SwiperSlide>
              <RecommendedItem
                key={book.etag}
                id={book.id}
                img={book.volumeInfo.imageLinks.smallThumbnail}
                title={book.volumeInfo.title}
                category={book.volumeInfo.categories}
                author={book.volumeInfo.authors}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
