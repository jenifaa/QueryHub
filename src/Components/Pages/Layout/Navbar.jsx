import React, { useContext, useEffect, useState } from "react";

import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
// import logo from "../../../assets/images/queries.png";
import { CiLogout } from "react-icons/ci";

import { BsPersonCircle } from "react-icons/bs";
import useAuth from "../../Hooks/useAuth";
import { CiLogin } from "react-icons/ci";
import Loading from "./Loading";
import { IoPersonOutline } from "react-icons/io5";

const Navbar = () => {
  const { user, setUser, logOut, updateUserProfile, loading } = useAuth();

  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const isHomepage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 250);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white text-black shadow-lg"
          : "bg-red-950 text-white"
      }`}
    >
      <nav className="flex justify-between items-center px-8 py-2">
        <div className="hidden lg:flex space-x-6 ">
          <NavLink
            to="/"
            className="hover:text-purple-900 hover:font-bold text-sm flex items-center space-x-2"
          >
            Home
          </NavLink>
          <NavLink
            to="/queries"
            className="hover:text-purple-900 hover:font-bold text-sm "
          >
            Queries
          </NavLink>
          {user && user?.email ? (
            <>
              <NavLink
                to="/recommendationForme"
                className="hover:text-purple-900 hover:font-bold text-sm "
              >
                Recommendations For Me
              </NavLink>
            </>
          ) : (
            ""
          )}
          {user && user?.email ? (
            <>
              <NavLink
                to="/myQueries"
                className="hover:text-purple-900 hover:font-bold text-sm "
              >
                My Queries
              </NavLink>
            </>
          ) : (
            ""
          )}
          {user && user?.email ? (
            <>
              <NavLink
                to="/myRecommendation"
                className="hover:text-purple-900 hover:font-bold text-sm "
              >
                My recommendations
              </NavLink>
            </>
          ) : (
            ""
          )}
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div className="flex   items-center gap-2 lg:gap-5">
          {user && user?.photoURL ? (
            <img
              src={user?.photoURL}
              title={user?.displayName || "User"}
              className="w-10 h-10  rounded-full md:flex"
            ></img>
          ) : (
            <BsPersonCircle className="text-5xl" />
          )}

          {user && user?.email ? (
            <div>
              <NavLink>
                <button
                  onClick={logOut}
                  className="px-4 py-2 bg-[#FFFFFF] text-[#0575E6] rounded-md flex items-center gap-1"
                >
                  <CiLogout />
                  LogOut
                </button>
              </NavLink>
            </div>
          ) : (
            <>
              <NavLink to="/login">
                <button className="px-4 py-2 bg-[#FFFFFF] text-[#0575E6] rounded-md flex items-center gap-1">
                  <CiLogin />
                  Login
                </button>
              </NavLink>
              <NavLink to="/register">
                <button className="px-3 py-2 bg-[#FFFFFF] text-[#0575E6] rounded-md flex items-center gap-1">
                  <IoPersonOutline />
                  Register
                </button>
              </NavLink>
            </>
          )}
        </div>
      </nav>

      {menuOpen && (
        <div className="flex flex-col space-y-4 px-6 py-4 bg-gradient-to-r from-[#87CEEB] via-[#B0C4DE] to-[#B0E0E6]  text-white lg:hidden">
          <NavLink to="/" className="hover:text-gray-200">
            Home
          </NavLink>
          <NavLink to="/queries" className="hover:text-gray-200">
            Queries
          </NavLink>
          {user && user?.email ? (
            <>
              <NavLink
                to="/recommendationForme"
                className="hover:text-purple-900 hover:font-bold hover:text-xl "
              >
                Recommendations For Me
              </NavLink>
            </>
          ) : (
            ""
          )}
          {user && user?.email ? (
            <>
              <NavLink
                to="/myQueries"
                className="hover:text-purple-900 hover:font-bold hover:text-xl "
              >
                My Queries
              </NavLink>
            </>
          ) : (
            ""
          )}
          {user && user?.email ? (
            <>
              <NavLink
                to="/myRecommendation"
                className="hover:text-purple-900 hover:font-bold hover:text-xl "
              >
                My recommendations
              </NavLink>
            </>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
