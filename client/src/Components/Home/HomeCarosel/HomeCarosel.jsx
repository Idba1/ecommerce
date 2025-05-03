import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from 'react-router-dom';

const data = [
    {
        image: "https://i.ibb.co.com/1f4sn8pP/home-1.png",
        headline: "Welcome to E24.com.bd",
        paragraph: "Shop the latest trends in fashion, electronics, and more!",
        buttonText: "Start Shopping",
    },
    {
        image: "https://i.ibb.co.com/XZXkrQB9/home-2.png",
        headline: "Exclusive Deals Everyday",
        paragraph: "Unbeatable prices on your favorite products.",
        buttonText: "Browse Deals",
    },
    {
        image: "https://i.ibb.co.com/FL0VYVYp/home-3.png",
        headline: "Fast Delivery Nationwide",
        paragraph: "Get your orders delivered to your doorstep quickly.",
        buttonText: "Shop Now",
    }
];

const HomeCarosel = () => {
    const items = data.map((item, index) => (
        <div key={index} className="relative w-full h-[20vh] md:h-[40vh] lg:h-[70vh] bg-black flex items-center justify-center">
            <img
                src={item.image}
                alt={`Carousel Image ${index + 1}`}
                className="w-full h-full object-cover"
            />
        </div>
    ));

    return (
        <div className="carousel-container w-full">
            <AliceCarousel
                mouseTracking
                items={items}
                controlsStrategy="alternate"
                disableButtonsControls
                autoPlay
                autoPlayInterval={3000}
                disableDotsControls
                infinite
            />
        </div>
    );
};

export default HomeCarosel;
