import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
// import xuanThien from "../assets/xt.png";
import hinh1 from "../assets/hinh1.png";
import hinh2 from "../assets/hinh2.jpg";
import hinh3 from "../assets/hinh3.png";
import hinh4 from "../assets/hinh4.jpg";
import hinh5 from "../assets/hinh5.png";
import hinh6 from "../assets/hinh6.png";
import hinh7 from "../assets/hinh7.jpg";

const Banner = () => {
  return (
    <div className=" flex justify-center mt-6 mb-6">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1}
        spaceBetween={0}
        style={{ height: "500px" }} // Chiều cao cố định
      >
        <SwiperSlide>
          <img
            src={hinh1}
            alt="img"
            className="object-cover w-full h-[500px]" // Chiều cao cố định cho hình ảnh
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={hinh2}
            alt="img"
            className="object-cover w-full h-[500px]" // Chiều cao cố định cho hình ảnh
          />
        </SwiperSlide>
        {/* Thêm các SwiperSlide khác với hình ảnh và chiều cao tương tự */}
        <SwiperSlide>
          <img
            src={hinh3}
            alt="img"
            className="object-cover w-full h-[500px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={hinh4}
            alt="img"
            className="object-cover w-full h-[500px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={hinh5}
            alt="img"
            className="object-cover w-full h-[500px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={hinh6}
            alt="img"
            className="object-cover w-full h-[500px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={hinh7}
            alt="img"
            className="object-cover w-full h-[500px]"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
