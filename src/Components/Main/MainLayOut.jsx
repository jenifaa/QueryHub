import { Outlet } from "react-router-dom";
import Footer from "../Pages/Layout/Footer";
import Navbar from "../Pages/Layout/Navbar";
import Header from "../Pages/Layout/Header";

const MainLayOut = () => {
  return (
    <div>
        {/* <Header></Header> */}
      <Navbar></Navbar>
      {/* <Header></Header> */}
      <div className="min-h-[calc(100vh-300px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayOut;
