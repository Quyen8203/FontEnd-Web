import { useEffect, useState } from "react";
import Banner from "../../component/Banner";
import MovieSelection from "../../component/MovieSelection";
import EventFilm from "../../component/EventFilm";
import DuoiEvent from "../../component/DuoiEvent";

const Home = () => {
  const [movies, setMovies] = useState([]);
  
  

  useEffect(() => {
      // Gọi API khi component mount
      const fetchMovies = async () => {
        try {
          const res = await fetch("http://192.168.50.254:9091/api/movies/listMovie");
          const data = await res.json();
          // Lọc phim đang chiếu
          const nowShowingMovies = data.filter((movie) => movie.isNowShowing);
          setMovies(nowShowingMovies);
        } catch (error) {
          console.error("Lỗi khi gọi API:", error);
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
