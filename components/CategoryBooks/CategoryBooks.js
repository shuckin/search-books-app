import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/router";

export default function CategoryBooks({ isHidden, books }) {
  const router = useRouter();
  return !isHidden ? (
    ""
  ) : (
    <section className="w-full px-5 pt-8 lg:container">
      <Swiper className="mySwiper" slidesPerView={2}>
        {books.map((book) => {
          const {
            etag,
            id,
            volumeInfo: { categories },
          } = book;
          return (
            <SwiperSlide key={etag}>
              <div
                className="w-36 h-20 lg:w-48  bg-primary rounded-md shadow-xl flex items-center justify-center text-white font-medium text-center outline-none"
                value={categories}
                onClick={() => router.push(`/category/${id}`)}
              >
                {categories}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
