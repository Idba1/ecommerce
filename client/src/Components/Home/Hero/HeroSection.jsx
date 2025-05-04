import React from "react";

const HeroSection = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-white flex flex-col justify-between px-6 py-8 border-r">
                {/* Logo */}
                <h1 className="text-2xl font-bold">E-24</h1>

                {/* Icons */}
                <div className="flex items-center space-x-4 my-6">
                    <span className="text-xl cursor-pointer">🔍</span>
                    <span className="text-xl cursor-pointer">👤</span>
                    <span className="text-xl cursor-pointer relative">
                        🛍️
                        <span className="absolute top-[-5px] right-[-5px] bg-yellow-400 text-xs px-1 rounded-full">1</span>
                    </span>
                </div>

                {/* Menu */}
                <nav className="flex flex-col space-y-4 text-gray-700 font-semibold">
                    <a href="#">Home</a>
                    <a href="#">Pages</a>
                    <a href="#">Women</a>
                    <a href="#">Men</a>
                    <a href="#">Blog</a>
                </nav>

                {/* Footer */}
                <footer className="text-sm text-gray-400 mt-6">
                    <div className="flex space-x-3 text-lg mb-2">
                        <span>🌐</span>
                        <span>🐦</span>
                        <span>📌</span>
                        <span>🎥</span>
                        <span>📸</span>
                    </div>
                    <p>© 2024 E-24. All rights reserved.</p>
                </footer>
            </aside>

            {/* Hero Section */}
            <main
                className="flex-1 bg-cover bg-center relative"
                style={{
                    backgroundImage: "url('/your-image.jpg')", // Replace with your image path
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white px-6 text-center">
                    <p className="text-sm tracking-widest mb-2">FASHION & ACCESSORIES FOR MEN</p>
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-4">COLLECTION</h2>
                    <p className="mb-6">Uncompromising in style, quality and performance</p>
                    <button className="bg-white text-black px-6 py-2 text-sm font-semibold rounded hover:bg-gray-200">
                        SHOP THE COLLECTION
                    </button>
                </div>
            </main>
        </div>
    );
};

export default HeroSection;