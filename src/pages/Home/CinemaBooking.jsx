import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const cinemas = {
  "Hồ Chí Minh": [
    { name: "CGV Satra Củ Chi", times: ["17:10 PM", "18:10 PM", "19:00 PM", "19:30 PM", "20:30 PM"] },
    { name: "CGV Pandora City", times: ["17:15 PM", "19:45 PM", "22:10 PM"] },
    { name: "CGV Liberty Citypoint", times: ["17:10 PM", "18:10 PM", "19:00 PM", "19:30 PM", "20:30 PM"] },
    { name: "CGV Aeon Bình Tân", times: ["17:20 PM", "18:20 PM", "19:40 PM", "20:20 PM", "22:00 PM"] }
  ],
  "Hà Nội": [
    { name: "CGV Satra Cầu Láng", times: ["17:10 PM", "18:10 PM", "19:00 PM", "19:30 PM", "20:30 PM"] },
    { name: "CGV Pandora City Hà Nội", times: ["17:30 PM", "19:45 PM", "22:10 PM"] },
    { name: "CGV Liberty Citypoint Chùa 1 cột", times: ["17:10 PM", "18:10 PM", "19:00 PM", "19:30 PM", "20:30 PM"] },
    { name: "CGV Aeon Hàng Mã", times: ["17:20 PM", "18:20 PM", "19:40 PM", "20:20 PM", "22:00 PM"] }
  ],
};

const dates = Array.from({ length: 31 }, (_, i) => ({
  day: i + 1,
  weekDay: new Date(2025, 2, i + 1).toLocaleDateString("en-US", { weekday: "short" }),
}));

export default function CinemaBooking() {
  const location = useLocation();
  const navigate = useNavigate();
  const movie = location.state?.movie;
  const [selectedCity, setSelectedCity] = useState("Hồ Chí Minh");
  const [selectedDate, setSelectedDate] = useState(dates[0].day);
  
  // Lưu suất chiếu dưới dạng object { cinema: "Tên rạp", time: "Giờ chiếu" }
  const [selectedTime, setSelectedTime] = useState(null);

  const handleBooking = () => {
    if (selectedTime) {
      navigate("/seat-selection", { state: { movie, selectedTime } });
    } else {
      alert("Vui lòng chọn suất chiếu trước khi đặt vé.");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center">
        Đặt vé cho phim: {movie?.title || "Không có dữ liệu"}
      </h1>
      
      {/* Nút Đặt Vé */}
      <button
        className="w-70 mx-auto block bg-red-600 text-white py-3 rounded mt-4 text-lg font-bold hover:bg-red-700"
        onClick={handleBooking}
      >
        Đặt vé
      </button>

      {/* Chọn ngày */}
      <div className="grid grid-cols-7 gap-2 text-center border p-4">
        {dates.map((date) => (
          <button
            key={date.day}
            className={`p-2 border rounded ${selectedDate === date.day ? "bg-red-500 text-white" : "bg-gray-100"}`}
            onClick={() => setSelectedDate(date.day)}
          >
            {date.weekDay} <br /> {date.day}
          </button>
        ))}
      </div>

      {/* Chọn khu vực */}
      <div className="mt-4">
        <label className="block font-semibold">Chọn Khu Vực:</label>
        <select
          className="border p-2 rounded w-full mt-2"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          {Object.keys(cinemas).map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>

      {/* Danh sách rạp */}
      <div className="mt-4">
        <h2 className="font-semibold">Danh sách rạp:</h2>
        {cinemas[selectedCity].map((cinema) => (
          <div key={cinema.name} className="mt-4 border p-2 rounded">
            <h3 className="font-bold">{cinema.name}</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {cinema.times.map((time) => {
                const isSelected = selectedTime?.cinema === cinema.name && selectedTime?.time === time;
                return (
                  <button
                    key={time}
                    className={`px-3 py-1 border rounded ${
                      isSelected ? "bg-red-500 text-white" : "bg-gray-200 hover:bg-red-500 hover:text-white"
                    }`}
                    onClick={() => setSelectedTime({ cinema: cinema.name, time })}
                  >
                    {time}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
