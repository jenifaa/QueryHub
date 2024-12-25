import React, { useState } from "react";
import { motion } from "framer-motion";

const ProductExplorer = () => {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const productData = [
    {
      category: "Laptops",
      name: "Laptop A",
      price: "$999",
      image: "/laptop-a.jpg",
    },
    {
      category: "Smartphones",
      name: "Phone B",
      price: "$799",
      image: "/phone-b.jpg",
    },
    {
      category: "Accessories",
      name: "Wireless Mouse",
      price: "$25",
      image: "/mouse.jpg",
    },
    {
      category: "Laptops",
      name: "Laptop C",
      price: "$1200",
      image: "/laptop-c.jpg",
    },
  ];

  const filteredProducts = productData.filter(
    (product) =>
      (selectedCategory ? product.category === selectedCategory : true) &&
      (priceRange === "high" ? parseInt(product.price.slice(1)) > 1000 : priceRange === "low" ? parseInt(product.price.slice(1)) <= 1000 : true)
  );

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
    setStep(2); // Go to category-wise product selection
  };

  const handlePriceRangeSelection = (range) => {
    setPriceRange(range);
    setStep(3); // Go to final product display
  };

  const handleBack = () => {
    if (step === 3) {
      setStep(2); // Go back to the price range selection step
    } else if (step === 2) {
      setStep(1); // Go back to the category selection step
    }
  };

  return (
    <div className="py-16 px-8 bg-base-200">
      <h2 className="text-3xl font-bold text-center mb-8">Interactive Product Explorer</h2>
      <div className="text-center space-y-6">
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg mb-4">Select a Product Category</p>
            <div className="flex justify-center space-x-6">
              <button
                className="btn btn-primary hover:bg-blue-800 px-6 py-3 rounded-lg"
                onClick={() => handleCategorySelection("Laptops")}
              >
                Laptops
              </button>
              <button
                className="btn btn-primary hover:bg-blue-800  px-6 py-3 rounded-lg"
                onClick={() => handleCategorySelection("Smartphones")}
              >
                Smartphones
              </button>
              <button
                className="btn btn-primary hover:bg-blue-800 px-6 py-3 rounded-lg"
                onClick={() => handleCategorySelection("Accessories")}
              >
                Accessories
              </button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg mb-4">Select a Price Range</p>
            <div className="flex justify-center space-x-6">
              <button
                className="bg-green-500 text-white px-6 py-3 rounded-lg"
                onClick={() => handlePriceRangeSelection("low")}
              >
                Under $1000
              </button>
              <button
                className="bg-green-500 text-white px-6 py-3 rounded-lg"
                onClick={() => handlePriceRangeSelection("high")}
              >
                Over $1000
              </button>
            </div>

            {/* Back Button to go back to category selection */}
            <button
              className="mt-6 bg-gray-500 text-white px-6 py-3 rounded-lg"
              onClick={handleBack}
            >
              Back to Category
            </button>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg mb-4">Here are your recommended products:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg hover:scale-105 transition-transform"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-t-lg" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <p className="text-gray-500">{product.price}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Back Button to go back to price range selection */}
            <button
              className="mt-6 bg-gray-500 text-white px-6 py-3 rounded-lg"
              onClick={handleBack}
            >
              Back to Price Range
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProductExplorer;
