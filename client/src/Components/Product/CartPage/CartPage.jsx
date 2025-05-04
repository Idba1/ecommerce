import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const CartPage = () => {
    const { user } = useContext(AuthContext);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/cart?email=${user.email}`)
                .then(res => res.json())
                .then(data => setCartItems(data));
        }
    }, [user]);

    return (
        <div className="container mx-auto py-6">
            <h2 className="text-2xl font-bold mb-4">My Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul className="space-y-4">
                    {cartItems.map((item) => (
                        <li key={item._id} className="border p-4 rounded shadow">
                            <img src={item.image} className="w-16 h-16" alt={item.title} />
                            <h3>{item.title}</h3>
                            <p>Price: ${item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CartPage;