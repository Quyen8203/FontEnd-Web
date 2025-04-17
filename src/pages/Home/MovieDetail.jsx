import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ThumbsUp, Ticket } from "lucide-react";

const MovieDetail = () => {
  const { id } = useParams(); // lấy id từ URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const res = await fetch(`http://localhost:9091/movies/${id}`);
        const data = await res.json();
        setMovie(data.data);
      } catch (error) {
        console.error("Lỗi khi gọi API:", error);
      }
    };

    fetchMovieDetail();
  }, [id]);

  if (!movie) {
    return <div className="text-center py-10">Đang tải thông tin phim...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center border-b pb-4 mb-6">
        {movie.movieName}
      </h2>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Poster phim */}
        <div className="lg:w-1/3 flex justify-center">
          <img
            src={movie.moviePoster}
            alt={movie.movieName}
            className="rounded-xl shadow-lg w-full max-w-xs object-cover"
          />
        </div>

        {/* Thông tin phim */}
        <div className="lg:w-2/3 space-y-4">
          <p className="text-gray-700 text-lg">
            <span className="font-semibold">Thể loại:</span> {movie.movieGenres}
          </p>
          <p className="text-gray-700 text-lg">
            <span className="font-semibold">Thời lượng:</span> {movie.movieLength} phút
          </p>
          <p className="text-gray-700 text-lg">
            <span className="font-semibold">Ngày khởi chiếu:</span> {movie.movieRelease}
          </p>
          <div className="flex items-center gap-4 mt-6">
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              <ThumbsUp size={18} /> Like 5
            </button>
            <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
              <Ticket size={18} /> Mua Vé
            </button>
          </div>
        </div>
      </div>

      {/* Nội dung mô tả */}
      <div className="mt-10 bg-gray-100 p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Nội dung phim</h3>
        <p className="text-justify text-gray-800 leading-relaxed">
          {movie.movieDescription}
        </p>
      </div>
    </div>
  );
};

export default MovieDetail;
