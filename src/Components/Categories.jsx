import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../assets/home/slide1.jpg";
import slide2 from "../assets/home/slide2.jpg";
import slide3 from "../assets/home/slide3.jpg";
import slide4 from "../assets/home/slide4.jpg";
import slide5 from "../assets/home/slide5.jpg";
import SectionTitle from "./SectionTitle";

const Categories = () => {
  return (
    <section className="">
        <SectionTitle subHeading={"ORDER ONLINE"} heading={"---From 11:00am to 10:00pm---"}></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-20 "
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h4 className="text-4xl uppercase text-center text-white -mt-16">
            Salads
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h4 className="text-4xl uppercase text-center text-white -mt-16">
            Pizzas
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h4 className="text-4xl uppercase text-center text-white -mt-16">
            Soups
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h4 className="text-4xl uppercase text-center text-white -mt-16">
            Desserts
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h4 className="text-4xl uppercase text-center text-white -mt-16">
            Salads
          </h4>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Categories;
