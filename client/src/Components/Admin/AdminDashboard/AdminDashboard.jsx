import { useEffect, useState, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../../Provider/AuthProvider";

const AdminDashboard = () => {
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/collection").then(res => setProducts(res.data));
        axios.get("http://localhost:5000/orders").then(res => setOrders(res.data));
    }, []);

    const handleDelete = async (id) => {
        if (confirm("Are you sure you want to delete this product?")) {
            await axios.delete(`http://localhost:5000/collection/${id}`);
            setProducts(products.filter(p => p._id !== id));
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Products Section */}
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-xl font-semibold">All Products</h2>
                        <Link to="/admin-dashboard/add-product" className="bg-black text-white px-4 py-1 rounded">+ Add Product</Link>
                    </div>
                    <div className="space-y-4 max-h-[400px] overflow-y-auto">
                        {products.map(product => (
                            <div key={product._id} className="flex justify-between items-center border p-3 rounded">
                                <div>
                                    <h3 className="font-semibold">{product.title}</h3>
                                    <p className="text-sm text-gray-500">${product.price}</p>
                                </div>
                                <button onClick={() => handleDelete(product._id)} className="text-red-500 hover:underline">Delete</button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Orders Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">Orders</h2>
                    <div className="space-y-4 max-h-[400px] overflow-y-auto">
                        {orders.map(order => (
                            <div key={order._id} className="border p-3 rounded">
                                <p><strong>Email:</strong> {order.email}</p>
                                <p><strong>Items:</strong> {order.items?.length}</p>
                                <p><strong>Total:</strong> ${order.total}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <Outlet />
             */}
        </div>
    );
};

export default AdminDashboard;