import React from "react";
import logo from "../../../assets/images/queries.png";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import about from "../../../assets/lottie/aboutUs.json";
const AboutUs = () => {
  return (
    <div id="about" className=" my-10">
      <h2 className="text-center font-bold text-5xl font mb-2">
        <span className="text-7xl text-red-900">A</span>bout US
      </h2>
      <p className="text-center font text-sm mb-7">Know More About Us...</p>
     

      <div className="lg:flex md:justify-between items-center mb-5 px-8">
        <Lottie
          className="lg:w-96 w-full md:flex-1"
          animationData={about}
        ></Lottie>
        <div className="bg-base-200 md:flex-1 p-6 rounded-lg shadow-md lg:mr-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Find Us</h2>
          <p className="text-gray-600 mb-2 colo">
            Need help or have a query? Reach out to us anytime!
          </p>
          <div className="">
            <p className="mb-2">
              <span className="font-bold">📞 WhatsApp:</span> +1 (234) 567-890
            </p>
            <p className="mb-2">
              <span className="font-bold">📧 Email:</span> queryhive@gmail.com
            </p>
            <p className="mb-2">
              <span className="font-bold">🌐 Website:</span>{" "}
              <Link className="text-blue-500 underline">
                https://assignment-11-e8708.web.app
              </Link>
            </p>
            <p className="mb-2">
              <span className="font-bold">📍 Location:</span> 123 Product St.,
              Recommendation City, RC 45678
            </p>
          </div>
          <p className="text-gray-700 italic mt-2 colo">
            ✨ We’re here to assist you 24/7! ✨
          </p>
          <button className="btn bg-red-900 text-white mt-4">
            <Link to="https://mail.google.com/mail/u/0/#inbox">Contact Us</Link>
          </button>
        </div>
      </div>
      <hr className="border border-gray-200 " />
      <div className=" ">
        <div className="lg:flex items-center justify-between my-5 w-11/12 mx-auto">
          <div className="lg:flex-1 bg-base-200 px-16 py-14 rounded-lg shadow-md">
            <p className="text-gray-600 text-lg colo">
              Discover the future of smart recommendations with{" "}
              <span className="font-semibold">QueryHive</span>! We specialize in
              tailoring the best product suggestions to meet your needs. Whether
              you're shopping for the latest gadgets, home essentials, or
              lifestyle must-haves, our system provides recommendations based on
              your preferences and queries.
            </p>
            <p className="text-gray-700 colo italic mt-2">
              ✨ Your trusted partner in smarter shopping! ✨
            </p>
            <button className="px-4 py-1 bg-red-100 my-3">
              <Link to="/blog" className="text-black">
                See More...
              </Link>
            </button>
          </div>
          <div className="lg:flex-1 md:ml-32 lg:ml-48">
            <img className=" sm:ml-16 w-96 " src={logo} alt="" />
          </div>
        </div>
      </div>
      <hr className="border border-gray-200 " />
    </div>
  );
};

export default AboutUs;
