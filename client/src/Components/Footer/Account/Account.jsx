import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import CartPage from '../../Product/CartPage/CartPage';

const Account = () => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-500">Loading your profile...</p>
            </div>
        );
    }

    return (
        <div className="px-4 py-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">My Account</h1>

            {user ? (
                <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
                    <img
                        src={user.photoURL || 'https://i.ibb.co/9T9jtzV/user-profile.png'}
                        alt="User"
                        className="w-24 h-24 rounded-full border-4 border-yellow-500 mb-4 object-cover"
                    />
                    <h2 className="text-xl font-semibold text-gray-800">{user.displayName || 'Anonymous User'}</h2>
                    <p className="text-gray-600">{user.email}</p>
                    <p className="text-gray-400 text-sm mt-2">User ID: {user.uid}</p>
                </div>
            ) : (
                <p className="text-gray-700 text-center">
                    You are not logged in. Please log in to view your account.
                </p>
            )}
            <CartPage></CartPage>
        </div>
    );
};

export default Account;
