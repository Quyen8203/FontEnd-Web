import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const seatRows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const seatsPerRow = 10;
const vipSeats = new Set([
  "E3", "E4", "E5", "E6", "E7", "E8", "F3", "F4", "F5", "F6", "F7", "F8",
  "G3", "G4", "G5", "G6", "G7", "G8", "D3", "D4", "D5", "D6", "D7", "D8"
]); 

const seatPrice = 85000; // Giá mỗi ghế

export default function SeatSelection() {
  const location = useLocation();
  const navigate = useNavigate();
  const { movie, selectedTime } = location.state || {};

  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  const handleConfirm = () => {
    if (selectedSeats.length > 0) {
      navigate("/combo-selection", { state: { selectedSeats, movie, selectedTime } });
    }
  };

  const totalPrice = selectedSeats.length * seatPrice; // Tính tổng tiền

  return (
    <div className="max-w-3xl mx-auto p-4 text-center">
      <h1 className="text-2xl font-bold">Chọn Ghế - {movie?.movieName || "Không có dữ liệu"}</h1>
      <p className="text-gray-600">Rạp: {selectedTime?.cinema} | Suất chiếu: {selectedTime?.time}</p>

      <div className="mt-6 bg-gray-100 p-4 rounded">
        <p className="text-lg font-bold mb-2">SCREEN</p>
        <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${seatsPerRow}, minmax(30px, 1fr))` }}>
          {seatRows.flatMap((row) =>
            Array.from({ length: seatsPerRow }, (_, i) => {
              const seat = `${row}${i + 1}`;
              const isVip = vipSeats.has(seat);
              return (
                <button
                  key={seat}
                  className={`p-2 border rounded text-sm font-semibold
                    ${selectedSeats.includes(seat) ? "bg-red-500 text-white" : isVip ? "bg-yellow-400 hover:bg-yellow-500" : "bg-gray-200 hover:bg-red-400"}
                  `}
                  onClick={() => toggleSeat(seat)}
                >
                  {seat}
                </button>
              );
            })
          )}
        </div>
      </div>

      {/* Chú thích */}
      <div className="mt-4 flex justify-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 bg-yellow-400 border rounded"></div>
          <span>Ghế VIP</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 bg-gray-200 border rounded"></div>
          <span>Ghế Thường</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 bg-red-500 border rounded"></div>
          <span>Ghế Đã Chọn</span>
        </div>
      </div>

      {/* Hiển thị tổng tiền */}
      <div className="mt-4 text-lg font-bold text-red-800">
        Tổng tiền: {totalPrice.toLocaleString()} VNĐ
      </div>

      <button
        className="mt-6 bg-red-500 text-white py-2 px-4 rounded hover:bg-green-600"
        disabled={selectedSeats.length === 0}
        onClick={handleConfirm}
      >
        Xác nhận
      </button>
    </div>
  );
}
