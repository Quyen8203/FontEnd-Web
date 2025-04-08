import React from "react";
import { useNavigate } from "react-router-dom";
import { Home, ThumbsUp, Ticket } from "lucide-react";

const movies = [
  {
    id: 1,
    title: "SÁT THỦ VÔ CÙNG CỰC",
    genre: "Hài, Hành động",
    duration: "107 phút",
    releaseDate: "14-03-2025",
    img: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/190x260/2e2b8cd282892c71872b9e67d2cb5039/h/i/hit2-dub_poster-layered.jpg",
  },
  {
    id: 2,
    title: "MICKEY 17",
    genre: "Khoa học viễn tưởng",
    duration: "121 phút",
    releaseDate: "15-03-2025",
    img: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/190x260/2e2b8cd282892c71872b9e67d2cb5039/3/5/350x495-mickey.jpg",
  },
  {
    id: 3,
    title: "QUỶ NHẬP TRÀNG",
    genre: "Kinh dị",
    duration: "110 phút",
    releaseDate: "14-03-2025",
    img: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/190x260/2e2b8cd282892c71872b9e67d2cb5039/q/u/qu_nh_p_tr_ng_-_payoff_poster_-_kc_07032025_1_.jpg",
  },
  {
    id: 4,
    title: "ANH KHÔNG ĐAU",
    genre: "Hài, Hành Động",
    duration: "104 phút",
    releaseDate: "14-03-2025",
    img: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/190x260/2e2b8cd282892c71872b9e67d2cb5039/n/v/nvc_safeglass_470x700.jpg",
  },
  {
    id: 5,
    title: "LẠC TRÔI",
    genre: "Hoạt hình, Phiêu lưu",
    duration: "98 phút",
    releaseDate: "16-03-2025",
    img: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/190x260/2e2b8cd282892c71872b9e67d2cb5039/d/i/digitalkv.jpg",
  },
  {
    id: 6,
    title: "NHÀ CÓ TIÊN",
    genre: "Hài, Gia đình",
    duration: "113 phút",
    releaseDate: "17-03-2025",
    img: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/190x260/2e2b8cd282892c71872b9e67d2cb5039/p/a/payoff_poster_ngt_master_sneak-2_1_.jpg",
  },
  {
    id: 7,
    title: "MOBILE SUIT GUNDAM",
    genre: "Hành động, Khoa học viễn tưởng",
    duration: "117 phút",
    releaseDate: "18-03-2025",
    img: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/190x260/2e2b8cd282892c71872b9e67d2cb5039/p/o/poster_ky_nguyen_moi_1.jpg",
  },
  {
    id: 8,
    title: "EMMA VÀ VƯƠNG QUỐC THÚ",
    genre: "Hoạt hình, Phiêu lưu",
    duration: "97 phút",
    releaseDate: "19-03-2025",
    img: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/190x260/2e2b8cd282892c71872b9e67d2cb5039/p/o/poster_emma_va_vuong_quoc_ti_hon_2_1_.jpg",
  },
];

const NowShowing = () => {
  const navigate = useNavigate();

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
            key={movie.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            {/* Bọc ảnh trong div có onClick */}
            <div
              className="cursor-pointer"
              onClick={() => navigate(`/movies/${movie.id}`)}
            >
              <img
                src={movie.img}
                alt={movie.title}
                className="w-full h-100 object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg">{movie.title}</h3>
              <p className="text-gray-600 text-sm">
                <span className="font-bold">Thể loại:</span> {movie.genre}
              </p>
              <p className="text-gray-600 text-sm">
                <span className="font-bold">Thời lượng:</span> {movie.duration}
              </p>
              <p className="text-gray-600 font-semibold text-sm">
                <span className="font-bold">Khởi chiếu:</span>{" "}
                {movie.releaseDate}
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
