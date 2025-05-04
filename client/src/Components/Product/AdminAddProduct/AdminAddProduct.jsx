import { useState } from "react";
import axios from "axios";

const AdminAddProduct = () => {
    const [formData, setFormData] = useState({
        title: "",
        price: "",
        oldPrice: "",
        rating: 0,
        category: "",
        sizes: [],
        images: [],
        description: "",
        features: [""],
        tabs: {
            description: "",
            shipping: "",
        },
        highlights: [{ title: "", img: "", desc: "" }],
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name.includes("tabs.")) {
            const field = name.split(".")[1];
            setFormData((prev) => ({
                ...prev,
                tabs: { ...prev.tabs, [field]: value },
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleArrayChange = (name, index, value, subField = null) => {
        setFormData((prev) => {
            const updated = [...prev[name]];
            if (subField) {
                updated[index][subField] = value;
            } else {
                updated[index] = value;
            }
            return { ...prev, [name]: updated };
        });
    };

    const addArrayField = (name, defaultValue) => {
        setFormData((prev) => ({
            ...prev,
            [name]: [...prev[name], defaultValue],
        }));
    };

    const removeArrayField = (name, index) => {
        setFormData((prev) => {
            const updated = [...prev[name]];
            updated.splice(index, 1);
            return { ...prev, [name]: updated };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const productData = {
                ...formData,
                price: Number(formData.price),
                oldPrice: Number(formData.oldPrice),
                rating: Number(formData.rating),
            };
            await axios.post("http://localhost:5000/collection", productData);
            alert("Product uploaded successfully!");
            setFormData({
                title: "",
                price: "",
                oldPrice: "",
                rating: 0,
                category: "",
                sizes: [],
                images: [],
                description: "",
                features: [""],
                tabs: {
                    description: "",
                    shipping: "",
                },
                highlights: [{ title: "", img: "", desc: "" }],
            });
        } catch (err) {
            console.error(err);
            alert("Error uploading product.");
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            <h2 className="text-2xl font-bold mb-6">Add New Product</h2>
            <form onSubmit={handleSubmit} className="space-y-6">

                {/* Basic Info */}
                <input name="title" placeholder="Title" value={formData.title} onChange={handleInputChange} className="w-full border p-2 rounded" />
                <input name="price" placeholder="Price" value={formData.price} onChange={handleInputChange} type="number" className="w-full border p-2 rounded" />
                <input name="oldPrice" placeholder="Old Price" value={formData.oldPrice} onChange={handleInputChange} type="number" className="w-full border p-2 rounded" />
                <input name="rating" placeholder="Rating" value={formData.rating} onChange={handleInputChange} type="number" className="w-full border p-2 rounded" />
                <input name="category" placeholder="Category (e.g., clothes, shoes)" value={formData.category} onChange={handleInputChange} className="w-full border p-2 rounded" />
                <textarea name="description" placeholder="Description" value={formData.description} onChange={handleInputChange} className="w-full border p-2 rounded" />

                {/* Sizes */}
                <div>
                    <h4 className="font-semibold mb-1">Sizes</h4>
                    {formData.sizes.map((s, i) => (
                        <div key={i} className="flex gap-2 mb-2">
                            <input value={s} onChange={(e) => handleArrayChange("sizes", i, e.target.value)} className="flex-1 border p-1 rounded" />
                            <button type="button" onClick={() => removeArrayField("sizes", i)} className="text-red-600">Remove</button>
                        </div>
                    ))}
                    <button type="button" onClick={() => addArrayField("sizes", "")} className="text-blue-600">+ Add Size</button>
                </div>

                {/* Images */}
                <div>
                    <h4 className="font-semibold mb-1">Image URLs (hosted on imgbb)</h4>
                    {formData.images.map((img, i) => (
                        <div key={i} className="flex gap-2 mb-2">
                            <input value={img} onChange={(e) => handleArrayChange("images", i, e.target.value)} className="flex-1 border p-1 rounded" />
                            <button type="button" onClick={() => removeArrayField("images", i)} className="text-red-600">Remove</button>
                        </div>
                    ))}
                    <button type="button" onClick={() => addArrayField("images", "")} className="text-blue-600">+ Add Image</button>
                </div>

                {/* Features */}
                <div>
                    <h4 className="font-semibold mb-1">Features</h4>
                    {formData.features.map((f, i) => (
                        <div key={i} className="flex gap-2 mb-2">
                            <input value={f} onChange={(e) => handleArrayChange("features", i, e.target.value)} className="flex-1 border p-1 rounded" />
                            <button type="button" onClick={() => removeArrayField("features", i)} className="text-red-600">Remove</button>
                        </div>
                    ))}
                    <button type="button" onClick={() => addArrayField("features", "")} className="text-blue-600">+ Add Feature</button>
                </div>

                {/* Tabs */}
                <input name="tabs.description" placeholder="Tab: Description" value={formData.tabs.description} onChange={handleInputChange} className="w-full border p-2 rounded" />
                <input name="tabs.shipping" placeholder="Tab: Shipping" value={formData.tabs.shipping} onChange={handleInputChange} className="w-full border p-2 rounded" />

                {/* Highlights */}
                <div>
                    <h4 className="font-semibold mb-1">Highlights</h4>
                    {formData.highlights.map((h, i) => (
                        <div key={i} className="space-y-2 mb-4">
                            <input value={h.title} placeholder="Title" onChange={(e) => handleArrayChange("highlights", i, e.target.value, "title")} className="w-full border p-1 rounded" />
                            <input value={h.img} placeholder="Image URL" onChange={(e) => handleArrayChange("highlights", i, e.target.value, "img")} className="w-full border p-1 rounded" />
                            <input value={h.desc} placeholder="Description" onChange={(e) => handleArrayChange("highlights", i, e.target.value, "desc")} className="w-full border p-1 rounded" />
                            <button type="button" onClick={() => removeArrayField("highlights", i)} className="text-red-600">Remove</button>
                        </div>
                    ))}
                    <button type="button" onClick={() => addArrayField("highlights", { title: "", img: "", desc: "" })} className="text-blue-600">+ Add Highlight</button>
                </div>

                <button type="submit" className="bg-black text-white px-4 py-2 rounded">Submit Product</button>
            </form>
        </div>
    );
};

export default AdminAddProduct;