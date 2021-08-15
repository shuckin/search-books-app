import { RecommendedItem } from "./RecommendedItem";
import { Swiper, SwiperSlide } from "swiper/react";

export const Recommended = () => {
  return (
    <section className="w-full px-5 pt-8">
      <div className="flex items-center justify-start w-full mb-2">
        <h4 className="text-sm text-gray-dark font-medium">Recommended</h4>
      </div>
      <div>
        <Swiper className="mySwiper" slidesPerView={1.5} spaceBetween={70}>
          <SwiperSlide>
            <RecommendedItem />
          </SwiperSlide>
          <SwiperSlide>
            <RecommendedItem />
          </SwiperSlide>
          <SwiperSlide>
            <RecommendedItem />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
