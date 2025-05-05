import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; 

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const adminEmail = "tuhincseadmin@gmail.com";
        const adminPassword = "bolboNAendTHISpermission";

        if (email === adminEmail && password === adminPassword) {
            localStorage.setItem("isAdmin", "true");
            navigate("/admin-dashboard");
        } else {
            Swal.fire({
                icon: "error",
                title: "Access Denied",
                text: "Invalid credentials. Only the admin is allowed.",
            });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleLogin}
                className="bg-white p-6 rounded-lg shadow-lg w-96"
            >
                <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Admin Email"
                    required
                    className="w-full border p-2 rounded mb-4"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    className="w-full border p-2 rounded mb-4"
                />
                <button
                    type="submit"
                    className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default AdminLogin;