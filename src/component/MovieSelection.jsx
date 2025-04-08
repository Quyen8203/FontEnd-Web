import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import YouTube from "react-youtube";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MovieSelection = ({ movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Thêm state để kiểm soát lớp phủ mờ

  const navigate = useNavigate(); // Hook điều hướng trang

  const goToBookingPage = (movie) => {
    navigate("/booking", { state: { movie } }); // Chuyển hướng đến trang đặt vé kèm dữ liệu phim
  };

  
  const openTrailerModal = async (movie) => {
    setSelectedMovie(movie);
    setTrailerKey(null);
    setIsModalOpen(true); // Mở modal và hiển thị lớp phủ mờ
    try {
      const url = `https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWFlNjgwMmRkMjUzOTg5NjdmMDhkNjM5MmE2MWE3NSIsIm5iZiI6MTc0MjE3ODUyNy4xNDksInN1YiI6IjY3ZDc4OGRmMTkxODY4YzU0ZmYxYjNkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HJNPpK6alr6rw1z5PmvqzzYQQTASJuuqPbXyezAXkaM",
        },
      };

      const response = await fetch(url, options);
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        const trailer = data.results.find((video) => video.type === "Trailer");
        if (trailer) {
          setTrailerKey(trailer.key);
        }
      }
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };

  const closeModal = () => {
    setSelectedMovie(null);
    setTrailerKey(null);
    setIsModalOpen(false); // Đóng modal và ẩn lớp phủ mờ
  };

  const goToMovieDetails = (movie) => {
    // TODO: Thay thế bằng logic chuyển trang chi tiết phim của bạn
    console.log("Chuyển đến trang chi tiết phim:", movie.id);
  };

  return (
    <div className="text-white px-6 py-10">
      <div className="flex justify-center">
        <h2 className="uppercase text-2xl sm:text-3xl font-bold mt-4 text-black">
          Movie Selection
        </h2>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={15}
        navigation
        pagination={false}
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="mt-6"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="group relative w-full max-w-[240px] h-[350px] mx-auto overflow-hidden rounded-lg shadow-lg cursor-pointer">
              {/* Ảnh phim (nhấn vào để xem trailer) */}
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                onClick={() => openTrailerModal(movie)} // Mở trailer khi nhấn vào ảnh
              />

              {/* Overlay hiệu ứng */}
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-80 p-2 sm:p-3 text-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <p className="text-xs sm:text-sm font-bold text-white">
                  {movie.title}
                </p>
                <div className="flex justify-center space-x-1 sm:space-x-2 mt-2">
                  <button
                    onClick={() => goToMovieDetails(movie)} // Chuyển đến trang chi tiết
                    className="bg-red-600 text-white px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold rounded-lg"
                  >
                    Xem Chi Tiết
                  </button>
                  <button className="ml-auto bg-red-600 text-white px-4 py-2 rounded"
                    onClick={()=>goToBookingPage(movie)}
                  >
                    MUA VÉ NGAY
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Lớp phủ mờ */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-2xl flex items-center justify-center z-50"></div>
      )}

      {/* Modal trailer */}
      {selectedMovie && trailerKey && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative bg-black rounded-lg border-2 border-white p-4 w-[90%] md:w-[700px]">
            {/* Nút đóng */}
            <button
              className="absolute top-3 right-3 text-white text-2xl font-bold hover:text-gray-400"
              onClick={closeModal}
            >
              ✖
            </button>

            {/* Nhúng trailer YouTube */}
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

MovieSelection.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieSelection;
