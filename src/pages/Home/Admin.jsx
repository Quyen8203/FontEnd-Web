import React, { useState } from "react";

export default function Admin() {
  const [veDaDat, setVeDaDat] = useState([
    {
      id: 1,
      tenPhim: "Avengers: Endgame",
      tenNguoiDat: "Nguyen Van A",
      ghe: "A3, A4",
      thoiGian: "18:30 - 20:30, 20/04/2025"
    },
    {
      id: 2,
      tenPhim: "Spider-Man: No Way Home",
      tenNguoiDat: "Tran Thi B",
      ghe: "B2, B3",
      thoiGian: "19:00 - 21:00, 21/04/2025"
    }
  ]);

  const handleXoaVe = (id) => {
    const newList = veDaDat.filter((ve) => ve.id !== id);
    setVeDaDat(newList);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Quản Lý Vé Đã Đặt</h1>
      {veDaDat.length === 0 ? (
        <p className="text-gray-600">Chưa có vé nào được đặt.</p>
      ) : (
        <div className="space-y-4">
          {veDaDat.map((ve) => (
            <div
              key={ve.id}
              className="border border-gray-300 rounded-lg p-4 shadow-sm flex justify-between items-center"
            >
              <div>
                <p><span className="font-semibold">🎬 Phim:</span> {ve.tenPhim}</p>
                <p><span className="font-semibold">👤 Người đặt:</span> {ve.tenNguoiDat}</p>
                <p><span className="font-semibold">🪑 Ghế:</span> {ve.ghe}</p>
                <p><span className="font-semibold">🕒 Thời gian:</span> {ve.thoiGian}</p>
              </div>
              <button
                onClick={() => handleXoaVe(ve.id)}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Xóa Vé
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
