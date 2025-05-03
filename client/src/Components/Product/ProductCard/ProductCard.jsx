// src/components/ProductCard.jsx
const ProductCard = ({ product }) => {
    return (
        <div className="border rounded-lg shadow hover:shadow-lg transition p-4">
            <div className="w-full aspect-w-1 aspect-h-1">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain rounded"
                />
            </div>
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-500">${product.price}</p>
            <button className="bg-yellow-500 text-white w-full px-6 py-3 rounded-lg hover:bg-yellow-600 transition">
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
