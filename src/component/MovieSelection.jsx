import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // New component for modal
import { generateMovieImageURL } from "../utils/helper"; // Helper for image URL generation
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MovieSelection = ({ movies }) => {
  const navigate = useNavigate(); // Use navigate hook

  const goToPage = (movie, path) => {
    navigate(path, { state: { movie } });
  };

  return (
    <div className="text-white px-6 py-10">
      <div className="flex justify-center">
        <h2 className="uppercase text-2xl sm:text-3xl font-bold mt-4 text-black">Movie Selection</h2>
      </div>

      <Swiper modules={[Navigation, Pagination]}
  spaceBetween={15}
  navigation
  pagination={false}
  slidesPerView={4} >
  {movies.map((movie) => (
    <SwiperSlide key={movie.movieId}>
      <div className="group relative w-full max-w-[240px] h-[350px] mx-auto overflow-hidden rounded-lg shadow-lg cursor-pointer">
        <img
          src={movie.moviePoster} // ✅ Dùng đúng trường moviePoster
          alt={movie.movieName} // ✅ Dùng đúng trường movieName
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-80 p-2 sm:p-3 text-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          <p className="text-xs sm:text-sm font-bold text-white">{movie.movieName}</p>
          <div className="flex justify-center space-x-1 sm:space-x-2 mt-2">
            <button
              onClick={() => goToPage(movie, `/movies/${movie.movieId}`)} // ✅ Dùng movieId
              className="bg-red-600 text-white px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold rounded-lg"
            >
              Xem Chi Tiết
            </button>
            <button
              onClick={() => goToPage(movie, "/booking")}
              className="ml-auto bg-red-600 text-white px-4 py-2 rounded"
            >
              MUA VÉ NGAY
            </button>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

    </div>
  );
};

MovieSelection.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieSelection;
