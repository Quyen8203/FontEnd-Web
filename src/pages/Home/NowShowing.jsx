import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Home, ThumbsUp, Ticket } from "lucide-react";

const NowShowing = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

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
    <div className="container mx-auto p-4">
      {/* Breadcrumb */}
      <div className="bg-gray-200 px-4 py-2 rounded-md flex items-center space-x-2">
        <Home size={18} />
        <span> &gt; Phim &gt; </span>
        <span className="font-bold">Phim đang chiếu</span>
      </div>

      <h2 className="text-2xl font-bold text-center my-6">Phim Đang Chiếu</h2>

      {/* Grid danh sách phim */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.movieId}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            {/* Bọc ảnh trong div có onClick */}
            <div
              className="cursor-pointer"
              onClick={() => navigate(`/movies/${movie.movieId}`)}
            >
              <img
                src={movie.posterUrl}
                alt={movie.title}
                className="w-full h-100 object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg">{movie.title}</h3>
              <p className="text-gray-600 text-sm">
                <span className="font-bold">Thời lượng:</span> {movie.duration} phút
              </p>
              <p className="text-gray-600 font-semibold text-sm">
                <span className="font-bold">Khởi chiếu:</span> {movie.releaseDate}
              </p>
              {/* Like & Mua Vé */}
              <div className="flex justify-center items-center gap-3 mt-3">
                <button className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                  <ThumbsUp size={18} /> Like 5
                </button>
                <button className="flex items-center gap-1 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                  <Ticket size={18} />
                  MUA VÉ
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NowShowing;
