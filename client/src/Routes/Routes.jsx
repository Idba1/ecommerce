import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Registration from "../Pages/Authentication/Register";
import Login from "../Pages/Authentication/LogIn";
import Home from "../Components/Home/Home/Home";
import ProductListing from "../Components/Product/ProductListing/ProductListing";
import Clothe from "../Components/Product/Clothe/Clothe";
import CategoryPage from "../Components/Product/CategoryPage/CategoryPage";
import ProductDetails from "../Components/Product/ProductDetails/ProductDetails";
import AdminAddProduct from "../Components/Product/AdminAddProduct/AdminAddProduct";
import CartPage from "../Components/Product/CartPage/CartPage";
import AdminDashboard from "../Components/Admin/AdminDashboard/AdminDashboard";
import AdminMainDashboard from "../Components/Admin/AdminMainDashboard/AdminMainDashboard";
import ViewAllProducts from "../Components/Admin/ViewAllProducts/ViewAllProducts";
import OrderManagement from "../Components/Admin/OrderManagement/OrderManagement";
import ReportGenerate from "../Components/Admin/ReportGenerate/ReportGenerate";
import Settings from "../Components/Admin/Settings/Settings";
import ProtectedAdminRoute from "../Pages/Authentication/ProtectedAdminRoute";
import AdminLogin from "../Pages/Authentication/AdminLogin";
import ProtectedRoute from "../Pages/Authentication/ProtectedRoute";
import FrequentlyAskedQuestions from "../Components/Footer/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import Account from "../Components/Footer/Account/Account";
import ShippingCharge from "../Components/Footer/ShippingCharge/ShippingCharge";
import ReturnRefund from "../Components/Footer/ReturnRefund/ReturnRefund";
import TermsAndConditions from "../Components/Footer/TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "../Components/Footer/PrivacyPolicy/PrivacyPolicy";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:
            [
                {
                    path: '/',
                    element: <Home></Home>,
                },
                {
                    path: '/registration',
                    element: <Registration></Registration>,
                },
                {
                    path: '/login',
                    element: <Login></Login>,
                },
                {
                    path: '/shop',
                    element: <ProductListing></ProductListing>,
                },
                {
                    path: '/clothes',
                    element: <Clothe></Clothe>,
                },
                {
                    path: '/category/:categoryName',
                    element: <CategoryPage />
                },
                {
                    path: '/product/:id',
                    element: <ProductDetails />
                },
                // {
                //     path: '/add-product',
                //     element: <AdminAddProduct />
                // },
                {
                    path: '/cart',
                    element: <ProtectedRoute>
                        <CartPage />
                    </ProtectedRoute>
                },
                {
                    path: '/FrequentlyAskedQuestions',
                    element: <FrequentlyAskedQuestions />
                },
                {
                    path: '/account',
                    element: <ProtectedRoute>
                        <Account />
                    </ProtectedRoute>
                },
                {
                    path: '/shipping-charge',
                    element: <ShippingCharge />
                },
                {
                    path: '/return-refund',
                    element: <ReturnRefund />
                },
                {
                    path: '/terms-and-conditions',
                    element: <TermsAndConditions />
                },
                {
                    path: '/privacy-policy',
                    element: <PrivacyPolicy />
                },
                {
                    path: '/admin-login',
                    element: <AdminLogin />
                },
            ]
    }, {
        path: '/admin-dashboard',
        element: <ProtectedAdminRoute>
            <AdminMainDashboard />
        </ProtectedAdminRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/admin-dashboard',
                element: <AdminDashboard />,
            },
            {
                path: 'add-product',
                element: <ProtectedAdminRoute>
                    <AdminAddProduct />
                </ProtectedAdminRoute>,
            },
            {
                path: 'view-all-products',
                element: <ViewAllProducts />,
            },
            {
                path: 'orders',
                element: <OrderManagement />,
            },
            {
                path: 'reports',
                element: <ReportGenerate />,
            },
            {
                path: 'settings',
                element: <Settings />,
            },
        ]
    }
]);


export default Routes;