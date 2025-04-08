import { MdLocalOffer, MdConfirmationNumber } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate=useNavigate();

  return (
    <header className=" bg-white border-b border-gray-300 px-6 py-2 flex justify-end items-center space-x-6">
      {/* New & Offers */}
      <div className="flex items-center space-x-2 cursor-pointer hover:text-red-500 transition text-gray-700 text-sm">
        <MdLocalOffer size={18} />
        <span>New & Offers</span>
      </div>

      {/* My Tickets */}
      <div className="flex items-center space-x-2 cursor-pointer hover:text-red-500 transition text-gray-700 text-sm">
        <MdConfirmationNumber size={18} />
        <span>My Tickets</span>
      </div>

      {/* Nút VN */}
      <button className="px-3 py-1 bg-red-600 text-white text-sm rounded">
        VN
      </button>
    </header>
  );
};

export default Header;
