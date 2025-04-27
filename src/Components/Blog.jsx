import React from "react";
import Navbar from "./Pages/Layout/Navbar";
import Footer from "./Pages/Layout/Footer";

// Card data to display in 9-card layout
const cardData = [
  {
    title: "Electronics & Gadgets",
    description: "Latest innovations for tech enthusiasts.",
    emoji: "⚡",
    image: "https://i.ibb.co.com/hJmxyZj3/tech.jpg",
  },
  {
    title: "Home & Lifestyle",
    description: "Essentials for a cozy, modern home.",
    emoji: "🏡",
    image: "https://i.ibb.co.com/Gvmw5gcB/home.jpg",
  },
  {
    title: "Fashion & Accessories",
    description: "Styles that suit your taste and budget.",
    emoji: "👗",
    image: "https://i.ibb.co.com/b5H2rSH4/fashion.webp",
  },
  {
    title: "Fitness & Wellness",
    description: "Tools to keep you healthy and active.",
    emoji: "💪",
    image: "https://i.ibb.co.com/4RvdBJjV/fit.jpg",
  },
  {
    title: "Beauty & Personal Care",
    description: "Self-care products to enhance your glow.",
    emoji: "💅",
    image: "https://i.ibb.co.com/bRWKYnrr/bew.jpg",
  },
  {
    title: "Books & Learning",
    description: "Read, learn, and grow with great books.",
    emoji: "📚",
    image: "https://i.ibb.co.com/99H7FLGp/bok.jpg",
  },
  {
    title: "Travel & Outdoors",
    description: "Everything you need for your next adventure.",
    emoji: "✈️",
    image: "https://i.ibb.co.com/hRy5cjrT/trav.jpg",
  },
  {
    title: "Food & Beverages",
    description: "Delicious treats and snacks for everyone.",
    emoji: "🍔",
    image: "https://i.ibb.co.com/PS92LCg/food.webp",
  },
  {
    title: "Pets & Animals",
    description: "Products for your furry friends.",
    emoji: "🐾",
    image: "https://i.ibb.co.com/xq6SGtnv/pet.jpg",
  },
];

const Blog = () => {
  return (
    <div className="">
      <Navbar />

      <h2 className="text-center font font-bold text-5xl mt-24 mb-10">
        Our <span className="text-6xl font-extrabold text-red-900">B</span>log
      </h2>

      <div className="grid grid-cols-3 gap-6 p-8 w-11/12 mx-auto mb-10">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-base-200 p-6 rounded-lg shadow-lg text-center transition-all transform hover:scale-105"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">
              {card.emoji} {card.title}
            </h3>
            <p className="text-lg text-gray-700">{card.description}</p>
            <button className="text-center w-full py-2 bg-red-900 text-white mt-2 rounded-lg">See More</button>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
