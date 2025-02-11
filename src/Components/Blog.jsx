import React from "react";
import Navbar from "./Pages/Layout/Navbar";
import Footer from "./Pages/Layout/Footer";

const Blog = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <h2 className="text-center font-bold text-6xl font mt-20 mb-10">Our Blog</h2>
      <div className="bg-base-200 p-8 rounded-lg shadow-lg w-11/12 mx-auto mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Transforming Shopping with Personalized Recommendations
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          In a world overflowing with options, finding the perfect product can
          feel like searching for a needle in a haystack. At
          <span className="font-semibold">QueryHive</span>, we’re here to change
          that. Our mission is to simplify your decision-making process by
          delivering personalized recommendations that save you time, effort,
          and money.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          What Sets Us Apart?
        </h2>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>
            <span className="font-semibold">Intelligent Query System:</span>{" "}
            Quickly capture your needs with our easy-to-use platform.
          </li>
          <li>
            <span className="font-semibold">Smart Recommendation Engine:</span>{" "}
            Get curated results using advanced algorithms tailored to you.
          </li>
          <li>
            <span className="font-semibold">Community-Driven Insights:</span>{" "}
            Make informed decisions with real reviews and tips from other users.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          How Our System Works
        </h2>
        <ol className="list-decimal list-inside text-gray-600 mb-6">
          <li>
            <span className="font-semibold">Submit Your Query:</span> Share your
            preferences such as budget, features, or categories.
          </li>
          <li>
            <span className="font-semibold">Explore Curated Options:</span> View
            personalized suggestions crafted for your needs.
          </li>
          <li>
            <span className="font-semibold">Get Expert Guidance:</span> Use
            WhatsApp or email for instant support and advice.
          </li>
          <li>
            <span className="font-semibold">Confidently Make Your Choice:</span>{" "}
            Compare features and reviews to find the perfect product.
          </li>
        </ol>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Top Categories We Recommend
        </h2>
        <ul className="grid grid-cols-2 gap-4 text-gray-600 mb-6">
          <li>
            <span className="font-semibold">Electronics & Gadgets:</span> Latest
            innovations for tech enthusiasts.
          </li>
          <li>
            <span className="font-semibold">Home & Lifestyle:</span> Essentials
            for a cozy, modern home.
          </li>
          <li>
            <span className="font-semibold">Fashion & Accessories:</span> Styles
            that suit your taste and budget.
          </li>
          <li>
            <span className="font-semibold">Fitness & Wellness:</span> Tools to
            keep you healthy and active.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Why Our Customers Love Us
        </h2>
        <div className="text-gray-600 italic mb-6 space-y-4">
          <p>
             "The recommendations are spot-on! I found the perfect laptop for
            my needs within minutes." — Sarah J.
          </p>
          <p>
             "Their system is intuitive and easy to use. Plus, the customer
            support is top-notch!" — Michael T.
          </p>
          <p>
             "I love how I can compare multiple products before deciding. It’s
            like having a personal shopper!" — Priya R.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Your Journey to Smarter Shopping
        </h2>
        <p className="text-gray-600 mb-6">
          At <span className="font-semibold">QueryHive</span>, we believe in
          empowering you to make confident, informed decisions. Our platform is
          more than just a tool—it’s your trusted shopping companion.
        </p>
        <p className="text-gray-700 font-semibold text-center mb-6">
           Start Now: Submit your first query today and experience
          personalized recommendations like never before!
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Stay Connected
        </h2>
        <div className="text-left text-gray-600 space-y-2">
          <p>
            <span className="font-bold"> WhatsApp:</span> +1 (234) 567-890
          </p>
          <p>
            <span className="font-bold"> Email:</span> queryhive@gmail.com
          </p>
          <p>
            <span className="font-bold"> Visit Us:</span> 123 Product St.,
            Recommendation City, RC 45678
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>

  );
};

export default Blog;
