import React from "react";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
    return (
        <div
            className="hero min-h-96 lg:h-2/4 relative overflow-hidden"
            style={{
                backgroundImage:
                    "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Blur overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>

            {/* Hero content */}
            <div className="hero-content text-neutral-content text-center relative z-10">
                <div className="max-w-md">
                    <h1 className="mb-5 text-4xl lg:text-5xl font-bold">
                        <Typewriter
                            words={["Discover the Joy of Shopping for Kids", "Trendy Clothes, Shoes & More", "Daily Deals Just for Your Little Ones"]}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    </h1>
                    <p className="mb-5">
                        E-24 brings you trendy clothes, comfy shoes, fun gadgets, and stylish accessories —
                        all handpicked for your little ones.
                    </p>
                    <a
                        href="/"
                        className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
                    >
                        Explore Deals
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
