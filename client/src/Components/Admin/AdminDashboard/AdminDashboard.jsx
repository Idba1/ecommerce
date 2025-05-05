import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    LineChart,
    Line,
    PieChart,
    Pie,
    Cell,
} from "recharts";
import {
    Home,
    PlusSquare,
    List,
    PackageSearch,
    FileBarChart2,
    Settings,
    LogOut,
    CircleDollarSign,
    TrendingUp,
    Users,
} from "lucide-react";
import { Link } from "react-router-dom";

// UI Components
export function Card({ className = "", children }) {
    return <div className={`bg-white rounded-2xl shadow p-4 ${className}`}>{children}</div>;
}

export function CardHeader({ children, className = "" }) {
    return <div className={`mb-2 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = "" }) {
    return <h3 className={`text-lg font-semibold text-gray-800 ${className}`}>{children}</h3>;
}

export function CardContent({ children, className = "" }) {
    return <div className={`text-sm text-gray-600 ${className}`}>{children}</div>;
}

const AdminDashboard = () => {
    const revenueData = [
        { name: "Sun", thisWeek: 1000, lastWeek: 1200 },
        { name: "Mon", thisWeek: 2000, lastWeek: 2200 },
        { name: "Tue", thisWeek: 2500, lastWeek: 2100 },
        { name: "Wed", thisWeek: 3000, lastWeek: 2700 },
        { name: "Thu", thisWeek: 2800, lastWeek: 3000 },
        { name: "Fri", thisWeek: 3200, lastWeek: 2900 },
        { name: "Sat", thisWeek: 2900, lastWeek: 2700 },
    ];

    const customerPie = [
        { name: "New", value: 65 },
        { name: "Returning", value: 35 },
    ];

    const COLORS = ["#facc15", "#e5e7eb"]; // yellow-500 and gray-200

    const navItems = [
        { label: "Home", icon: <Home className="w-5 h-5" />, to: "/" },
        { label: "Add New Product", icon: <PlusSquare className="w-5 h-5" />, to: "/admin-dashboard/add-product" },
        { label: "View All Products", icon: <List className="w-5 h-5" />, to: "/admin-dashboard/products" },
        { label: "Order Management", icon: <PackageSearch className="w-5 h-5" />, to: "/admin-dashboard/orders" },
        { label: "Report Generate", icon: <FileBarChart2 className="w-5 h-5" />, to: "/admin-dashboard/reports" },
        { label: "Settings", icon: <Settings className="w-5 h-5" />, to: "/admin-dashboard/settings" },
    ];

    return (
        <div className="p-4 md:p-8 grid grid-cols-1 md:grid-cols-6 gap-6 bg-gray-50 min-h-screen">
            <aside className="col-span-1 bg-yellow-500 text-white p-4 rounded-xl flex flex-col justify-between">
                <div>
                    <h1 className="text-2xl font-bold mb-6">E-24 Admin</h1>
                    <nav className="space-y-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                to={item.to}
                                className="flex items-center gap-2 hover:text-gray-100 transition"
                            >
                                {item.icon}
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
                <Link to="/logout" className="flex items-center gap-2 text-sm mt-4 hover:text-gray-100">
                    <LogOut className="w-4 h-4" />
                    Logout
                </Link>
            </aside>

            <main className="col-span-5 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                        <CardHeader className="flex items-center gap-2">
                            <TrendingUp className="text-yellow-500" />
                            <CardTitle>Total Sale</CardTitle>
                        </CardHeader>
                        <CardContent className="text-2xl font-bold">$37,890.58</CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex items-center gap-2">
                            <CircleDollarSign className="text-yellow-500" />
                            <CardTitle>Total Revenue</CardTitle>
                        </CardHeader>
                        <CardContent className="text-2xl font-bold">$12,890.57</CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex items-center gap-2">
                            <Users className="text-yellow-500" />
                            <CardTitle>Total Profit</CardTitle>
                        </CardHeader>
                        <CardContent className="text-2xl font-bold">$15,190.59</CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Revenue (This vs Last Week)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={revenueData}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="thisWeek" stroke="#facc15" name="This Week" />
                                <Line type="monotone" dataKey="lastWeek" stroke="#f43f5e" name="Last Week" />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Customer Ratio</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={200}>
                                <PieChart>
                                    <Pie data={customerPie} cx="50%" cy="50%" outerRadius={60} dataKey="value">
                                        {customerPie.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="mt-2 text-sm text-gray-600">
                                65% New Customers, 35% Returning Customers
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Satisfaction Rate</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-4xl font-bold text-red-500">96.99%</div>
                            <p className="text-sm text-gray-600">Based on customer likes</p>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;  