import React, { useRef } from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// images
import hero2 from "../../assets/Hero/hero2.png";
import hero3 from "../../assets/Hero/hero3.png";
import hero1 from "../../assets/Hero/hero1.png";
import bg from "../../assets/Hero/bg.png";

function Home() {
  const progressCircle = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
  };

  return (
    <div className="container pt-[8rem]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true} // Enable continuous loop mode
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={hero3} alt="Hero 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hero1} alt="Hero 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hero2} alt="Hero 2" />
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}></svg>
        </div>
      </Swiper>
    </div>
  );
}

export default Home;
