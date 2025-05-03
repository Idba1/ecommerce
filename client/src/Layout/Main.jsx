import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Main = () => {
    return (
        <div className="container mx-auto">
            {/* Navbar */}
            <Navbar></Navbar>
            {/* outlet */}
            <div className="min-h-[calc(100vh-306px)]">
                <Outlet></Outlet>
            </div>
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default Main;