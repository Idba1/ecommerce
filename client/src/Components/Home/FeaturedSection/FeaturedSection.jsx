import React from 'react';
import { Link } from 'react-router-dom';

const featuredProducts = [
    {
        id: 1,
        name: "Smartphone",
        image: "https://i.ibb.co.com/rKBgxGp1/35d17f2162576ea7609670826f265f90.jpg",
        price: "৳19,999",
    },
    {
        id: 2,
        name: "Men’s Jacket",
        image: "https://i.ibb.co.com/Jwyt3QtJ/476002250-634565969085290-8561381337494183684-n.jpg",
        price: "৳2,499",
    },
    {
        id: 3,
        name: "Wrist Watch",
        image: "https://i.ibb.co.com/fGCL5SB3/476667439-636610975547456-6235818316190897406-n.jpg",
        price: "৳3,199",
    },
];

const FeaturedSection = () => {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredProducts.map((product) => (
                        <div key={product.id} className="border rounded-lg shadow hover:shadow-lg transition">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-64 object-contain rounded-t-lg"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">{product.name}</h3>
                                <p className="text-blue-600 font-bold">{product.price}</p>
                                <Link
                                    to={`/product/${product.id}`}
                                    className="mt-2 inline-block  bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
                                >
                                    Buy Now
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedSection;