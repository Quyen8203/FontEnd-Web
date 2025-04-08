import { useEffect, useState } from "react";
import Banner from "../../component/Banner";
import MovieSelection from "../../component/MovieSelection";
import EventFilm from "../../component/EventFilm";
import DuoiEvent from "../../component/DuoiEvent";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`, // Dùng API Key từ env
            },
          }
        );

        const data = await response.json();
        setMovies(data.results || []); // Cập nhật danh sách phim
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu phim:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <Banner />
      <MovieSelection movies={movies} />{" "}
      {/* Truyền movies vào MovieSelection */}
      <EventFilm />
      
    </div>
  );
};

export default Home;
