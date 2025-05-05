// src/Components/Admin/ViewAllProducts.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ViewAllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/collection")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">All Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div key={product._id} className="bg-white shadow rounded-xl p-4">
                        <img
                            src={product.images?.[0]}
                            alt={product.title}
                            className="w-full h-40 object-cover rounded"
                        />
                        <h3 className="mt-2 text-lg font-semibold">{product.title}</h3>
                        <p className="text-sm text-gray-600">${product.price}</p>
                        <p className="text-sm text-yellow-600">Rating: {product.rating}</p>
                    </div>
                ))}
            </div>
            <Link
                to="/admin-dashboard"
                className="bg-yellow-500 mt-10 inline-block text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
            >
                Back to Admin Dashboard
            </Link>
        </div>
    );
};

export default ViewAllProducts;