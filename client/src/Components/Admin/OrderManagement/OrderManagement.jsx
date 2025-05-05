import { Link } from "react-router-dom";

const OrderManagement = () => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Order Management</h2>
            <p className="text-gray-700">This section will include order tracking and status updates.</p>
            <Link
                to="/admin-dashboard"
                className="bg-yellow-500 mt-10 inline-block text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
            >
                Back to Admin Dashboard
            </Link>
        </div>
    );
};

export default OrderManagement;