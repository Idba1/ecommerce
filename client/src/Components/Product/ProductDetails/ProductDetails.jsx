import { useState } from "react";

const product = {
    title: "Pure Bliss",
    price: 50.0,
    oldPrice: 70.0,
    rating: 0,
    sizes: ["25ml", "50ml", "100ml", "45ml"],
    images: [
        "https://i.ibb.co.com/B5xBr9jQ/470685073-599278752590965-214457294649257290-n.jpg",
        "https://i.ibb.co.com/B5xBr9jQ/470685073-599278752590965-214457294649257290-n.jpg",
        "https://i.ibb.co.com/B5xBr9jQ/470685073-599278752590965-214457294649257290-n.jpg",
        "https://i.ibb.co.com/B5xBr9jQ/470685073-599278752590965-214457294649257290-n.jpg",
        "https://i.ibb.co.com/FbBKxvTG/470552180-599278562590984-7734472273460560318-n.jpg"
    ],
    description: `Temporibus ducimus et exercitationem et occaecati consequatur. Voluptatem fugiat est incidunt aut.`,
    features: [
        "Elegant fragrance experience suitable for any occasion",
        "Infused natural ingredients – fresh and long-lasting",
        "Unique minimal bottle design",
        "Perfect for gifting"
    ],
    tabs: {
        description: `This fragrance is a harmonious blend of floral elegance and soft woody undertones. Crafted for the modern individual.`,
        shipping: `Free worldwide shipping on orders over $50. Estimated delivery: 5-7 business days.`
    },
    highlights: [
        { title: "Authentic Product", img: "https://i.ibb.co.com/FbBKxvTG/470552180-599278562590984-7734472273460560318-n.jpg", desc: "Ensures durability and originality." },
        { title: "Fashion Minimal", img: "https://i.ibb.co.com/FbBKxvTG/470552180-599278562590984-7734472273460560318-n.jpg", desc: "Perfect for any aesthetic shelf." },
        { title: "Luxurious", img: "https://i.ibb.co.com/FbBKxvTG/470552180-599278562590984-7734472273460560318-n.jpg", desc: "Crafted with premium elements." }
    ]
};

const ProductDetails = () => {
    const [selectedImage, setSelectedImage] = useState(product.images[0]);
    const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState("description");

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
                        <span className="line-through text-gray-500">${product.oldPrice.toFixed(2)}</span>
                        <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm">Sale</span>
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
                        <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">Add to Cart</button>
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
                    {activeTab === "description" ? product.tabs.description : product.tabs.shipping}
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
                <img src="https://i.ibb.co.com/FbBKxvTG/470552180-599278562590984-7734472273460560318-n.jpg" alt="Fragrance beach" className="w-full mt-6 rounded shadow" />
            </div>

            {/* Highlights */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
                {product.highlights.map((item, idx) => (
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