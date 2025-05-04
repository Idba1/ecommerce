import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Nav from "../Components/Home/Nav/Nav";

const Main = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen relative bg-gray-50">
      {/* Full-width fixed top Nav */}
      <div className="fixed top-0 left-0 w-full z-40">
        <Nav />
      </div>

      {/* Sidebar for desktop */}
      <aside className="hidden md:block fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] bg-white shadow z-30">
        <Sidebar />
      </aside>

      {/* Mobile Sidebar Overlay */}
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

      {/* Main Content Area */}
      <div className="pt-16 flex">
        {/* Push content for desktop view when sidebar is visible */}
        <div className="hidden md:block w-64"></div>

        <div className="flex-1 p-4">
          {/* Mobile Top Bar with Hamburger / Close */}
          <div className="md:hidden mb-4 flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-gray-700 text-2xl"
            >
              {sidebarOpen ? "✕" : "☰"}
            </button>
            <div className="text-lg font-semibold">E-24</div>
          </div>

          {/* Outlet for routing */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
