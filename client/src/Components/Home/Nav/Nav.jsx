import { FaShoppingCart, FaGift, FaUser, FaSearch, FaCamera } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Nav = () => {
    const { user, logOut } = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);

    const handleLogout = () => {
        logOut()
            .then(() => setOpen(false))
            .catch((err) => console.error(err));
    };

    const fetchCartCount = () => {
        if (user?.email) {
            fetch(`https://server-three-umber-95.vercel.app/cart?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    const total = data.reduce((sum, item) => sum + (item.quantity || 1), 0);
                    setCartCount(total);
                })
                .catch(err => console.error("Failed to fetch cart", err));
        }
    };

    useEffect(() => {
        fetchCartCount();

        const handleCartUpdated = () => {
            fetchCartCount();
        };

        window.addEventListener("cart-updated", handleCartUpdated);

        return () => {
            window.removeEventListener("cart-updated", handleCartUpdated);
        };
    }, [user]);

    return (
        <nav className="w-full bg-[#F5B246] py-2 px-4 flex items-center justify-between flex-wrap gap-2 sm:gap-0">
            {/* Logo */}
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

            {/* Right Icons */}
            <div className="flex gap-4 text-white text-lg items-center mt-2 sm:mt-0 relative">
                <Link to="/cart" className="relative">
                    <FaShoppingCart />
                    {cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 text-[10px] bg-white text-black rounded-full px-1">
                            {cartCount}
                        </span>
                    )}
                </Link>

                <FaGift />

                {user ? (
                    <div className="relative">
                        <button
                            onClick={() => setOpen(!open)}
                            className="w-8 h-8 rounded-full overflow-hidden border-2 border-white"
                            title={user.displayName}
                        >
                            <img
                                src={user.photoURL}
                                alt="Profile"
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-cover"
                            />
                        </button>

                        {open && (
                            <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg z-10">
                                <Link to="/account" className="block px-4 py-2 hover:bg-gray-100">Dashboard</Link>
                                <Link to="/cart" className="block px-4 py-2 hover:bg-gray-100">My Orders</Link>
                                <button
                                    onClick={handleLogout}
                                    className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                                >
                                    <FiLogOut /> Logout
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <Link to="/login" className="hover:text-white">
                        <FaUser />
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Nav;