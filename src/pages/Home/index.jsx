import { useEffect } from "react";
import Banner from "../../component/Banner";
import MovieSelection from "../../component/MovieSelection";
import EventFilm from "../../component/EventFilm";
import DuoiEvent from "../../component/DuoiEvent";

const Home = ({ movies }) => {
  useEffect(() => {
    console.log("Movies:", movies);
  }, [movies]);

  if (!movies) {
    return <div>Đang tải dữ liệu phim...</div>;
  }

  const nowShowing = movies.filter((movie) => movie.isNowShowing);

  return (
    <div>
      <Banner />
      
      {/* ✅ Truyền dữ liệu phim vào MovieSelection */}
      <MovieSelection movies={nowShowing} />
      
      <EventFilm />
      <DuoiEvent />
    </div>
  );
};

export default Home;
