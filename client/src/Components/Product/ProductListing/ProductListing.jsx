import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const categories = [
    "All",
    "clothes",
    "shoes",
    "watches",
    "winter",
    "eyeglasses",
    "electronics",
    "accessories"
];

const sortOptions = [
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
    { value: "rating", label: "Top Rated" }
];

const ProductListing = () => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("All");
    const [sortBy, setSortBy] = useState("rating");
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const itemsPerPage = 8;

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const res = await fetch("http://localhost:5000/collection");
                const data = await res.json();
                setProducts(data);
            } catch (err) {
                console.error("Error fetching products:", err);
                setError("Failed to load products.");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // Reset page if sorting or category changes
    useEffect(() => {
        setCurrentPage(1);
    }, [category, sortBy]);

    const filtered = category === "All"
        ? products
        : products.filter((p) => p.category?.toLowerCase() === category.toLowerCase());

    const sorted = [...filtered].sort((a, b) => {
        if (sortBy === "price-asc") return (a.price || 0) - (b.price || 0);
        if (sortBy === "price-desc") return (b.price || 0) - (a.price || 0);
        if (sortBy === "rating") return (b.rating || 0) - (a.rating || 0);
        return 0;
    });

    const totalPages = Math.ceil(sorted.length / itemsPerPage);
    const paginated = sorted.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className="container mx-auto mt-12 px-4 py-8">
            {/* Filters and Sorting */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
                {/* Category Filter */}
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="border rounded px-3 py-2"
                >
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </option>
                    ))}
                </select>

                {/* Sorting Options */}
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border rounded px-3 py-2"
                >
                    {sortOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
            </div>

            {/* Product List */}
            {loading ? (
                <p className="text-center">Loading products...</p>
            ) : error ? (
                <p className="text-center text-red-500">{error}</p>
            ) : sorted.length === 0 ? (
                <p className="text-center text-gray-500">No products found in this category.</p>
            ) : (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {paginated.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-6 flex justify-center items-center gap-2">
                        <button
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="px-4 py-2 border rounded disabled:opacity-50"
                        >
                            Prev
                        </button>
                        <span className="px-4">Page {currentPage} of {totalPages}</span>
                        <button
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 border rounded disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default ProductListing;