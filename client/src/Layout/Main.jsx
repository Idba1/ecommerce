import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Nav from "../Components/Home/Nav/Nav";
import Footer from "../Components/Footer";

const Main = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Fixed Nav */}
      <div className="fixed top-0 left-0 w-full z-40">
        <Nav />
      </div>

      {/* Sidebar for Desktop */}
      <aside className="hidden md:block fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] bg-white shadow z-30">
        <Sidebar />
      </aside>

      {/* Sidebar for Mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <div
            className="w-64 h-full bg-white shadow"
            onClick={(e) => e.stopPropagation()}
          >
            <Sidebar />
          </div>
        </div>
      )}

      {/* Spacer for fixed nav */}
      <div className="pt-16 flex-1 flex flex-col md:flex-row">
        {/* Left Sidebar Space */}
        <div className="hidden md:block w-64"></div>

        {/* Main Content Area with grow and footer push */}
        <div className="flex-1 flex flex-col min-h-[calc(100vh-4rem)] p-4">
          {/* Mobile Topbar */}
          <div className="md:hidden mb-4 flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-gray-700 text-2xl"
            >
              {sidebarOpen ? "✕" : "☰"}
            </button>
            <div className="text-lg font-semibold">E-24</div>
          </div>

          {/* Actual Page Content */}
          <div className="flex-grow">
            <Outlet />
          </div>

          {/* Sticky to bottom if content is small */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Main;