import React from "react";
import { Home, ThumbsUp, Ticket } from "lucide-react";

const MovieDetail = () => {
  
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold border-b pb-2">Nội Dung Phim</h2>
      <div className="flex flex-col lg:flex-row gap-6 mt-4">
        {/* Poster phim */}
        <div className="flex-shrink-0 w-full lg:w-1/3 max-w-xs mx-auto">
          <img
            src="https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/190x260/2e2b8cd282892c71872b9e67d2cb5039/q/u/qu_nh_p_tr_ng_-_payoff_poster_-_kc_07032025_1_.jpg"
            alt="Quỷ Nhập Tràng"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Thông tin phim */}
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-bold">QUỶ NHẬP TRÀNG</h1>
          <p className="mt-2">
            <span className="font-semibold">Đạo Diễn:</span> Pom Nguyễn
          </p>
          <p>
            <span className="font-semibold">Diễn Viên:</span> Quang Tuấn, Khả
            Như, NSƯT Phú Đôn, Văn Dũng, NSND Thanh Nam...
          </p>
          <p>
            <span className="font-semibold">Thể Loại:</span> Kinh Dị
          </p>
          <p>
            <span className="font-semibold">Khởi Chiếu:</span> 07-07-2025
          </p>
          <p>
            <span className="font-semibold">Thời Lượng:</span> 121 phút 51 giây
          </p>
          <p>
            <span className="font-semibold">Ngôn Ngữ:</span> Tiếng Việt - Phụ đề
            Tiếng Anh
          </p>
          <p>
            <span className="font-bold">Rated:</span> T18 - Phim dành cho người
            trên 18 tuổi
          </p>
          {/* Nút Like & Mua Vé */}
        </div>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <button className="flex items-center gap-1.5 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <ThumbsUp size={18} /> Like 5
        </button>
        <button className="flex ml-25 items-center gap-1.5 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
          <Ticket size={18} /> Mua Vé
        </button>
      </div>
      {/* Nội dung mô tả phim */}
      <div className="mt-6 ml-30">
        <p className="text-justify">
          Phim lấy cảm hứng từ câu chuyện có thật và "truyền thuyết kinh dị nhất
          về người chết sống lại"... Ở một ngôi làng vùng cao, cặp vợ chồng
          Quang và Như sống bằng nghề mai táng. Cuộc sống bình dị của họ bị xáo
          trộn khi phát hiện một cỗ quan tài vô chủ trên mảnh đất nhà mình. Từ
          đây, những hiện tượng kỳ lạ bắt đầu xảy ra và ám ảnh cả ngôi làng.
        </p>
      </div>
    </div>
  );
};

export default MovieDetail;
