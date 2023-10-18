import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer";
// import Banner from "./Components/Banner";

const Root = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/chPwXGb/cropped-1366-768-456498.jpg')]">
            <Navbar></Navbar>
            
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;