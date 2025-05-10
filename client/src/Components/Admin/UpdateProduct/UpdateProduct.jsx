import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const UpdateProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        title: "",
        price: "",
        oldPrice: "",
        rating: 0,
        sizes: [],
        description: "",
        features: [],
        tabs: { description: "", shipping: "" },
        highlights: [],
        category: "clothes",
        images: [],
        colors: [{ color: "", quantity: "" }],
    });

    useEffect(() => {
        fetch(`http://localhost:5000/collection/${id}`)
            .then(res => res.json())
            .then(data => {
                setFormData({
                    title: data.title || "",
                    price: data.price || "",
                    oldPrice: data.oldPrice || "",
                    rating: data.rating || 0,
                    sizes: data.sizes || [],
                    description: data.description || "",
                    features: data.features || [],
                    tabs: data.tabs || { description: "", shipping: "" },
                    highlights: data.highlights || [],
                    category: data.category || "clothes",
                    images: data.images || [],
                    colors: data.colors || [{ color: "", quantity: "" }],
                });
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching product:", err);
                setLoading(false);
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleArrayChange = (field, index, value) => {
        const updated = [...formData[field]];
        updated[index] = value;
        setFormData(prev => ({ ...prev, [field]: updated }));
    };

    const handleTabsChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            tabs: {
                ...prev.tabs,
                [field]: value,
            },
        }));
    };

    const handleHighlightChange = (index, field, value) => {
        const updated = [...formData.highlights];
        updated[index][field] = value;
        setFormData(prev => ({ ...prev, highlights: updated }));
    };

    const handleColorChange = (index, field, value) => {
        const updated = [...formData.colors];
        updated[index][field] = value;
        setFormData(prev => ({ ...prev, colors: updated }));
    };

    const addColorField = () => {
        setFormData(prev => ({
            ...prev,
            colors: [...prev.colors, { color: "", quantity: "" }],
        }));
    };

    const removeColorField = (index) => {
        if (formData.colors.length > 1) {
            const updated = [...formData.colors];
            updated.splice(index, 1);
            setFormData(prev => ({ ...prev, colors: updated }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedProduct = {
            ...formData,
            price: Number(formData.price),
            oldPrice: Number(formData.oldPrice),
            rating: Number(formData.rating),
            sizes: formData.sizes.map(s => s.trim()),
            features: formData.features.map(f => f.trim()),
            colors: formData.colors.map(c => ({
                color: c.color.trim(),
                quantity: Number(c.quantity),
            })),
        };

        try {
            const res = await fetch(`http://localhost:5000/collection/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedProduct),
            });
            const result = await res.json();
            if (result.modifiedCount > 0) {
                alert("Product updated successfully!");
                navigate("/admin-dashboard/view-all-products");
            } else {
                alert("No changes were made.");
            }
        } catch (error) {
            console.error("Error updating product:", error);
        }
    };

    if (loading) return <div className="p-6">Loading product data...</div>;

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded">
            <h2 className="text-2xl font-bold mb-4">Update Product</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full p-2 border" placeholder="Title" required />
                <input type="number" name="price" value={formData.price} onChange={handleChange} className="w-full p-2 border" placeholder="Price" required />
                <input type="number" name="oldPrice" value={formData.oldPrice} onChange={handleChange} className="w-full p-2 border" placeholder="Old Price" />
                <input type="number" name="rating" value={formData.rating} onChange={handleChange} className="w-full p-2 border" placeholder="Rating" />

                <input type="text" value={formData.sizes.join(", ")} onChange={(e) => setFormData({ ...formData, sizes: e.target.value.split(",") })} className="w-full p-2 border" placeholder="Sizes (comma separated)" />
                <textarea name="description" value={formData.description} onChange={handleChange} className="w-full p-2 border" placeholder="Description" />
                <textarea value={formData.features.join("\n")} onChange={(e) => setFormData({ ...formData, features: e.target.value.split("\n") })} className="w-full p-2 border" placeholder="Features (one per line)" />

                <textarea value={formData.tabs.description} onChange={(e) => handleTabsChange("description", e.target.value)} className="w-full p-2 border" placeholder="Tab Description" />
                <textarea value={formData.tabs.shipping} onChange={(e) => handleTabsChange("shipping", e.target.value)} className="w-full p-2 border" placeholder="Tab Shipping" />

                <select name="category" value={formData.category} onChange={handleChange} className="w-full p-2 border">
                    <option value="clothes">Clothes</option>
                    <option value="shoes">Shoes</option>
                    <option value="watches">Watches</option>
                    <option value="winter">Winter</option>
                    <option value="eyeglasses">Eyeglasses</option>
                    <option value="electronics">Electronics</option>
                    <option value="accessories">Accessories</option>
                </select>

                {/* Colors */}
                <div className="space-y-2">
                    <label className="block font-semibold">Colors and Quantities</label>
                    {formData.colors.map((cq, index) => (
                        <div key={index} className="flex gap-2 items-center">
                            <input
                                type="text"
                                value={cq.color}
                                onChange={(e) => handleColorChange(index, "color", e.target.value)}
                                placeholder="Color"
                                className="w-1/2 p-2 border"
                                required
                            />
                            <input
                                type="number"
                                value={cq.quantity}
                                onChange={(e) => handleColorChange(index, "quantity", e.target.value)}
                                placeholder="Quantity"
                                className="w-1/2 p-2 border"
                                required
                            />
                            {formData.colors.length > 1 && (
                                <button type="button" onClick={() => removeColorField(index)} className="text-red-600">✕</button>
                            )}
                        </div>
                    ))}
                    <button type="button" onClick={addColorField} className="text-blue-600">+ Add Color</button>
                </div>

                {/* Highlights */}
                <label className="block font-semibold">Highlights (3)</label>
                {formData.highlights.map((h, i) => (
                    <div key={i} className="border p-2 rounded mb-2 space-y-1">
                        <input type="text" value={h.title} onChange={(e) => handleHighlightChange(i, "title", e.target.value)} placeholder="Highlight Title" className="w-full p-1 border" />
                        <input type="text" value={h.desc} onChange={(e) => handleHighlightChange(i, "desc", e.target.value)} placeholder="Highlight Description" className="w-full p-1 border" />
                        {h.img && <img src={h.img} alt={`Highlight ${i}`} className="w-24 h-24 object-cover" />}
                    </div>
                ))}

                {/* Preview Images */}
                <div>
                    <label className="block font-semibold">Product Images</label>
                    <div className="flex gap-2 flex-wrap">
                        {formData.images.map((img, i) => (
                            <img key={i} src={img} alt={`product-${i}`} className="w-24 h-24 object-cover rounded" />
                        ))}
                    </div>
                </div>

                <button type="submit" className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600">Update Product</button>
            </form>
        </div>
    );
};

export default UpdateProduct;
