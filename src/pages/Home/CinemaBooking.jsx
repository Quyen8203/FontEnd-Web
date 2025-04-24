import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

// Tạo danh sách ngày trong tháng 5/2025
// Tạo danh sách ngày trong tháng 4/2025 (tháng 3 là tháng 4 vì JS tính từ 0)
const dates = Array.from({ length: 30 }, (_, i) => {
  const d = new Date(2025, 3, i + 1); // tháng 4 là index 3
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');

  return {
    day: d.getDate(),
    weekDay: d.toLocaleDateString("vi-VN", { weekday: "short" }),
    fullDate: `${yyyy}-${mm}-${dd}`, // Fix múi giờ
  };
});


export default function CinemaBooking() {
  const location = useLocation();
  const navigate = useNavigate();
  const movie = location.state?.movie;
  console.log("Movie:", movie);
  const [cinemas, setCinemas] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Hồ Chí Minh");
  const [selectedDate, setSelectedDate] = useState(dates[0]);
  const [selectedTime, setSelectedTime] = useState(null);

  // Gọi API lấy danh sách rạp
  useEffect(() => {
    axios.get("http://192.168.1.21:9091/cinema/list").then((res) => {
      console.log("Cinemas:", res.data.data);
      setCinemas(res.data.data || []);
    });
  }, []);

  // Gọi API lấy lịch chiếu theo từng rạp trong thành phố đã chọn
// Gọi API lấy lịch chiếu theo từng rạp trong thành phố đã chọn
useEffect(() => {
  if (!movie || cinemas.length === 0) return;

  const fetchSchedules = async () => {
    let allSchedules = [];

    // Lọc rạp theo thành phố đã chọn
    const filtered = cinemas.filter((c) => c.city === selectedCity);
    console.log("🎯 Lọc rạp theo thành phố:", selectedCity, filtered);

    // Lấy lịch chiếu cho từng rạp trong danh sách đã lọc
    for (const cinema of filtered) {
      const movieId = movie.movieId;
      const cinemaId = cinema.cinemaId;
      const date = selectedDate.fullDate;

      console.log("📡 Gọi API với:", { movieId, cinemaId, date });

      try {
        const res = await axios.get(
          `http://192.168.1.21:9091/schedule/by-movie-cinema-date?movieId=${movieId}&cinemaId=${cinemaId}&date=${date}`
        );

        console.log(`✅ Dữ liệu trả về cho rạp ${cinema.cinemaName}:`, res.data);

        const schedules = res.data.data || [];
        const enriched = schedules.map((s) => ({
          ...s,
          cinemaId: cinema.cinemaId,
        }));
        allSchedules.push(...enriched);
      } catch (error) {
        console.error(`❌ Lỗi lấy lịch cho rạp ${cinema.cinemaName}:`, error);
      }
    }

    console.log("🗓️ Tất cả lịch đã fetch:", allSchedules);
    setSchedules(allSchedules);
  };

  fetchSchedules();
}, [movie, selectedDate, selectedCity, cinemas]);


  // Lọc rạp theo thành phố
  const filteredCinemas = cinemas.filter((c) => c.city === selectedCity);

  // Lọc lịch chiếu theo rạp
  const getSchedulesForCinema = (cinemaId) => {
    return schedules.filter(
      (s) =>
        s.movieId === movie?.movieId &&
        s.scheduleDate === selectedDate.fullDate &&
        s.roomId &&
        s.scheduleStart &&
        s.scheduleEnd &&
        s.cinemaId === cinemaId
    );
  };

  // Khi nhấn đặt vé
  const handleBooking = () => {
    if (selectedTime) {
      navigate("/seat-selection", { state: { movie, selectedTime } });
    } else {
      alert("Vui lòng chọn suất chiếu trước khi đặt vé.");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">
        Đặt vé cho phim: {movie?.movieName || "Không có dữ liệu"}
      </h1>

      {/* Nút đặt vé */}
      <button
        className="w-70 mx-auto block bg-red-600 text-white py-3 rounded text-lg font-bold hover:bg-red-700"
        onClick={handleBooking}
      >
        Đặt vé
      </button>

      {/* Chọn ngày */}
      <div className="grid grid-cols-7 gap-2 text-center border p-4 my-4">
        {dates.map((date) => (
          <button
            key={date.day}
            className={`p-2 border rounded ${
              selectedDate.day === date.day ? "bg-red-500 text-white" : "bg-gray-100"
            }`}
            onClick={() => {
              setSelectedDate(date);
              setSelectedTime(null); // Reset lại chọn suất chiếu
            }}
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
          onChange={(e) => {
            setSelectedCity(e.target.value);
            setSelectedTime(null); // Reset lại chọn suất chiếu
          }}
        >
          {[...new Set(cinemas.map((c) => c.city))].map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* Danh sách rạp */}
      <div className="mt-6">
        <h2 className="font-semibold">Danh sách rạp:</h2>
        {filteredCinemas.map((cinema) => {
          const times = getSchedulesForCinema(cinema.cinemaId);
          return (
            <div key={cinema.cinemaId} className="mt-4 border p-2 rounded">
              <h3 className="font-bold">{cinema.cinemaName}</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {times.length === 0 ? (
                  <p className="text-gray-500">Không có suất chiếu hôm nay.</p>
                ) : (
                  times.map((schedule) => {
                    const label = schedule.scheduleStart.slice(0, 5); // chỉ HH:mm
                    const isSelected =
                      selectedTime?.scheduleId === schedule.scheduleId;
                    return (
                      <button
                        key={schedule.scheduleId}
                        className={`px-3 py-1 border rounded ${
                          isSelected
                            ? "bg-red-500 text-white"
                            : "bg-gray-200 hover:bg-red-500 hover:text-white"
                        }`}
                        onClick={() =>
                          setSelectedTime({
                            ...schedule,
                            cinemaName: cinema.cinemaName,
                          })
                        }
                      >
                        {label}
                      </button>
                    );
                  })
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
