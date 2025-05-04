import { FaShoppingCart, FaHeart, FaGift, FaUser, FaSearch, FaCamera } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="w-full bg-[#F5B246] py-2 px-4 flex items-center justify-between flex-wrap gap-2 sm:gap-0">

            {/* Logo */}
            {/* <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm sm:text-base">
        <FaShoppingCart className="text-blue-500 text-lg sm:text-xl" />
        <span className="font-bold text-black whitespace-nowrap">
          <span className="text-blue-500">e24</span>
        </span>
      </div> */}
            <Link to="/" className="flex items-center gap-2">
                <img src="/logo.jpg" alt="E24.com.bd logo" className="h-8 w-auto" />
                <span className="text-xl font-bold text-gray-800">E24.com.bd</span>
            </Link>

            {/* Search Bar */}
            <div className="flex flex-1 max-w-full sm:max-w-3xl w-full sm:mx-4">
                <div className="flex items-center bg-white rounded-l-full px-3 py-2 flex-grow">
                    <FaCamera className="text-gray-400 mr-2" />
                    <input
                        type="text"
                        placeholder="Search by keyword"
                        className="w-full outline-none bg-transparent text-sm text-gray-700"
                    />
                </div>
                <button className="bg-black text-white px-4 rounded-r-full flex items-center justify-center">
                    <FaSearch />
                </button>
            </div>

            {/* Icons */}
            <div className="flex gap-4 text-white text-lg items-center mt-2 sm:mt-0">
                <div className="relative">
                    <FaShoppingCart />
                    <span className="absolute -top-2 -right-2 text-[10px] bg-white text-black rounded-full px-1">0</span>
                </div>
                <div className="relative">
                    <FaHeart />
                    <span className="absolute -top-2 -right-2 text-[10px] bg-white text-black rounded-full px-1">0</span>
                </div>
                <FaGift />
                <FaUser />
            </div>
        </nav>
    );
};

export default Nav;
