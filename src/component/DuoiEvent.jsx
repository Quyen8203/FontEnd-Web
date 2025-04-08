import React from "react";
import gilfcard from "../assets/cgvgilfcard.jpg";
import duoi23 from "../assets/khachduoi23.png";
import thuerap from "../assets/thue-rap.png";

const DuoiEvent = () => {
  return (
    <div className="flex justify-center gap-4 p-4 mx-auto">
      {/* Banner 1 - 25% */}
      <div className="w-1/4 md:w-1/4 sm:w-1/2  p-4 rounded-lg shadow-lg">
        <img
          src={gilfcard}
          alt="Quà tặng kẹo - Xem phim hết ý"
          className="w-full rounded"
        />
      </div>

      {/* Banner 2 - 50% */}
      <div className="w-1/2 md:w-1/2 sm:w-full  p-6 rounded-lg shadow-lg text-center">
        <img src={duoi23} alt="Khách dưới 23 tuổi" className="w-full rounded" />
      </div>

      {/* Banner 3 - 25% */}
      <div className="w-1/4 md:w-1/4 sm:w-1/2  p-4 rounded-lg shadow-lg">
        <img
          src={thuerap}
          alt="Thuê rạp / Sự kiện & Vé nhóm"
          className="w-full rounded"
        />
      </div>
    </div>
  );
};

export default DuoiEvent;
