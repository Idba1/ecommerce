import React, { useState } from 'react';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Subscribed with ${email}`);
        setEmail('');
    };

    return (
        <section className="bg-gray-800 py-12">
            <div className="max-w-4xl mx-auto px-4 text-center text-white">
                <h2 className="text-3xl font-bold mb-4">Stay Updated with E24.com.bd</h2>
                <p className="mb-6 text-gray-300">Subscribe to our newsletter for the latest products and offers.</p>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center gap-4">
                    <input
                        type="email"
                        required
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="px-4 py-2 rounded w-full sm:w-80 text-black"
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;