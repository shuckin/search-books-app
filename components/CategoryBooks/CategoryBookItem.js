import { Swiper, SwiperSlide } from "swiper/react";
import { UilApple, UilAndroid, UilAmazon } from "@iconscout/react-unicons";
import "swiper/swiper.min.css";

export const CategoryBookItem = () => {
  return (
    <SwiperSlide>
      <div className="w-24 h-24 bg-primary rounded-md shadow-xl flex flex-col items-center justify-center text-white mr-3">
        <div>
          <UilApple className="w-14 h-14" />
        </div>
        <div className="font-medium">Apple</div>
      </div>
    </SwiperSlide>
  );
};
