import React from 'react';
import Swal from 'sweetalert2';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTiktok } from 'react-icons/fa';

const Footer = () => {
    const handleSubscribe = (e) => {
        e.preventDefault();
        Swal.fire({
            icon: 'success',
            title: 'Subscribed!',
            text: 'Thank you for subscribing to our newsletter.',
            confirmButtonColor: '#facc15', // Tailwind's yellow-400
        });
    };

    return (
        <footer className="bg-white text-black py-10 border-t">
            <div className="container mx-auto px-4">
                {/* Social Media Icons */}
                <div className="flex justify-center space-x-4 mb-4">
                    <FaFacebookF className="text-xl text-yellow-500 hover:text-blue-700 cursor-pointer" />
                    <FaInstagram className="text-xl text-yellow-500 hover:text-indigo-500 cursor-pointer" />
                    <FaYoutube className="text-xl text-yellow-500 hover:text-red-700 cursor-pointer" />
                    <FaLinkedinIn className="text-xl text-yellow-500 hover:text-blue-800 cursor-pointer" />
                    <FaTiktok className="text-xl text-yellow-500 hover:text-black cursor-pointer" />
                </div>

                {/* Slogan */}
                <p className="text-center text-sm mb-10">Explore Brands... Think to the.</p>

                {/* Footer columns */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-left mb-10">
                    {/* Contact */}
                    <div>
                        <h3 className="font-bold mb-2">CONTACT</h3>
                        <p>H19, Zakir Hossain Road, Lalmatiya,<br /> Mohammadpur, Dhaka, Bangladesh</p>
                        <p className="mt-2">Email: e24wholesale@gmail.com</p>
                        <p>Phone: +8801315-092215</p>
                    </div>

                    {/* Customer */}
                    <div>
                        <h3 className="font-bold mb-2">CUSTOMER</h3>
                        <ul className="space-y-1">
                            <li>Account</li>
                            <li>Cart</li>
                            <li>Shipping Charge</li>
                            <li>FAQ</li>
                        </ul>
                    </div>

                    {/* Information */}
                    <div>
                        <h3 className="font-bold mb-2">INFORMATION</h3>
                        <ul className="space-y-1">
                            <li>Privacy policy</li>
                            <li>Term & Condition</li>
                            <li>Return & Refund</li>
                        </ul>
                    </div>

                    {/* Mobile Apps + Newsletter */}
                    <div>
                        <h3 className="font-bold mb-2">MOBILE APPS</h3>
                        <p className="text-gray-400 mb-4">Coming soon...</p>

                        <h4 className="font-semibold text-sm mb-2 text-gray-800">📩 Subscribe to our Newsletter</h4>
                        <form onSubmit={handleSubscribe} className="space-y-2">
                            <input
                                type="email"
                                required
                                placeholder="Enter your email"
                                className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="w-full bg-yellow-500 text-white text-sm px-3 py-1 rounded hover:bg-yellow-600 transition"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Copyright */}
                <p className="text-center text-xs text-gray-500">
                    © 2025 E24.com.bd – All Rights Reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;