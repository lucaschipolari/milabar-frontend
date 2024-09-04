import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./swiperStyle.css";

import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import chambuchito from "../../assets/chambuchito.jpg"

const SwiperContact = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        Navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="customSwiper"
      >
        <SwiperSlide className="customSwiperSlide">
          <img src={chambuchito} className="customSwiperImage"/>
        </SwiperSlide>
        <SwiperSlide >
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" className="customSwiperImage"/>
        </SwiperSlide>
        <SwiperSlide className="customSwiperSlide">
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" className="customSwiperImage"/>
        </SwiperSlide>
        <SwiperSlide className="customSwiperSlide">
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" className="customSwiperImage"/>
        </SwiperSlide>
        <div className="customOverlay">
          <h1 className="text-white fs-1 fw-bold">CONTACTO</h1>
        </div>
      </Swiper>
    </>
  );
};
export default SwiperContact;
