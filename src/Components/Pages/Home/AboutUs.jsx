import React from "react";
import logo from "../../../assets/images/queries.png";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import about from "../../../assets/lottie/aboutUs.json";
const AboutUs = () => {
  return (
    <div id="about" className=" my-20">
      <h2 className="text-center font-bold text-5xl font mb-2"><span className="text-7xl text-blue-800">A</span>bout US</h2>
      <p className="text-center font text-sm mb-7">Know More About Us...</p>
    <div className="bg-gray-100 py-3">
    <div className="md:flex items-center justify-between my-10 w-10/12 mx-auto">
        <div className="flex-1">
          <p className="text-gray-600 text-lg">
            Discover the future of smart recommendations with{" "}
            <span className="font-semibold">QueryHive</span>! We specialize in
            tailoring the best product suggestions to meet your needs. Whether
            you're shopping for the latest gadgets, home essentials, or
            lifestyle must-haves, our system provides recommendations based on
            your preferences and queries.
          </p>
          <p className="text-gray-700 italic mt-2">
            ✨ Your trusted partner in smarter shopping! ✨
          </p>
          <button className="px-4 py-1 bg-blue-100 my-3">
            <Link to="/blog">See More...</Link>
          </button>
        </div>
        <div className="md:flex-1 md:ml-32">
          <img className="ml-16 w-60 lg:w-80" src={logo} alt="" />
        </div>
      </div>
    </div>
      <hr className="border border-gray-300 my-6" />



      <div className="md:flex justify-between items-center mb-10">
        <Lottie className="md:w-96 flex-1" animationData={about}></Lottie>
        <div className="bg-base-200 flex-1 p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Find Us</h2>
          <p className="text-gray-600 mb-2">
            Need help or have a query? Reach out to us anytime!
          </p>
          <div className="text-left mx-auto max-w-sm">
            <p className="mb-2">
              <span className="font-bold">📞 WhatsApp:</span> +1 (234) 567-890
            </p>
            <p className="mb-2">
              <span className="font-bold">📧 Email:</span> queryhive@gmail.com
            </p>
            <p className="mb-2">
              <span className="font-bold">🌐 Website:</span>{" "}
              <Link
               
                className="text-blue-500 underline"
              >
                https://assignment-11-e8708.web.app
              </Link>
            </p>
            <p className="mb-2">
              <span className="font-bold">📍 Location:</span> 123 Product St.,
              Recommendation City, RC 45678
            </p>
          </div>
          <p className="text-gray-700 italic mt-2">
            ✨ We’re here to assist you 24/7! ✨
          </p>
          <button className="btn btn-primary mt-4"><Link to="https://mail.google.com/mail/u/0/#inbox">Contact Us</Link></button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
