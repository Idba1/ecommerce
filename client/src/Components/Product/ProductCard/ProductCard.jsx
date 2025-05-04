import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
    const { name, images, price, discountPrice, rating } = product;

    return (
        <div className="border rounded-lg shadow hover:shadow-lg transition p-4 bg-white">
            <div className="w-full h-48 overflow-hidden rounded">
                <img
                    src={images?.[0]}
                    alt={name}
                    className="w-full h-full object-contain"
                />
            </div>
            <h3 className="text-lg font-semibold mt-3">{name}</h3>

            <div className="flex items-center gap-2 text-sm text-yellow-500 mt-1">
                {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < Math.floor(rating) ? "text-yellow-500" : "text-gray-300"} />
                ))}
                <span className="text-gray-600 ml-1">({rating})</span>
            </div>

            <div className="mt-2">
                {discountPrice < price ? (
                    <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-green-600">${discountPrice.toFixed(2)}</span>
                        <span className="text-sm line-through text-gray-400">${price.toFixed(2)}</span>
                    </div>
                ) : (
                    <span className="text-lg font-bold">${price.toFixed(2)}</span>
                )}
            </div>

            <button className="mt-4 bg-yellow-500 text-white w-full px-6 py-2 rounded hover:bg-yellow-600 transition">
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
