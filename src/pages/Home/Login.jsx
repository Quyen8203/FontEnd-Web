import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [taiKhoan, setTaiKhoan] = useState("");
  const [matKhau, setMatKhau] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://192.168.1.21:9091/user/login", { 
        email: taiKhoan, 
        password: matKhau 
      });

      const token = response.data.token;
      const userEmail = taiKhoan;

      if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("userEmail", userEmail);
        alert("Đăng nhập thành công!");
        navigate("/user-profile"); // Redirect to home or any other page
      } else {
        alert("Sai tài khoản hoặc mật khẩu!");
      }
    } catch (error) {
      alert("Đăng nhập thất bại!");
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="bg-white shadow-lg rounded-lg p-8 w-[850px]">
        {/* Tabs Đăng Nhập */}
        <div className="flex border-b">
          <button
            className="flex-1 py-2 text-center font-bold bg-red-600 text-white"
          >
            Đăng Nhập
          </button>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium mb-1">Tài Khoản:</label>
          <input
            type="text"
            value={taiKhoan}
            onChange={(e) => setTaiKhoan(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Nhập tài khoản..."
          />

          <label className="block text-sm font-medium mt-4 mb-1">Mật Khẩu:</label>
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
      </div>
    </div>
  );
};

export default Login;
