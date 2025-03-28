import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaQuestionCircle } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-base-200  p-6 flex flex-col items-center py-24">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl font-bold font   mb-7">Query<span className="text-red-950 text-6xl">H</span>ub</h1>
        <p className="text-lg mb-6">
          Welcome to <span className="font-semibold">QueryHub</span>, your go-to
          platform for sharing knowledge, solving problems, and making informed
          decisions. Our goal is to provide an interactive space where users can
          ask, answer, and explore queries across various topics.
        </p>

        {/* Who We Are Section */}
        <div className="bg-base-100 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold mb-2">Who We Are</h2>
          <p>
            At QueryHub, we believe in the power of community-driven insights.
            Our platform is built to help users **find accurate
            recommendations**, **get expert advice**, and **engage with a
            knowledgeable audience**.
          </p>
        </div>

        {/* What We Do Section */}
        <div className="bg-base-100 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold mb-2">What We Do</h2>
          <ul className="list-disc list-inside">
            <li>🔍 **Discover answers** to important queries.</li>
            <li>💡 **Share knowledge** and help others.</li>
            <li>
              📊 **Receive expert recommendations** tailored to your needs.
            </li>
            <li>
              🤝 **Engage with a growing community** of professionals &
              enthusiasts.
            </li>
          </ul>
        </div>

        {/* How to Connect Section */}
        <div className="bg-base-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">
            How to Connect With Us
          </h2>
          <p>
            We’d love to hear from you! Reach out to us through any of the
            options below:
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
            {/* Email */}
            <a
              href="mailto:support@queryhub.com"
              className="btn bg-blue-500 text-white flex items-center"
            >
              <FaEnvelope className="mr-2" /> Email Us
            </a>
            {/* Call */}
            <a
              href="tel:+123456789"
              className="btn bg-blue-700 text-white flex items-center"
            >
              <FaPhone className="mr-2" /> Call Us
            </a>
            {/* FAQ Section */}
            <a  className="btn bg-blue-900 text-white flex items-center">
              <FaQuestionCircle className="mr-2" /> Visit FAQs
            </a>
          </div>
        </div>
        
         

          {/* Google Map Embed */}
          <div className="bg-base-100 p-6 rounded-lg shadow-lg mt-5">
          <h2 className="text-2xl font-semibold mb-2 flex items-center justify-center gap-2">
            <FaMapMarkerAlt /> Our Location
          </h2>
          <p className="text-lg font-medium">QueryHub Headquarters</p>
          <p>123 Innovation Street, Tech City, 56789</p>
          <p>📅 **Business Hours:** Mon-Fri, 9 AM - 6 PM</p>
        </div>
      
      </div>
    </div>
  );
};

export default About;
