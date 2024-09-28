import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./swiperStyle.css";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import banner from "../../assets/bannerContacto.png";
import bannerredes from "../../assets/bannerRedes2.png";

const SwiperContact = () => {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        effect={"fade"}
        
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="customSwiper"
      >
        <SwiperSlide className="customSwiperSlide">
          <img src={banner} className="customSwiperImage" />
        </SwiperSlide>
        <SwiperSlide className="customSwiperSlide">
          <img
            src={bannerredes}
            className="customSwiperImage"
          />
        </SwiperSlide>

      </Swiper>
    </>
  );
};
export default SwiperContact;
