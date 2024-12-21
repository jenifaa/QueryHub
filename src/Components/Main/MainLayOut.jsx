import { Outlet } from "react-router-dom";
import Footer from "../Pages/Layout/Footer";
import Navbar from "../Pages/Layout/Navbar";

const MainLayOut = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-270px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayOut;
