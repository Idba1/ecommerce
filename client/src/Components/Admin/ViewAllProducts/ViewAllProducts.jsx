// src/Components/Admin/ViewAllProducts.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ViewAllProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/collection")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    const deleteProduct = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        });

        if (!result.isConfirmed) return;

        try {
            const res = await fetch(`http://localhost:5000/collection/${id}`, {
                method: "DELETE",
            });
            const data = await res.json();

            if (data.deletedCount > 0) {
                setProducts((prev) => prev.filter((product) => product._id !== id));
                Swal.fire('Deleted!', 'Product has been deleted.', 'success');
            } else {
                Swal.fire('Failed!', 'Could not delete the product.', 'error');
            }
        } catch (error) {
            console.error("Delete error:", error);
            Swal.fire('Error!', 'An error occurred while deleting.', 'error');
        }
    };

    if (loading) {
        return <div className="p-6 text-center text-gray-600">Loading products...</div>;
    }

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">All Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div key={product._id} className="bg-white shadow rounded-xl p-4 relative">
                        <img
                            src={product.images?.[0]}
                            alt={product.title}
                            className="w-full h-40 object-cover rounded"
                        />
                        <h3 className="mt-2 text-lg font-semibold">{product.title}</h3>
                        <p className="text-sm text-gray-600">${product.price}</p>
                        <p className="text-sm text-yellow-600">Rating: {product.rating}</p>
                        <button
                            onClick={() => deleteProduct(product._id)}
                            className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded hover:bg-red-600 transition"
                        >
                            Delete
                        </button>
                        <Link
                            to={`/admin-dashboard/update-product/${product._id}`}
                            className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 text-xs rounded hover:bg-blue-600 transition"
                        >
                            Update
                        </Link>

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