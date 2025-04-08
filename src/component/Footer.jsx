import React from "react";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import hinhgach from "../assets/brick-pattern.jpeg";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-300 py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black text-sm">
          {/* Cột 1 */}
          <div>
            <h3 className="font-bold mb-3">CGV Việt Nam</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Dành Cho Đối Tác</li>
              <li>Thẻ Quà Tặng</li>
              <li>Tuyển Dụng</li>
              <li>Giới Thiệu</li>
              <li>Tiện Ích Online</li>
            </ul>
          </div>

          {/* Cột 2 */}
          <div>
            <h3 className="font-bold mb-3">Điều Khoản Sử Dụng</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Điều Khoản Giao Dịch</li>
              <li>Chính Sách Thanh Toán</li>
              <li>Chính Sách Bảo Mật</li>
              <li>Câu Hỏi Thường Gặp</li>
            </ul>
          </div>

          {/* Cột 3 */}
          <div>
            <h3 className="font-bold mb-3">Chăm Sóc Khách Hàng</h3>
            <p className="text-gray-700">Hotline: 1900 6017</p>
            <p className="text-gray-700">
              Giờ làm việc: 8:00 - 22:00 (Tất cả các ngày bao gồm cả Lễ Tết)
            </p>
            <p className="text-gray-700">
              Email hỗ trợ:{" "}
              <a href="mailto:hoidap@cgv.vn" className="text-blue-500">
                hoidap@cgv.vn
              </a>
            </p>
            {/* Mạng xã hội */}
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-blue-600 text-xl">
                <FaFacebookF />
              </a>
              <a href="#" className="text-red-500 text-xl">
                <FaYoutube />
              </a>
              <a href="#" className="text-pink-500 text-xl">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Hình nền gạch */}
      <div className="mt-6">
        <img
          src={hinhgach}
          alt="Brick Background"
          className="w-full h-24 object-cover"
        />
      </div>
    </footer>
  );
};

export default Footer;
