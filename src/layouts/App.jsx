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

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          },
        };
        const url =
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
        const response = await fetch(url, options);
        const data = await response.json();
        setMovies(data.results || []); // Đảm bảo mảng không bị undefined
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu phim:", error);
      }
    };

    fetchMovies();
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
            <Route path="/seat-selection" element={<SeatSelection/>} />
            <Route path="/combo-selection" element={<ComboSelection/>}/>
            
          </Routes>
          <DuoiEvent />
        </section>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
