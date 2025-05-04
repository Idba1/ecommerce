import React from 'react';

const Promotions = () => {
    return (
        <section className="bg-yellow-100 my-16 py-12">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-6 text-yellow-900">🔥 Special Offers Just for You!</h2>
                <p className="text-lg text-yellow-800 mb-6">
                    Get up to <span className="font-bold">50% OFF</span> on select items. Limited time only!
                </p>
                <a
                    href="/"
                    className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
                >
                    Explore Deals
                </a>
            </div>
        </section>
    );
};

export default Promotions;