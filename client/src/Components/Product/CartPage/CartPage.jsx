import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const CartPage = () => {
    const { user } = useContext(AuthContext);
    const [cartItems, setCartItems] = useState([]);

    const fetchCart = () => {
        if (user) {
            fetch(`http://localhost:5000/cart?email=${user.email}`)
                .then(res => res.json())
                .then(data => setCartItems(data));
        }
    };

    useEffect(() => {
        fetchCart();
    }, [user]);

    const updateQuantity = async (id, quantity) => {
        if (quantity < 1) return;
        await fetch(`http://localhost:5000/cart/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ quantity }),
        });
        fetchCart();
    };

    const removeItem = async (id) => {
        await fetch(`http://localhost:5000/cart/${id}`, { method: "DELETE" });
        fetchCart();
    };

    const shipping = 150;
    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const total = subtotal + shipping;

    return (
        <div className="max-w-5xl mx-auto py-10 px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">My Cart</h2>

            {cartItems.length === 0 ? (
                <div className="text-center text-gray-600">
                    <p>Your cart is empty.</p>
                    <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">
                        Go to homepage
                    </Link>
                </div>
            ) : (
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="md:col-span-2 space-y-6">
                        {cartItems.map((item) => (
                            <div key={item._id} className="flex items-center gap-4 border p-4 rounded shadow-sm bg-white">
                                <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded" />
                                <div className="flex-1">
                                    <h3 className="font-semibold text-lg">{item.title}</h3>
                                    <p className="text-sm text-gray-600">Size: {item.size}</p>
                                    <p className="text-sm text-gray-600">Price: ${item.price.toFixed(2)}</p>

                                    {/* Quantity Controls */}
                                    <div className="flex items-center gap-2 mt-2">
                                        <button
                                            onClick={() => updateQuantity(item._id, item.quantity - 1)}
                                            className="px-2 py-1 border rounded hover:bg-gray-100"
                                        >-</button>
                                        <span className="w-8 text-center">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item._id, item.quantity + 1)}
                                            className="px-2 py-1 border rounded hover:bg-gray-100"
                                        >+</button>
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeItem(item._id)}
                                    className="text-red-500 hover:text-red-700 font-semibold text-sm"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Summary + Checkout */}
                    <div className="bg-white p-6 rounded shadow space-y-4 h-fit">
                        <h3 className="text-xl font-semibold border-b pb-2">Order Summary</h3>
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Shipping</span>
                            <span>${shipping.toFixed(2)}</span>
                        </div>
                        <hr />
                        <div className="flex justify-between font-semibold text-lg">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <Link
                            to="/payment"
                            className="block w-full bg-black text-white text-center py-2 rounded hover:bg-gray-800 transition"
                        >
                            Proceed to Checkout
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;