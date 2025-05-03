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
            <button className="mt-2 w-full bg-blue-600 text-white py-1 rounded hover:bg-blue-700">
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
