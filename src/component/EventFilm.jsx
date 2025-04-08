import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import hinhgianhap from "../assets/GiaNhap.png";
import happuBirthDay from "../assets/happybirthday.png";
import happyDay from "../assets/HappyDay.jpg";
import khachduoi23 from "../assets/khachduoi23.png";
import thu4vv from "../assets/thu4VV.jpg";

const events = [
  {
    img: happyDay,
    alt: "Happy Day",
  },
  {
    img: thu4vv,
    alt: "Thứ Tư Vui Vẻ",
  },
  {
    img: hinhgianhap,
    alt: "Gia Nhập Thành Viên",
  },
  {
    img: happuBirthDay,
    alt: "Birthday Gift",
  },
  {
    img: khachduoi23,
    alt: "Khách dưới 23",
  },
];

const EventFilm = () => {
  return (
    <div className="bg-[#FFFCF4]">
      <h2 className="text-3xl font-bold text-center mb-6">EVENT</h2>
      <div className="flex justify-center mb-4">
        <button className="bg-red-500 text-white px-4 py-2 rounded-full text-sm">
          Thành Viên CGV | Tin Mới & Ưu Đãi
        </button>
      </div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full"
      >
        {events.map((event, index) => (
          <SwiperSlide key={index}>
            <img
              src={event.img}
              alt={event.alt}
              className="rounded-lg shadow-lg w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EventFilm;
