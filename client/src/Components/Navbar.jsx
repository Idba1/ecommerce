import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiShoppingCart, FiHeart, FiUser } from "react-icons/fi";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = () => {
        logOut().catch((error) => console.error(error));
        setMenuOpen(false);
    };

    return (
        <nav className="bg-white shadow-sm w-full z-50 sticky top-0">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <img src="/logo.jpg" alt="E24.com.bd logo" className="h-8 w-auto" />
                    <span className="text-xl font-bold text-gray-800">E24.com.bd</span>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex gap-6 items-center font-medium text-gray-700">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/wishlist">Wishlist</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    {user && <li><Link to="/orders">My Orders</Link></li>}
                </ul>

                {/* Right Side Icons (Desktop) */}
                <div className="hidden lg:flex items-center gap-4 text-xl text-gray-700">
                    <Link to="/cart" className="hover:text-blue-600"><FiShoppingCart /></Link>
                    <Link to="/wishlist" className="hover:text-blue-600"><FiHeart /></Link>
                    {user ? (
                        <div className="dropdown dropdown-end relative">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full" title={user.displayName}>
                                    <img referrerPolicy="no-referrer" alt="User" src={user.photoURL} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 absolute right-0 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to="/dashboard">Dashboard</Link></li>
                                <li><Link to="/orders">My Orders</Link></li>
                                <li>
                                    <button onClick={handleLogout} className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-left w-full">
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <Link to="/login" className="hover:text-blue-600"><FiUser /></Link>
                    )}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-2xl text-gray-800"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Menu"
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden px-4 pb-4">
                    <ul className="flex flex-col gap-4 text-gray-700 font-medium">
                        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                        <li><Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link></li>
                        <li><Link to="/cart" onClick={() => setMenuOpen(false)}>Cart</Link></li>
                        <li><Link to="/wishlist" onClick={() => setMenuOpen(false)}>Wishlist</Link></li>
                        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                        {user && (
                            <>
                                <li><Link to="/orders" onClick={() => setMenuOpen(false)}>My Orders</Link></li>
                                <li><Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link></li>
                                <li>
                                    <button onClick={handleLogout} className="text-left w-full">
                                        Logout
                                    </button>
                                </li>
                            </>
                        )}
                        {!user && (
                            <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
                        )}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;