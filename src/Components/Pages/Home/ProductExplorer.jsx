import React, { useState } from "react";
import { motion } from "framer-motion";
import bg from "../../../assets/images/freepik.jpg";
import playStore from "../../../assets/images/playstore.png";
import apple from "../../../assets/images/apple-logo.png";
import windows from "../../../assets/images/microsoft.png";

const ProductExplorer = () => {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const productData = [
    {
      category: "Laptops",
      name: "Laptop A",
      price: "$999",
      image: "https://i.ibb.co.com/9ncCWJz/laptop.webp",
    },
    {
      category: "Smartphones",
      name: "Phone B",
      price: "$799",
      image: "https://i.ibb.co.com/X4ZKgk5/phone2.jpg",
    },
    {
      category: "Smartphones",
      name: "Phone B",
      price: "$1799",
      image: "https://i.ibb.co.com/1r10KcP/phone1.png",
    },
    {
      category: "Accessories",
      name: "Wireless Mouse",
      price: "$25",
      image: "https://i.ibb.co.com/dcPqLF7/mouse2.jpg",
    },
    {
      category: "Accessories",
      name: "Wireless Mouse",
      price: "$1025",
      image: "https://i.ibb.co.com/9pyFcJZ/mouse.jpg",
    },
    {
      category: "Laptops",
      name: "Laptop C",
      price: "$1200",
      image: "https://i.ibb.co.com/Prbnh4v/laptop2.webp",
    },
  ];

  const filteredProducts = productData.filter(
    (product) =>
      (selectedCategory ? product.category === selectedCategory : true) &&
      (priceRange === "high"
        ? parseInt(product.price.slice(1)) > 1000
        : priceRange === "low"
        ? parseInt(product.price.slice(1)) <= 1000
        : true)
  );

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
    setStep(2);
  };

  const handlePriceRangeSelection = (range) => {
    setPriceRange(range);
    setStep(3);
  };

  const handleBack = () => {
    if (step === 3) {
      setStep(2);
    } else if (step === 2) {
      setStep(1);
    }
  };

  return (
    <div id="explore">
      <h2 className="text-3xl font-bold text-center my-10 font"><span className="text-6xl text-red-900">E</span>xplore More...</h2>
      <div className="py-10 px-8 bg-base-200 lg:flex lg:justify-between items-center gap-10">
        <div className=" lg:flex-1">
          <h1 className="text-2xl md:text-4xl font-bold text-center my-4 md:py-6">
            Select a Product Category to Explore
          </h1>
          <div className="text-center space-y-5 ">
            {step === 1 && (
              <div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                
                <div className="md:grid-cols-3 grid-cols-2 gap-4 md:gap-10    grid md:justify-center ">
                  <button
                    className="bg-blue-500 text-white hover:bg-blue-800 px-4 py-3 rounded-lg shadow-lg transition duration-300"
                    onClick={() => handleCategorySelection("Laptops")}
                  >
                    Laptops
                  </button>
                  <button
                    className="bg-blue-500 text-white hover:bg-blue-800 px-4 py-3 rounded-lg shadow-lg transition duration-300"
                    onClick={() => handleCategorySelection("Smartphones")}
                  >
                    Smartphones
                  </button>
                  <button
                    className="bg-blue-500 text-white hover:bg-blue-800 px-4 py-3 rounded-lg shadow-lg transition duration-300"
                    onClick={() => handleCategorySelection("Accessories")}
                  >
                    Accessories
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-lg mb-4 text-green-600 font-semibold">
                  Select a Price Range
                </span>
                <div className="flex justify-center space-x-6">
                  <button
                    className="bg-green-500 text-white hover:bg-green-700 px-6 py-3 rounded-lg shadow-lg transition duration-300"
                    onClick={() => handlePriceRangeSelection("low")}
                  >
                    Under $1000
                  </button>
                  <button
                    className="bg-green-500 text-white hover:bg-green-700 px-6 py-3 rounded-lg shadow-lg transition duration-300"
                    onClick={() => handlePriceRangeSelection("high")}
                  >
                    Over $1000
                  </button>
                </div>

                <button
                  className="mt-6 bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition duration-300"
                  onClick={handleBack}
                >
                  Back to Category
                </button>
              </div>
            )}

            {step === 3 && (
              <div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-lg mb-4 text-purple-600 font-semibold">
                  Here is your recommended products:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map((product, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover rounded-t-lg"
                      />
                      <div className="p-4">
                        <h3 className="text-xl font-semibold">
                          {product.name}
                        </h3>
                        <p className="text-gray-500">{product.price}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  className="mt-6 bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition duration-300"
                  onClick={handleBack}
                >
                  Back to Price Range
                </button>
              </div>
            )}
          </div>
        </div>

        <div
          className="hero  lg:flex-1 my-4"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        >
          <div className="hero-overlay bg-opacity-80"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold text-white">
                DownLoad Our App
              </h1>
              <div className="mb-5 flex justify-between items-center">
                <div className="flex flex-col items-center">
                  <img className="w-16 mb-3" src={apple} alt="App Store" />
                  <p className="text-lg font-medium text-white">App Store</p>
                </div>
                <div className="flex flex-col items-center">
                  <img className="w-16 mb-3" src={playStore} alt="Play Store" />
                  <p className="text-lg font-medium text-white">Play Store</p>
                </div>

                <div className="flex flex-col items-center">
                  <img
                    className="w-16 mb-3"
                    src={windows}
                    alt="Windows Store"
                  />
                  <p className="text-lg font-medium text-white">
                    Windows Store
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductExplorer;
