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
