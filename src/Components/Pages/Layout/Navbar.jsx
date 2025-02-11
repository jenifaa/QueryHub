import React, { useContext, useEffect, useState } from "react";

import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
// import logo from "../../../assets/images/queries.png";
import { CiLogout } from "react-icons/ci";

import { BsPersonCircle } from "react-icons/bs";
import useAuth from "../../Hooks/useAuth";
import { CiLogin } from "react-icons/ci";
import Loading from "./Loading";
import { IoMoon, IoPersonOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import { IoMdSunny } from "react-icons/io";

const Navbar = () => {
  const { user, setUser, logOut, updateUserProfile, loading } = useAuth();

  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const isHomepage = location.pathname === "/";
  const [theme, setTheme] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("theme") || "light"
      : "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dracula" : "light");
  };

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500  ${
        scrolled ? "bg-white text-black shadow-lg" : "bg-red-950 text-white"
      }`}
    >
      <nav className="flex justify-between items-center px-5 md:px-12 py-3">
        <div className="hidden lg:flex gap-6 ">
          <NavLink
            to="/"
            className="hover:text-blue-500 hover:font-bold text-sm flex items-center"
          >
            Home
          </NavLink>
          <NavLink
            to="/queries"
            className="hover:text-blue-500 hover:font-bold text-sm "
          >
            Queries
          </NavLink>
          <NavLink
            to="/blog"
            className="hover:text-blue-500 hover:font-bold text-sm "
          >
            Our Blog
          </NavLink>
          {user && user?.email ? (
            <>
              <NavLink
                to="/recommendationForme"
                className="hover:text-blue-500 hover:font-bold text-sm "
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
                className="hover:text-blue-500 hover:font-bold text-sm "
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
                className="hover:text-blue-500 hover:font-bold text-sm "
              >
                My recommendations
              </NavLink>
            </>
          ) : (
            ""
          )}
          {user && user?.email ? (
            <>
              <NavLink
                to="/allItems"
                className="hover:text-blue-500 hover:font-bold text-sm "
              >
                All-Queries
              </NavLink>
            </>
          ) : (
            ""
          )}
          {user && user?.email ? (
            <>
              <NavLink
                to="/addQueries"
                className="hover:text-blue-500 hover:font-bold text-sm "
              >
                Add Queries
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
          <button className="" onClick={toggleTheme}>
            {theme === "light" ? (
              <>
                <IoMoon className="text-3xl"/>
              </>
            ) : (
              <>
                <IoMdSunny className="text-3xl" />
              </>
            )}
          </button>
          {user && user?.photoURL ? (
            <img
              src={user?.photoURL}
              title={user?.displayName || "User"}
              className="w-10 h-10  rounded-full md:flex"
            ></img>
          ) : (
            <BsPersonCircle className="text-4xl" />
          )}

          {user && user?.email ? (
            <div>
              <NavLink>
                <button
                  onClick={logOut}
                  className="px-3 py-2 bg-[#FFFFFF] text-[#0575E6] rounded-md flex text-sm font-bold items-center gap-1"
                >
                  <CiLogout />
                  LogOut
                </button>
              </NavLink>
            </div>
          ) : (
            <>
              <NavLink to="/login">
                <button className="px-4 py-2 bg-[#FFFFFF] text-[#0575E6] text-sm font-bold rounded-md flex items-center gap-1">
                  <CiLogin />
                  Sign In
                </button>
              </NavLink>
              <NavLink to="/register">
                <button className="px-3 py-2 bg-[#FFFFFF] text-[#0575E6] rounded-md font-bold text-sm flex items-center gap-1">
                  <IoPersonOutline />
                  Sign Up
                </button>
              </NavLink>
            </>
          )}
        </div>
      </nav>

      {menuOpen && (
        <div className="flex flex-col space-y-4 px-6 py-4 bg-gradient-to-r from-[#87CEEB] via-[#B0C4DE] to-[#B0E0E6]  text-white lg:hidden">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/queries">Queries</NavLink>
          {user && user?.email ? (
            <>
              <NavLink to="/recommendationForme" className=" ">
                Recommendations For Me
              </NavLink>
            </>
          ) : (
            ""
          )}
          {user && user?.email ? (
            <>
              <NavLink to="/myQueries">My Queries</NavLink>
            </>
          ) : (
            ""
          )}
          {user && user?.email ? (
            <>
              <NavLink to="/myRecommendation">My recommendations</NavLink>
            </>
          ) : (
            ""
          )}
          {user && user?.email ? (
            <>
              <NavLink to="/allItems">All-Queries</NavLink>
            </>
          ) : (
            ""
          )}
          {user && user?.email ? (
            <>
              <NavLink to="/addQueries">Add Queries</NavLink>
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
