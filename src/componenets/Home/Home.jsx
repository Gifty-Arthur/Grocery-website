import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

// images
import hero2 from "../../assets/Hero/hero2.png";
import hero3 from "../../assets/Hero/hero3.png";
import hero1 from "../../assets/Hero/hero1.png";

function Home() {
  const progressCircle = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
  };

  // Static text content from hero1
  const staticText = {
    title: "Hero 1 Title",
    description: "Hero 1 Description",
  };

  return (
    <div className="container pt-[10rem] mt-10 h-[720px] relative">
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
        loop={true}
        modules={[Autoplay, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex items-center justify-between h-full">
            <img
              className="w-1/2 h-full object-cover"
              src={hero3}
              alt="Hero 3"
            />
            <div className="w-1/2 p-10 text-left">
              <h1 className="text-3xl font-bold">{staticText.title}</h1>
              <p className="mt-4 text-lg">{staticText.description}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-between h-full">
            <img
              className="w-1/2 h-full object-cover"
              src={hero1}
              alt="Hero 1"
            />
            <div className="w-1/2 p-10 text-left">
              <h1 className="text-3xl font-bold">{staticText.title}</h1>
              <p className="mt-4 text-lg">{staticText.description}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-between h-full">
            <img
              className="w-1/2 h-full object-cover"
              src={hero2}
              alt="Hero 2"
            />
            <div className="w-1/2 p-10 text-left">
              <h1 className="text-3xl font-bold">{staticText.title}</h1>
              <p className="mt-4 text-lg">{staticText.description}</p>
            </div>
          </div>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}></svg>
        </div>
      </Swiper>
    </div>
  );
}

export default Home;
