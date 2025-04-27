import React, { useContext, useEffect, useState } from "react";

import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
// import logo from "../../../assets/images/queries.png";
import query from "../../../assets/images/query.png";
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
        <div className="hidden lg:flex items-center gap-6 ">
          <Link to="/" className="flex items-center md:mr-8">
            <img className="w-12" src={query} alt="" />
            <h1 className="font-bold text-xl font">QueryHive</h1>
          </Link>
          <NavLink
            to="/"
            className="hover:text-base hover:font-semibold text-sm flex items-center"
          >
            Home
          </NavLink>
          <NavLink
            to="/queries"
            className="hover:text-base  hover:font-semibold text-sm "
          >
            Queries
          </NavLink>
          <NavLink
            to="/blog"
            className="hover:text-base  hover:font-semibold text-sm"
          >
            Our Blog
          </NavLink>
          <NavLink
            to="/ab"
            className="hover:text-base hover:font-semibold text-sm "
          >
            About Us
          </NavLink>

          {user && user?.email ? (
            <div className="dropdown dropdown-start">
              <div tabIndex={0} role="button" className="text-sm hover:font-semibold">
                My Queries
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <NavLink
                  to="/recommendationForme"
                  className="text-black hover:font-bold text-sm mb-2 bg-base-200 px-2 py-1 rounded-box"
                >
                  Recommendations For Me
                </NavLink>

                <NavLink
                  to="/myQueries"
                  className="text-black hover:font-bold text-sm mb-2 bg-base-200 px-2 py-1 rounded-box"
                >
                  My Queries
                </NavLink>
                <NavLink
                  to="/myRecommendation"
                  className="text-black  hover:font-bold text-sm mb-2 bg-base-200 px-2 py-1 rounded-box"
                >
                  My recommendations
                </NavLink>
                <NavLink
                  to="/allItems"
                  className="text-black  hover:font-bold text-sm mb-2 bg-base-200 px-2 py-1 rounded-box"
                >
                  All-Queries(Table)
                </NavLink>
                <NavLink
                  to="/addQueries"
                  className="text-black hover:font-bold text-sm mb-1 bg-base-200 px-2 py-1 rounded-box"
                >
                  Add Queries
                </NavLink>
              </ul>
            </div>
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
                <IoMoon className="text-3xl" />
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
                  className="px-3 py-2 bg-[#FFFFFF] text-red-950 rounded-md flex text-sm font-bold items-center gap-1"
                >
                  <CiLogout />
                  LogOut
                </button>
              </NavLink>
            </div>
          ) : (
            <>
              <NavLink to="/login">
                
                <button className="px-4 py-2 bg-[#FFFFFF] text-red-950 text-sm font-bold rounded-md flex items-center gap-1">
                  <CiLogin />
                  Sign In
                </button>
              </NavLink>
              {/* <NavLink to="/register">
                <button className="px-3 py-2 bg-[#FFFFFF] text-red-950 rounded-md font-bold text-sm flex items-center gap-1">
                  <IoPersonOutline />
                  Sign Up
                </button>
              </NavLink> */}
            </>
          )}
        </div>
      </nav>

      {menuOpen && (
        <div className="flex flex-col space-y-4 px-6 py-4 bg-gradient-to-r from-[#87CEEB] via-[#B0C4DE] to-[#B0E0E6]  text-white lg:hidden">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/queries">Queries</NavLink>
          <NavLink to="/blog">Our Blog</NavLink>
          <NavLink to="/ab">About Us</NavLink>
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
