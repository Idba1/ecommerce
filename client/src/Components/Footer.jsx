import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTiktok } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-white text-black py-10 border-t">
            <div className="container mx-auto px-4">
                {/* Social Media Icons */}
                <div className="flex justify-center space-x-4 mb-4">
                    <FaFacebookF className="text-xl hover:text-blue-600 cursor-pointer" />
                    <FaInstagram className="text-xl hover:text-pink-600 cursor-pointer" />
                    <FaYoutube className="text-xl hover:text-red-600 cursor-pointer" />
                    <FaLinkedinIn className="text-xl hover:text-blue-700 cursor-pointer" />
                    <FaTiktok className="text-xl hover:text-black cursor-pointer" />
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
                            <li>Wishlist</li>
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
                            <li>Shipping</li>
                            <li>Return & Refund</li>
                            <li>FAQs</li>
                        </ul>
                    </div>

                    {/* Mobile Apps (Empty placeholder) */}
                    <div>
                        <h3 className="font-bold mb-2">MOBILE APPS</h3>
                        <p className="text-gray-400">Coming soon...</p>
                    </div>
                </div>

                {/* Payment Logos */}
                <div className="flex justify-center items-center space-x-6 mb-4">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/BKash_Logo.png" alt="bKash" className="h-6" />
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Dutch-Bangla_Bank_Logo.svg/512px-Dutch-Bangla_Bank_Logo.svg.png" alt="DBBL" className="h-6" />
                </div>

                {/* Copyright */}
                <p className="text-center text-xs text-gray-500">
                    © 2025 E24-Wholesale – All Rights Reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;