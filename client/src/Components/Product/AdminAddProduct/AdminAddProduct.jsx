// AdminProductForm.jsx
import { useState } from "react";
import axios from "axios";

const AdminProductForm = () => {
    const [formData, setFormData] = useState({
        title: "",
        price: "",
        oldPrice: "",
        rating: 0,
        sizes: "",
        description: "",
        features: "",
        tabDescription: "",
        tabShipping: "",
        highlights: [
            { title: "", img: "", desc: "" },
            { title: "", img: "", desc: "" },
            { title: "", img: "", desc: "" },
        ],
        category: "clothes",
    });

    const [images, setImages] = useState([]);
    const [highlightImages, setHighlightImages] = useState([]);
    const [uploading, setUploading] = useState(false);

    const handleImageUpload = async (imageFiles) => {
        const apiKey = import.meta.env.VITE_IMGBB_API_KEY;
        const urls = [];

        for (const img of imageFiles) {
            const form = new FormData();
            form.append("image", img);
            const res = await axios.post(
                `https://api.imgbb.com/1/upload?key=${apiKey}`,
                form
            );
            urls.push(res.data.data.url);
        }

        return urls;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (images.length < 4 || images.length > 6) {
            return alert("Please upload 4 to 6 product images.");
        }

        if (highlightImages.length !== 3) {
            return alert("Please upload exactly 3 highlight images.");
        }

        try {
            setUploading(true);
            const productImageUrls = await handleImageUpload(images);
            const highlightImageUrls = await handleImageUpload(highlightImages);

            const highlights = formData.highlights.map((highlight, index) => ({
                ...highlight,
                img: highlightImageUrls[index],
            }));

            const product = {
                title: formData.title,
                price: Number(formData.price),
                oldPrice: Number(formData.oldPrice),
                rating: Number(formData.rating),
                sizes: formData.sizes.split(",").map((s) => s.trim()),
                images: productImageUrls,
                description: formData.description,
                features: formData.features.split("\n").map((f) => f.trim()),
                tabs: {
                    description: formData.tabDescription,
                    shipping: formData.tabShipping,
                },
                highlights,
                category: formData.category,
            };

            await axios.post("http://localhost:5000/collection", product);
            alert("Product posted successfully!");
        } catch (error) {
            console.error(error);
            alert("Failed to upload product.");
        } finally {
            setUploading(false);
        }
    };

    const handleHighlightChange = (index, field, value) => {
        const newHighlights = [...formData.highlights];
        newHighlights[index][field] = value;
        setFormData({ ...formData, highlights: newHighlights });
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" required placeholder="Title" className="w-full p-2 border" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
                <input type="number" required placeholder="Price" className="w-full p-2 border" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} />
                <input type="number" required placeholder="Old Price" className="w-full p-2 border" value={formData.oldPrice} onChange={(e) => setFormData({ ...formData, oldPrice: e.target.value })} />
                <input type="number" required placeholder="Rating" className="w-full p-2 border" value={formData.rating} onChange={(e) => setFormData({ ...formData, rating: e.target.value })} />
                <input type="text" required placeholder="Sizes (comma separated)" className="w-full p-2 border" value={formData.sizes} onChange={(e) => setFormData({ ...formData, sizes: e.target.value })} />
                <textarea required placeholder="Description" className="w-full p-2 border" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
                <textarea required placeholder="Features (one per line)" className="w-full p-2 border" value={formData.features} onChange={(e) => setFormData({ ...formData, features: e.target.value })} />
                <textarea required placeholder="Tab Description" className="w-full p-2 border" value={formData.tabDescription} onChange={(e) => setFormData({ ...formData, tabDescription: e.target.value })} />
                <textarea required placeholder="Tab Shipping" className="w-full p-2 border" value={formData.tabShipping} onChange={(e) => setFormData({ ...formData, tabShipping: e.target.value })} />

                <select className="w-full p-2 border" value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
                    <option value="clothes">Clothes</option>
                    <option value="shoes">Shoes</option>
                    <option value="watches">Watches</option>
                    <option value="winter">Winter</option>
                    <option value="eyeglasses">Eyeglasses</option>
                    <option value="electronics">Electronics</option>
                    <option value="accessories">Accessories</option>
                </select>

                <label className="block">Product Images (4–6):</label>
                {/* Product Images */}
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={(e) =>
                        setImages((prev) => [...prev, ...Array.from(e.target.files)])
                    }
                    className="w-full border p-2"
                />


                <label className="block">Highlights (3 items):</label>
                {formData.highlights.map((h, index) => (
                    <div key={index} className="border p-2 space-y-1">
                        <input type="text" placeholder="Highlight Title" value={h.title} className="w-full p-1 border" onChange={(e) => handleHighlightChange(index, "title", e.target.value)} />
                        <input type="text" placeholder="Highlight Description" value={h.desc} className="w-full p-1 border" onChange={(e) => handleHighlightChange(index, "desc", e.target.value)} />
                    </div>
                ))}

                <label className="block">Highlight Images (3):</label>

                {/* Highlight Images */}
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={(e) =>
                        setHighlightImages((prev) => [...prev, ...Array.from(e.target.files)])
                    }
                    className="w-full border p-2"
                />

                <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded" disabled={uploading}>
                    {uploading ? "Uploading..." : "Submit Product"}
                </button>
            </form>
        </div>
    );
};

export default AdminProductForm;
