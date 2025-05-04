import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Registration from "../Pages/Authentication/Register";
import Login from "../Pages/Authentication/LogIn";
import Home from "../Components/Home/Home/Home";
import ProductListing from "../Components/Product/ProductListing/ProductListing";
import Clothe from "../Components/Product/Clothe/Clothe";

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
            ]
    }
]);


export default Routes;