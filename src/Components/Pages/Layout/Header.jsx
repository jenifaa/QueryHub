import React from "react";
import { Link, useNavigate } from "react-router-dom";
import query from "../../../assets/images/query.png";
const Header = () => {
  return (
    <div className="lg:mt-20 md:mt-40 mt-40 py-4 ">
      <div className="md:flex justify-between items-center w-10/12 mx-auto">
        <div className="flex items-center">
          <img className="w-16" src={query} alt="" />
          <h1 className="font-bold text-3xl font">
            <span className="text-4xl font-extrabold">Q</span>ueryHive
          </h1>
        </div>
        <div className="md:flex gap-4">
          <button className="px-4 py-2  text-white font-medium rounded-md bg-red-950 transition-colors">
            Recent Queries
          </button>
          <button className="px-4 py-2 bg-red-950  text-white font-medium rounded-md  transition-colors">
            About Us
          </button>
          <button className="px-4 py-2 bg-red-950  text-white font-medium rounded-md  transition-colors">
            Product Explorer
          </button>
          <button className="px-4 py-2 bg-red-950  text-white font-medium rounded-md transition-colors">
            AI Generated
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
