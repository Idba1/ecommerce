import { FaTshirt, FaShoePrints, FaClock, FaSnowflake, FaGlasses, FaTabletAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const menuItems = [
        { name: "Clothes", icon: <FaTshirt />, path: "/clothes" },
        { name: "Shoes", icon: <FaShoePrints />, path: "/shoes" },
        { name: "Watches", icon: <FaClock />, path: "/watches" },
        { name: "Winter Wear", icon: <FaSnowflake />, path: "/winter" },
        { name: "Eyeglasses", icon: <FaGlasses />, path: "/eyeglasses" },
        { name: "Electronics", icon: <FaTabletAlt />, path: "/electronics" },
    ];

    return (
        <div className="h-screen flex flex-col bg-white border-r p-4">
            {/* <h2 className="text-xl font-bold mb-6 text-center">E-24 Menu</h2> */}

            <nav className="flex flex-col space-y-4 flex-grow">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center space-x-3 p-2 rounded hover:bg-gray-100 transition ${isActive ? "bg-gray-200 font-semibold" : ""
                            }`
                        }
                    >
                        <span className="text-lg">{item.icon}</span>
                        <span>{item.name}</span>
                    </NavLink>
                ))}
            </nav>

            <footer className="mt-auto text-center text-sm text-gray-500 pt-4 border-t">
                &copy; {new Date().getFullYear()} E-24
            </footer>
        </div>
    );
};

export default Sidebar;