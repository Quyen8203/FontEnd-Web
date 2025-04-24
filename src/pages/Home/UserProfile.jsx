import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UserProfile() {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch user info from the API after mounting the component
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const userEmail = localStorage.getItem("userEmail");  // Lấy email từ localStorage
  
        if (token && userEmail) {
          const response = await axios.get(`http://192.168.1.21:9091/user/by-email/${userEmail}`, {
            headers: { Authorization: `Bearer ${token}` }
          });
          setUserInfo(response.data.data);  // Lưu thông tin người dùng vào state
        } else {
          alert("Token không hợp lệ hoặc hết hạn!");
        }
      } catch (error) {
        console.error(error);
        alert("Không thể tải thông tin người dùng.");
      } finally {
        setLoading(false);
      }
    };
  
    fetchUserData();
  }, []);
  

  if (loading) {
    return <div>Đang tải dữ liệu...</div>;
  }

  if (!userInfo) {
    return <div>Không tìm thấy thông tin người dùng.</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center p-4 flex-wrap">
      <div className="bg-white shadow-lg rounded-lg max-w-4xl w-full flex flex-wrap">
        {/* Header */}
        <div className="bg-black text-white text-center py-3 text-lg font-bold w-full">
          THÔNG TIN CHUNG
        </div>

        {/* Profile Section */}
        <div className="p-6 flex flex-wrap lg:flex-row items-center lg:items-start w-full">
          {/* Avatar */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v1h20v-1c0-3.33-6.67-5-10-5z" />
              </svg>
            </div>
            <button
              className="mt-3 bg-red-400 text-white px-4 py-1 rounded hover:bg-yellow-500 hover:shadow-md transition duration-200"
              onClick={() => {}}
            >
              Thay đổi
            </button>
          </div>
        </div>

        {/* User Info */}
        <div className="flex-1 mt-6 lg:mt-0 lg:ml-6 w-full">
          <p className="font-bold text-lg">Xin Chào {userInfo.user_fullname},</p>
          <p className="text-gray-700">
            Với trang này bạn sẽ quản lý được tất cả thông tin tài khoản của mình.
          </p>
        </div>

        {/* Membership Info */}
        <div className="mt-4 border rounded-lg p-2 bg-gray-50 w-full">
          <div className="grid grid-cols-2 lg:grid-cols-7 text-center text-sm">
            {/* Cấp Độ Thẻ */}
            <div className="border-r p-2">
              <p className="text-gray-600">Cấp Độ Thẻ</p>
              <p className="font-semibold">{userInfo.user_point}</p>
            </div>

            {/* Tổng Chi Tiêu */}
            <div className="border-r p-2">
              <p className="text-gray-600">Tổng Chi Tiêu</p>
              <p className="font-semibold">10.000.000Đ</p>
            </div>

            {/* Điểm CGV */}
            <div className="border-r p-2">
              <p className="text-gray-600">Điểm CGV</p>
              <p className="font-semibold">{userInfo.user_point} P</p>
            </div>

            {/* Thẻ Quà Tặng */}
            <div className="border-r p-2">
              <p className="text-gray-600">Thẻ Quà Tặng</p>
              <p className="font-semibold">100.000 Đ</p>
              <button
                className="mt-3 bg-blue-400 text-white px-4 py-1 rounded hover:bg-yellow-500 hover:shadow-md transition duration-200"
                onClick={() => {}}
              >
                Xem
              </button>
            </div>

            {/* Voucher */}
            <div className="border-r p-2">
              <p className="text-gray-600">Voucher</p>
              <p className="font-semibold">5</p>
              <button
                className="mt-3 bg-blue-400 text-white px-4 py-1 rounded hover:bg-yellow-500 hover:shadow-md transition duration-200"
                onClick={() => {}}
              >
                Xem
              </button>
            </div>

            {/* Coupon */}
            <div className="border-r p-2">
              <p className="text-gray-600">Coupon</p>
              <p className="font-semibold">1</p>
              <button
                className="mt-3 bg-blue-400 text-white px-4 py-1 rounded hover:bg-yellow-500 hover:shadow-md transition duration-200"
                onClick={() => {}}
              >
                Xem
              </button>
            </div>

            {/* Thẻ Thành Viên */}
            <div className="p-2">
              <p className="text-gray-600">Thẻ Thành Viên</p>
              <p className="font-semibold">1</p>
              <button
                className="mt-3 bg-blue-400 text-white px-4 py-1 rounded hover:bg-yellow-500 hover:shadow-md transition duration-200"
                onClick={() => {}}
              >
                Xem
              </button>
            </div>
          </div>
        </div>

        {/* Account Info */}
        <div className="p-6 border-t w-full">
          <h2 className="text-lg font-semibold">Thông tin tài khoản</h2>
          <hr className="mt-4 mb-4" />
          <div className="mt-3">
            <p className="text-gray-700">
              <span className="font-semibold">Tên:</span> {userInfo.user_fullname}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Email:</span> {userInfo.user_email}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Điện Thoại:</span> {userInfo.user_phone}
            </p>
          </div>
          <button
            className="mt-3 bg-red-400 text-white px-4 py-1 rounded hover:bg-yellow-500 hover:shadow-md transition duration-200"
            onClick={() => {}}
          >
            Thay Đổi
          </button>
        </div>
      </div>
    </div>
  );
}
