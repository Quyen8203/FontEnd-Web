import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import "../App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "../component/Navbar";
import Home from "../pages/Home/index";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Login from "../pages/Home/Login";
import SignIn from "../pages/Home/SignIn";
import DuoiEvent from "../component/DuoiEvent";
import CinemaBooking from "../pages/Home/CinemaBooking";
import NowShowing from "../pages/Home/NowShowing";
import MovieDetail from "../pages/Home/MovieDetail";
import UserProfile from "../pages/Home/UserProfile";
import SeatSelection from "../pages/Home/SeatSelection";
import ComboSelection from "../pages/Home/ComboSelection";
import Admin from "../pages/Home/Admin";
import MovieSelection from "../component/MovieSelection";   

const App = () => {
  const [movies, setMovies] = useState(null);  // Hàm setter là setMovies

  useEffect(() => {
    const fetchMovie = async () => {
    try {
      const res = await fetch("http://localhost:9091/movies/list");
      const data = await res.json();
      console.log("data:", data); // kiểm tra output

      if (Array.isArray(data.data)) {
        setMovies(data.data); // ✅ Lấy đúng mảng phim
      } else {
        console.error("Dữ liệu không hợp lệ:", data);
      }
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
    }// Sử dụng setMovies thay vì setMovie
    };
    
    fetchMovie();
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen w-4/5 mx-auto">
        <Navbar />
        <Header />

        <section className="flex-grow container mx-auto">
          <Routes>
            <Route path="/" element={<Home movies={movies} />} />{" "}
            {/* ✅ Truyền movies */}
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/booking" element={<CinemaBooking />} />
            <Route path="/now-showing" element={<NowShowing />} />
            <Route path="/movies/:id" element={<MovieDetail />} /> {/* Quan trọng */}
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/seat-selection" element={<SeatSelection />} />
            <Route path="/combo-selection" element={<ComboSelection />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
          <DuoiEvent />
        </section>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
