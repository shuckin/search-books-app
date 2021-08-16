import { RecommendedItem } from "./RecommendedItem";
import { Swiper, SwiperSlide } from "swiper/react";

export const Recommended = ({ books, isHidden }) => {
  return !isHidden ? (
    ""
  ) : (
    <section className="w-full px-5 pt-8 lg:container">
      <div className="flex items-center justify-start w-full mb-2">
        <h4 className="text-sm text-gray-dark font-medium">Recommended</h4>
      </div>
      <div>
        <Swiper className="mySwiper" slidesPerView={1.5} spaceBetween={70}>
          {books.map((book) => {
            const {
              etag,
              id,
              volumeInfo: {
                title,
                authors,
                imageLinks: { thumbnail },
                categories,
                averageRating,
              },
            } = book;
            return (
              <SwiperSlide key={etag}>
                <RecommendedItem
                  id={id}
                  title={title}
                  img={thumbnail ? thumbnail : null}
                  author={authors}
                  category={categories}
                  rating={averageRating}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
