import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../../Provider/AuthProvider";

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState("description");

    useEffect(() => {
        axios.get(`http://localhost:5000/collection/${id}`)
            .then(res => {
                setProduct(res.data);
                setSelectedImage(res.data.images?.[0] || "");
                setSelectedSize(res.data.sizes?.[0] || "");
            })
            .catch(err => console.error("Failed to load product", err));
    }, [id]);

    const handleAddToCart = () => {
        if (!user) {
            alert("Please login first.");
            return navigate("/login");
        }

        const cartItem = {
            userEmail: user.email,
            productId: product._id,
            title: product.title,
            price: product.price,
            image: product.images[0],
            size: selectedSize,
            quantity,
        };

        fetch("http://localhost:5000/cart", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cartItem),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    navigate("/cart");
                }
            })
            .catch(err => console.error("Add to cart failed:", err));
    };

    if (!product) return <div className="p-6">Loading product details...</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Top section */}
            <div className="flex flex-col lg:flex-row gap-10">
                {/* Images */}
                <div className="w-full lg:w-1/2">
                    <img src={selectedImage} alt="Product" className="w-full rounded shadow" />
                    <div className="flex gap-2 mt-4">
                        {product.images.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt="Thumbnail"
                                onClick={() => setSelectedImage(img)}
                                className={`w-16 h-16 object-cover rounded cursor-pointer border ${selectedImage === img ? "border-black" : "border-gray-300"}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Details */}
                <div className="w-full lg:w-1/2 space-y-4">
                    <h1 className="text-3xl font-bold">{product.title}</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-red-600 text-xl font-semibold">${product.price.toFixed(2)}</span>
                        {product.oldPrice > product.price && (
                            <>
                                <span className="line-through text-gray-500">${product.oldPrice.toFixed(2)}</span>
                                <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm">Sale</span>
                            </>
                        )}
                    </div>

                    <p>{product.description}</p>

                    {/* Size options */}
                    <div className="flex gap-2 mt-4">
                        {product.sizes.map((size) => (
                            <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`border rounded px-3 py-1 ${selectedSize === size ? "bg-black text-white" : "bg-white text-black"}`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>

                    {/* Quantity + Buttons */}
                    <div className="flex items-center gap-4 mt-4">
                        <input
                            type="number"
                            value={quantity}
                            min={1}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            className="w-16 border px-2 py-1 rounded"
                        />
                        <button
                            onClick={handleAddToCart}
                            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
                        >
                            Add to Cart
                        </button>
                        <button className="border px-6 py-2 rounded hover:bg-gray-100">Buy It Now</button>
                    </div>

                    <div className="text-sm text-gray-500 mt-2">
                        Estimated delivery: <strong>5-7 days (International), 2-4 days (Local)</strong>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="mt-12">
                <div className="flex gap-6 border-b pb-2">
                    <button
                        onClick={() => setActiveTab("description")}
                        className={`pb-1 border-b-2 ${activeTab === "description" ? "border-black" : "border-transparent"} font-medium`}
                    >
                        Description
                    </button>
                    <button
                        onClick={() => setActiveTab("shipping")}
                        className={`pb-1 border-b-2 ${activeTab === "shipping" ? "border-black" : "border-transparent"} font-medium`}
                    >
                        Shipping & return
                    </button>
                </div>

                <div className="mt-4 text-gray-700">
                    {activeTab === "description" ? product.tabs?.description : product.tabs?.shipping}
                </div>
            </div>

            {/* Outstanding Features */}
            <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4">Outstanding Features</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {product.features.map((f, idx) => (
                        <li key={idx}>{f}</li>
                    ))}
                </ul>
                {product.images?.[0] && (
                    <img src={product.images?.[0]} alt="Fragrance" className="w-full mt-6 rounded shadow" />
                )}
            </div>

            {/* Highlights */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
                {product.highlights?.map((item, idx) => (
                    <div key={idx} className="space-y-2">
                        <img src={item.img} alt={item.title} className="w-full rounded" />
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductDetails;