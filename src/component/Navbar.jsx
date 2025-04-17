import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black flex items-center justify-between px-10 py-2">
      {/* Logo */}
      <img src={Logo} alt="CGV Logo" className="h-6 cursor-pointer"
        onClick={() => navigate("/")}
      />

      {/* Menu */}
      <nav className="flex items-center space-x-6 text-white text-sm font-semibold">
        <button
          className="bg-transparent text-white cursor-pointer hover:text-red-500 transition"
          onClick={() => navigate("/now-showing")}
        >
          Phim
        </button>
        <button
          className="bg-transparent text-white cursor-pointer hover:text-red-500 transition"
          onClick={() => navigate("/user-profile")}
        >
          Thành Viên
        </button>
        <button
          className="bg-transparent text-white cursor-pointer hover:text-red-500 transition"
          onClick={() => navigate("/rapcgv")}
        >
          Rạp CGV
        </button>
        <button
          className="bg-transparent text-white cursor-pointer hover:text-red-500 transition"
          onClick={() => navigate("")}
        >
          Nhom 23 chiều thứ 4
        </button>
      </nav>

      {/* Đăng Nhập & Đăng Ký */}
      <div className="flex items-center space-x-4 text-sm">
        <button
          className="text-white bg-transparent hover:text-red-500 transition"
          onClick={() => navigate("/login")}
        >
          Đăng Nhập
        </button>
        <button
          className="text-white bg-transparent hover:text-red-500 transition"
          onClick={() => navigate("/signin")}
        >
          Đăng Kí
        </button>
      </div>
    </div>
  );
};

export default Header;
