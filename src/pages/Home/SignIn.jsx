import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const SignUp = () => {
  const [birthDate, setBirthDate] = useState(null);
  const [form, setForm] = useState({
    username: "",
    password: "",
    user_fullname: "",
    user_email: "",
    user_phone: "",
    user_gender: true,
    user_address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleGenderChange = (value) => {
    setForm((prev) => ({ ...prev, user_gender: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        ...form,
        user_birthday: birthDate ? birthDate.toISOString() : null,
      };

      const response = await axios.post("http://192.168.1.21:9091/user/create", payload);

      if (response.data.status === "CREATED") {
        alert("Đăng ký thành công!");
        navigate("/login");
      } else {
        alert("Đăng ký thất bại!");
      }
    } catch (error) {
      alert("Mời qua kia đăng nhập.");
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white mb-3 mt-3">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-10 w-[850px]"
      >
        <h2 className="text-center text-lg font-bold bg-red-600 text-white py-3 rounded">
          Đăng Kí
        </h2>

        <div className="mt-6">
          <label className="block text-sm font-medium">Tên :</label>
          <input
            name="user_fullname"
            type="text"
            className="w-full border border-gray-300 p-3 rounded mt-1"
            placeholder="Nhập tên..."
            value={form.user_fullname}
            onChange={handleChange}
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium">Số Điện Thoại :</label>
          <input
            name="user_phone"
            type="text"
            className="w-full border border-gray-300 p-3 rounded mt-1"
            placeholder="Nhập số điện thoại..."
            value={form.user_phone}
            onChange={handleChange}
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium">Email :</label>
          <input
            name="user_email"
            type="email"
            className="w-full border border-gray-300 p-3 rounded mt-1"
            placeholder="Nhập email..."
            value={form.user_email}
            onChange={handleChange}
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium">Tài Khoản :</label>
          <input
            name="username"
            type="text"
            className="w-full border border-gray-300 p-3 rounded mt-1"
            placeholder="Nhập tài khoản..."
            value={form.username}
            onChange={handleChange}
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium">Mật Khẩu :</label>
          <input
            name="password"
            type="password"
            className="w-full border border-gray-300 p-3 rounded mt-1"
            placeholder="Nhập mật khẩu..."
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium">Địa chỉ :</label>
          <input
            name="user_address"
            type="text"
            className="w-full border border-gray-300 p-3 rounded mt-1"
            placeholder="Nhập địa chỉ..."
            value={form.user_address}
            onChange={handleChange}
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
              <input
                type="radio"
                name="gender"
                className="mr-2"
                checked={form.user_gender === true}
                onChange={() => handleGenderChange(true)}
              />{" "}
              Nam
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                className="mr-2"
                checked={form.user_gender === false}
                onChange={() => handleGenderChange(false)}
              />{" "}
              Nữ
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 text-white py-3 rounded mt-4 text-lg font-bold hover:bg-red-700"
        >
          Đăng Kí
        </button>
      </form>
    </div>
  );
};

export default SignUp;
