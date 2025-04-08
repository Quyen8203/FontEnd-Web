import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Login = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [dob,setDob]=useState(null);
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="bg-bg-white shadow-lg rounded-lg p-8 w-[850px]">
        {/* Tabs Đăng Nhập | Đăng Kí */}
        <div className="flex border-b">
          <button
            className={`flex-1 py-2 text-center font-bold ${
              activeTab === "login"
                ? "bg-red-600 text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setActiveTab("login")}
          >
            Đăng Nhập
          </button>
          <button
            className={`flex-1 py-2 text-center font-bold ${
              activeTab === "signup"
                ? "bg-red-600 text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setActiveTab("signup")}
          >
            Đăng Kí
          </button>
        </div>

        {activeTab === "login" ? (
          <div className="mt-6">
            <label className="block text-sm font-medium mb-1">
              Email hoặc Số Điện Thoại :
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Email hoặc số điện thoại..."
            />

            <label className="block text-sm font-medium mt-4 mb-1">
              Mật Khẩu :
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Mật Khẩu"
            />

            <button className="w-full bg-red-600 text-white py-2 rounded mt-4 hover:bg-red-700">
              Đăng Nhập
            </button>

            <p className="text-center text-sm mt-2 text-gray-600">
              Bạn muốn tìm lại mật khẩu?
            </p>
          </div>

        ) : (
          <div className="flex justify-center items-center min-h-screen bg-white mb-3 mt-3">
      <div className="bg-white shadow-lg rounded-lg p-10 w-[850]">
      
        {/* Form đăng ký */}
        <div className="mt-6">
          <label className="block text-sm font-medium">Tên :</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-3 rounded mt-1"
            placeholder="Nhập tên..."
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium">Số Điện Thoại :</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-3 rounded mt-1"
            placeholder="Nhập số điện thoại..."
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium">Email :</label>
          <input
            type="email"
            className="w-full border border-gray-300 p-3 rounded mt-1"
            placeholder="Nhập email..."
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium">Mật Khẩu :</label>
          <input
            type="password"
            className="w-full border border-gray-300 p-3 rounded mt-1"
            placeholder="Nhập mật khẩu..."
          />
        </div>

        <div className="mt-4">
              <label className="block text-sm font-medium">Ngày Sinh:</label>
              <DatePicker
                selected={dob}
                onChange={(date) => setDob(date)}
                dateFormat="dd/MM/yyyy"
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={100}
                maxDate={new Date()} // Không cho chọn ngày trong tương lai
                className="w-full border border-gray-300 p-3 rounded mt-1"
                placeholderText="Chọn ngày sinh"
              />
            </div>

        <div className="mt-4">
          <label className="block text-sm font-medium">Giới Tính :</label>
          <div className="flex space-x-6 mt-2">
            <label className="flex items-center">
              <input type="radio" name="gender" className="mr-2" /> Nam
            </label>
            <label className="flex items-center">
              <input type="radio" name="gender" className="mr-2" /> Nữ
            </label>
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium">
            Rạp Bạn Yêu Thích :
          </label>
          <select className="w-full border border-gray-300 p-3 rounded mt-1">
            <option>Chọn rạp</option>
          </select>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium">Khu Vực :</label>
          <select className="w-full border border-gray-300 p-3 rounded mt-1">
            <option>Chọn khu vực</option>
          </select>
        </div>

        {/* Checkbox xác nhận */}
        <div className="mt-4 text-sm">
          <div className="flex items-start space-x-2">
            <input type="checkbox" className="mt-1" />
            <span>
              Bằng việc bấm nút "Đăng Ký" bên dưới, tôi đồng ý cho hệ thống CGV
              Việt Nam thu thập và xử lý dữ liệu cá nhân để phục vụ mục đích sử
              dụng dịch vụ theo Chính Sách Bảo Mật.
            </span>
          </div>
          <div className="flex items-start space-x-2">
            <input type="checkbox" className="mt-1" />
            <span>
              Thông tin cá nhân cung cấp tại đây là chính xác và trùng khớp với
              thông tin tại CMND/CCCD/Thẻ Căn cước và/hoặc Giấy khai sinh (Giấy
              tờ tùy thân). Email cung cấp tại đây là chính xác và thuộc quyền
              quản lý duy nhất của tôi.
            </span>
          </div>
          <div className="flex items-start space-x-2">
            <input type="checkbox" className="mt-1" />
            <span>
              Xác nhận email chính xác và ngày sinh khớp với thông tin trên
              CMND/CCCD. Nếu không trùng khớp, các thông tin này sẽ không được
              hỗ trợ cập nhật thay đổi và có thể không được hưởng các quyền lợi
              thành viên.
            </span>
          </div>
          <div className="flex items-start space-x-2 mt-2">
            <input type="checkbox" className="mt-1" />
            <span>Tôi đồng ý với Điều Khoản Sử Dụng Của CGV.</span>
          </div>
        </div>

        {/* Nút đăng ký */}
        <button className="w-full bg-red-600 text-white py-3 rounded mt-4 text-lg font-bold hover:bg-red-700">
          Đăng Kí
        </button>
      </div>
    </div>
        )}
      </div>
    </div>
  );
};

export default Login;
