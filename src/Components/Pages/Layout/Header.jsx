import React from "react";
// import { Link, useNavigate } from "react-router-dom";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import query from "../../../assets/images/query.png";
const Header = () => {
  return (
    <div className="mt-16  py-4">
      <div className="md:flex justify-between items-center w-11/12 mx-auto">
        
        <div className="md:grid md:grid-cols-4  md:space-x-2 space-x-2  sm:space-x-4 space-y-5 md:space-y-0">
          <button className="px-4 py-2 text-center  text-white font-medium rounded-md bg-red-950 transition-colors">
            <Link
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              to="queries"
            >
              Recent Queries
            </Link>
          </button>
          <button  className="px-4 py-2 text-center  text-white font-medium rounded-md bg-red-950 transition-colors">
            <Link
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              to="ai"
             
            >
              AI Generated
            </Link>
          </button>
          <button  className="px-4 py-2 text-center  text-white font-medium rounded-md bg-red-950 transition-colors">
            <Link
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              to="about"
              // className="px-4 py-2 bg-red-950 text-center  text-white font-medium rounded-md  transition-colors"
            >
              About Us
            </Link>
          </button>
          <button  className="px-4 py-2 text-center  text-white font-medium rounded-md bg-red-950 transition-colors">
            <Link
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              to="explore"
              // className="px-4 py-2 text-center bg-red-950  text-white font-medium rounded-md  transition-colors"
            >
              Product Explorer
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
