import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");
  const [dob, setDob] = useState(null);

  // 👉 Thêm state cho tài khoản và mật khẩu
  const [taiKhoan, setTaiKhoan] = useState("");
  const [matKhau, setMatKhau] = useState("");

  const handleLogin = () => {
    if (taiKhoan === "admin") {
      navigate("/admin");
    } else if (taiKhoan === "nhanvien") {
      navigate("/user-profile");
    } else {
      alert("Tài khoản không hợp lệ!");
    }
  };

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
        </div>

        {activeTab === "login" ? (
          <div className="mt-6">
            <label className="block text-sm font-medium mb-1">
              Tài Khoản :
            </label>
            <input
              type="text"
              value={taiKhoan}
              onChange={(e) => setTaiKhoan(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Nhập tài khoản..."
            />

            <label className="block text-sm font-medium mt-4 mb-1">
              Mật Khẩu :
            </label>
            <input
              type="password"
              value={matKhau}
              onChange={(e) => setMatKhau(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Mật khẩu..."
            />

            <button
              className="w-full bg-red-600 text-white py-2 rounded mt-4 hover:bg-red-700"
              onClick={handleLogin}
            >
              Đăng Nhập
            </button>

            <p className="text-center text-sm mt-2 text-gray-600">
              Bạn muốn tìm lại mật khẩu?
            </p>
          </div>
        ) : (
          <div className="flex justify-center items-center min-h-screen bg-white mb-3 mt-3">
            <div className="bg-white shadow-lg rounded-lg p-10 w-[850]">
              {/* Form đăng ký nếu bạn muốn thêm sau */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
