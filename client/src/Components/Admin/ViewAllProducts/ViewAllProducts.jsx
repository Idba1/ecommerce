import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ViewAllProducts = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://server-three-umber-95.vercel.app/collection")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setFilteredProducts(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);
        const filtered = products.filter((product) =>
            product.title.toLowerCase().includes(value)
        );
        setFilteredProducts(filtered);
    };

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
            const res = await fetch(`https://server-three-umber-95.vercel.app/collection/${id}`, {
                method: "DELETE",
            });
            const data = await res.json();

            if (data.deletedCount > 0) {
                const updated = products.filter((product) => product._id !== id);
                setProducts(updated);
                setFilteredProducts(updated);
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
            <h2 className="text-3xl font-bold mb-6 text-center text-yellow-600">All Products</h2>

            {/* Search Bar */}
            <div className="mb-6 flex justify-center">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Search products..."
                    className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div
                            key={product._id}
                            className="bg-white border rounded-2xl shadow hover:shadow-lg transition p-4 relative flex flex-col"
                        >
                            <img
                                src={product.images?.[0]}
                                alt={product.title}
                                className="w-full h-52 object-cover rounded-xl mb-4"
                            />
                            <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
                            <p className="text-gray-600 font-medium mt-1">${product.price}</p>
                            <p className="text-yellow-600 text-sm mt-1">Rating: {product.rating}</p>

                            <div className="mt-4 flex justify-end">
                                <div className="mt-4 flex space-x-3">
                                    <Link
                                        to={`/admin-dashboard/update-product/${product._id}`}
                                        className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-4 py-2 rounded-lg transition"
                                    >
                                        Update
                                    </Link>
                                    <button
                                        onClick={() => deleteProduct(product._id)}
                                        className="bg-red-500 hover:bg-red-600 text-white text-xs px-4 py-2 rounded-lg transition"
                                    >
                                        Delete
                                    </button>
                                </div>

                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center col-span-full text-gray-500">No products found.</p>
                )}
            </div>

            {/* Back to Dashboard */}
            <div className="mt-10 text-center">
                <Link
                    to="/admin-dashboard"
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg text-sm font-medium transition"
                >
                    Back to Admin Dashboard
                </Link>
            </div>
        </div>
    );
};

export default ViewAllProducts;
