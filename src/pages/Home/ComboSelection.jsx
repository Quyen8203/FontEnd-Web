import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import combo1 from "../../assets/combo1.png";
import combo2 from "../../assets/combo2.png";
import combo3 from "../../assets/combo3.png";
import combo4 from "../../assets/combo4.png";

export default function ComboSelection() {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedSeats, movie, selectedTime } = location.state || {};

  const combos = [
    { id: 1, name: "MY COMBO", description: "1 Bắp Ngọt Lớn + 1 Nước Siêu Lớn.", price: 95000, image: combo1 },
    { id: 2, name: "SNAKE MINI BROWN & FRIENDS SET", description: "01 Bắp mix hai vị + 02 Nước ngọt siêu lớn, kèm 01 snack.", price: 569000, image: combo2 },
    { id: 3, name: "KITKAT SWEET WHITEDAY COMBO", description: "01 Bắp ngọt lớn + 02 KitKat Mild 2F.", price: 249000, image: combo3 },
    { id: 4, name: "MY COMBO 2", description: "1 Bắp Ngọt Lớn + 1 Nước Siêu Lớn.", price: 95000, image: combo4 },
  ];

  const seatPrice = 85000; // Giá mỗi ghế
  const seatTotalPrice = selectedSeats.length * seatPrice; // Tổng tiền ghế

  const [selectedCombos, setSelectedCombos] = useState({});

  const updateQuantity = (id, amount) => {
    setSelectedCombos((prev) => {
      const newQty = (prev[id] || 0) + amount;
      if (newQty < 0) return prev;
      return { ...prev, [id]: newQty };
    });
  };

  const handleConfirm = () => {
    const selected = Object.entries(selectedCombos)
      .filter(([_, qty]) => qty > 0)
      .map(([id, qty]) => ({ ...combos.find((c) => c.id == id), quantity: qty }));

    navigate("/checkout", { state: { selectedSeats, selectedCombos: selected, movie, selectedTime, totalPrice } });
  };

  const comboTotalPrice = Object.entries(selectedCombos).reduce(
    (total, [id, qty]) => total + (combos.find((c) => c.id == id)?.price || 0) * qty,
    0
  );

  const totalPrice = seatTotalPrice + comboTotalPrice; // Tổng tiền cuối cùng

  return (
    <div className="max-w-3xl mx-auto p-4 text-center">
      <h1 className="text-2xl font-bold">Chọn Bắp & Nước</h1>
      <p className="text-gray-600">Bạn đã chọn ghế: {selectedSeats?.join(", ")}</p>

      <div className="mt-6 space-y-4">
        {combos.map((combo) => (
          <div key={combo.id} className="flex items-center p-4 border rounded-lg shadow">
            <img src={combo.image} alt={combo.name} className="w-24 h-24 object-cover rounded" />
            <div className="flex-1 ml-4 text-left">
              <h2 className="text-lg font-semibold">{combo.name}</h2>
              <p className="text-gray-600 text-sm">{combo.description}</p>
              <p className="font-bold text-red-500">{combo.price.toLocaleString()} đ</p>
            </div>
            <div className="flex items-center">
              <button onClick={() => updateQuantity(combo.id, -1)} className="px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300">-</button>
              <span className="mx-4 font-semibold">{selectedCombos[combo.id] || 0}</span>
              <button onClick={() => updateQuantity(combo.id, 1)} className="px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300">+</button>
            </div>
          </div>
        ))}
      </div>

      {/* Hiển thị tổng tiền */}
      <div className="mt-6 text-lg font-bold text-gray-800">
        Tổng tiền ghế: {seatTotalPrice.toLocaleString()} VNĐ
      </div>
      <div className="text-lg font-bold text-gray-800">
        Tổng tiền combo: {comboTotalPrice.toLocaleString()} VNĐ
      </div>
      <div className="text-xl font-bold text-red-600">
        Tổng thanh toán: {totalPrice.toLocaleString()} VNĐ
      </div>

      <button
        className="mt-6 bg-red-500 text-white py-2 px-4 rounded hover:bg-green-600 disabled:bg-gray-400"
        disabled={totalPrice === seatTotalPrice} // Chỉ cho xác nhận nếu đã chọn ít nhất 1 combo hoặc ghế
        onClick={handleConfirm}
      >
        Xác nhận
      </button>
    </div>
  );
}
