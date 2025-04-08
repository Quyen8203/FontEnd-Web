import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SignUp = () => {
  const [birthDate, setBirthDate] = useState(null);

  return (
    <div className="flex justify-center items-center min-h-screen bg-white mb-3 mt-3">
      <div className="bg-white shadow-lg rounded-lg p-10 w-[850px]">
        <h2 className="text-center text-lg font-bold bg-red-600 text-white py-3 rounded">
          Đăng Kí
        </h2>

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
          <label className="block text-sm font-medium">Ngày Sinh :</label>
          <DatePicker
            selected={birthDate}
            onChange={(date) => setBirthDate(date)}
            dateFormat="dd/MM/yyyy"
            className="w-full border border-gray-300 p-3 rounded mt-1"
            placeholderText="Chọn ngày sinh..."
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
          <label className="block text-sm font-medium">Rạp Bạn Yêu Thích :</label>
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

        <div className="mt-4 text-sm">
          <div className="flex items-start space-x-2">
            <input type="checkbox" className="mt-1" />
            <span>
              Bằng việc bấm nút "Đăng Ký" bên dưới, tôi đồng ý cho hệ thống CGV Việt Nam thu thập và xử lý dữ liệu cá nhân để phục vụ mục đích sử dụng dịch vụ theo Chính Sách Bảo Mật.
            </span>
          </div>
          <div className="flex items-start space-x-2">
            <input type="checkbox" className="mt-1" />
            <span>
              Thông tin cá nhân cung cấp tại đây là chính xác và trùng khớp với thông tin tại CMND/CCCD/Thẻ Căn cước và/hoặc Giấy khai sinh (Giấy tờ tùy thân). Email cung cấp tại đây là chính xác và thuộc quyền quản lý duy nhất của tôi.
            </span>
          </div>
          <div className="flex items-start space-x-2">
            <input type="checkbox" className="mt-1" />
            <span>
              Xác nhận email chính xác và ngày sinh khớp với thông tin trên CMND/CCCD. Nếu không trùng khớp, các thông tin này sẽ không được hỗ trợ cập nhật thay đổi và có thể không được hưởng các quyền lợi thành viên.
            </span>
          </div>
          <div className="flex items-start space-x-2 mt-2">
            <input type="checkbox" className="mt-1" />
            <span>Tôi đồng ý với Điều Khoản Sử Dụng Của CGV.</span>
          </div>
        </div>

        <button className="w-full bg-red-600 text-white py-3 rounded mt-4 text-lg font-bold hover:bg-red-700">
          Đăng Kí
        </button>
      </div>
    </div>
  );
};

export default SignUp;
