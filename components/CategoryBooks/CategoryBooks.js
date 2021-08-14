import { Swiper, SwiperSlide } from "swiper/react";
import { UilApple, UilAndroid, UilAmazon } from "@iconscout/react-unicons";

export default function CategoryBooks() {
  return (
    <section className="w-full px-5 pt-8">
      <Swiper className="mySwiper" slidesPerView={3}>
        <SwiperSlide>
          <div className="w-24 h-24 bg-primary rounded-md shadow-xl flex flex-col items-center justify-center text-white mr-3">
            <div>
              <UilApple className="w-14 h-14" />
            </div>
            <div className="font-medium">Apple</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-24 h-24 bg-primary rounded-md shadow-xl flex flex-col items-center justify-center text-white mr-3">
            <div>
              <UilAndroid className="w-14 h-14" />
            </div>
            <div className="font-medium">Apple</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-24 h-24 bg-primary rounded-md shadow-xl flex flex-col items-center justify-center text-white mr-3">
            <div>
              <UilAmazon className="w-14 h-14" />
            </div>
            <div className="font-medium">Apple</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-24 h-24 bg-primary rounded-md shadow-xl flex flex-col items-center justify-center text-white mr-3">
            <div>
              <UilApple className="w-14 h-14" />
            </div>
            <div className="font-medium">Apple</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
