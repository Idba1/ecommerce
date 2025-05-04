import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";

const Main = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen overflow-x-hidden">
      {/* Static Sidebar for desktop */}
      <aside className="hidden md:block fixed top-0 left-0 w-64 h-full bg-white shadow z-50">
        <Sidebar />
      </aside>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <div
            className="w-64 h-full bg-white shadow z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <Sidebar />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 w-full md:ml-64 flex flex-col">
        {/* Mobile Top Bar with Hamburger */}
        <div className="md:hidden p-4 bg-white shadow flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-gray-700 text-2xl"
          >
            ☰
          </button>
          <div className="text-lg font-semibold">E-24</div>
        </div>

        {/* Navbar */}
        {/* <Navbar /> */}

        {/* Page Content */}
        <div className="flex-grow p-4">
          <Outlet />
        </div>

        {/* Footer */}
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Main;
