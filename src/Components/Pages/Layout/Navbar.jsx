

import React, { useContext, useEffect, useState } from "react";

import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from '../../../assets/images/queries.png'

import { BsPersonCircle } from "react-icons/bs";
import useAuth from "../../Hooks/useAuth";
import Loading from "./Loading";

const Navbar = () => {
  const { user, setUser, logOut, updateUserProfile, loading } =
    useAuth();
 


  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const isHomepage = location.pathname === "/";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
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
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white text-black shadow-lg"
          : "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white"
      }`}>
      <nav className="flex justify-between items-center md:px-8 py-4">
        <div className="">
          <Link
            to="/"
            className="font font-extrabold text-2xl md:text-4xl flex items-center"
          >
            <img className="w-24" src={logo} alt="" />
            QueryHive
          </Link>
        </div>
        <div className="hidden lg:flex space-x-6">
          <NavLink
            to="/"
            className="hover:text-[#A67C52] hover:font-bold hover:text-xl flex items-center space-x-2"
          >
            Home
          </NavLink>
          <NavLink
            to="/queries"
            className="hover:text-[#A67C52] hover:font-bold hover:text-xl "
          >
           Queries
          </NavLink>
          {user && user?.email ? (
            <>
              <NavLink
                to="/add"
                className="hover:text-[#A67C52] hover:font-bold hover:text-xl "
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
                to="/list"
                className="hover:text-[#A67C52] hover:font-bold hover:text-xl "
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
                to="/list"
                className="hover:text-[#A67C52] hover:font-bold hover:text-xl "
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

        <div className="flex lg:flex-row flex-col items-center gap-2 lg:gap-5">
          {isHomepage && (
            <input
              onClick={handleTheme}
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller"
            />
          )}
          {user && user?.photoURL ? (
            <img
              src={user?.photoURL}
              title={user?.displayName || "User"}
              className="w-10 h-10 md:w-14 md:h-14 rounded-full md:flex"
            ></img>
          ) : (
            <BsPersonCircle className="text-5xl" />
          )}

          {user && user?.email ? (
            <div>
              <NavLink>
                <button
                  onClick={logOut}
                  className="px-4 py-2 bg-[#FFFFFF] text-[#0575E6] rounded-md"
                >
                  LogOut
                </button>
              </NavLink>
            </div>
          ) : (
            <>
              <NavLink to="/login">
                <button className="px-4 py-2 bg-[#FFFFFF] text-[#0575E6] rounded-md">
                  Login
                </button>
              </NavLink>
              <NavLink to="/register">
                <button className="px-3 py-2 bg-[#FFFFFF] text-[#0575E6] rounded-md">
                  Register
                </button>
              </NavLink>
            </>
          )}
        </div>
      </nav>

      {menuOpen && (
        <div className="flex flex-col space-y-4 px-6 py-4 bg-[#071f10] lg:hidden">
          <NavLink to="/" className="hover:text-gray-200">
            Home
          </NavLink>
          <NavLink to="/all" className="hover:text-gray-200">
          Queries
          </NavLink>
          {user && user?.email ? (
            <>
              <NavLink
                to="/add"
                className="hover:text-[#A67C52] hover:font-bold hover:text-xl "
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
                to="/list"
                className="hover:text-[#A67C52] hover:font-bold hover:text-xl "
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
                to="/list"
                className="hover:text-[#A67C52] hover:font-bold hover:text-xl "
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
