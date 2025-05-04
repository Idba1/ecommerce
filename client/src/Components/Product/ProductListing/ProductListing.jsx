import { useState } from "react";
import { products as mockProducts } from "../../../data/mockProducts";
import ProductCard from "../ProductCard/ProductCard";

const categories = [
    "All",
    "clothes",
    "shoes",
    "watches",
    "winter",
    "eyeglasses",
    "electronics"
];

const sortOptions = [
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
    { value: "rating", label: "Top Rated" }
];

const ProductListing = () => {
    const [category, setCategory] = useState("All");
    const [sortBy, setSortBy] = useState("rating");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const filtered = category === "All"
        ? mockProducts
        : mockProducts.filter((p) => p.category === category);

    const sorted = [...filtered].sort((a, b) => {
        if (sortBy === "price-asc") return a.discountPrice - b.discountPrice;
        if (sortBy === "price-desc") return b.discountPrice - a.discountPrice;
        if (sortBy === "rating") return b.rating - a.rating;
        return 0;
    });

    const totalPages = Math.ceil(sorted.length / itemsPerPage);
    const paginated = sorted.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
                {/* Category Filter */}
                <div>
                    <select
                        value={category}
                        onChange={(e) => {
                            setCategory(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="border rounded px-3 py-2"
                    >
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
                        ))}
                    </select>
                </div>

                {/* Sorting */}
                <div>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="border rounded px-3 py-2"
                    >
                        {sortOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {paginated.map((product) => (
                    <ProductCard key={product.id} product={product} />
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
        </div>
    );
};

export default ProductListing;
