import React, { useEffect, useState } from "react";
import { MdOutlineRecommend } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BiBookmarkAlt } from "react-icons/bi";
import { CiClock1 } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
// import { div } from "framer-motion/client";
const Cards = () => {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();
  const handleQueries = () => {
    navigate("/queries");
  };

  useEffect(() => {
    fetch("https://assignment-11-server-seven-liard.vercel.app/queries")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
      });
  }, []);

  return (
    <div id="queries" className="my-12 ">
      <div className="text-center font">
        <h2 className="my-4 font-bold text-4xl flex justify-center items-center gap-1">
          <BiBookmarkAlt />
          Recent{" "}
          <span className="text-6xl font-extrabold text-red-900 ml-2"> Q</span>
          ueries
        </h2>
        <p className="text-sm font-medium mb-10 ">
          "Explore the latest questions and discussions from our community."
          <br />
          "Find insights, recommendations, and feedback on trending products."
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-11/12 mx-auto">
        {cards.map((card, index) => (
          <div key={card._id}>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">
              <div className="sm:flex flex-col sm:flex-row gap-4 items-start h-full">
                <figure className="sm:flex-shrink-0">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="sm:w-44 w-full sm:h-[200px] h-[250px] object-cover rounded-md"
                  />
                </figure>
                <div className="sm:flex-1 sm:flex sm:flex-col sm:justify-between h-full">
                  <div className=" mb-1">
                    <h2 className="text-lg font font-semibold text-gray-800">
                      {card.title}
                    </h2>
                    {/* <p className="relative group flex items-center gap-1 px-2 bg-blue-200 py-1 rounded-md">
                      <MdOutlineRecommend />
                      {card.recommendationCount}
                      <span className="absolute top-[-35px] left-1/2 transform -translate-x-1/2 hidden group-hover:block bg-black text-white text-xs py-1 px-2 rounded">
                        Recommendation
                      </span>
                    </p> */}
                  </div>

                  <div className="flex items-center justify-between  text-sm text-gray-600 mb-2">
                    {/* <p className="flex items-center gap-1">
                      <CiClock1 className="text-base" />
                      {card.currentDateAndTime}
                    </p> */}
                    <p className="relative group flex items-center gap-1 px-2 bg-blue-100 py-1 rounded-md">
                      <MdOutlineRecommend />
                      {card.recommendationCount}
                      <span className="absolute top-[-35px] left-1/2 transform -translate-x-1/2 hidden group-hover:block bg-black text-white text-xs py-1 px-2 rounded">
                        Recommendation
                      </span>
                    </p>
                    <p className="flex items-center gap-1 px-2 py-1 bg-blue-100 rounded">
                      <FaRegEye />
                      {Math.floor(
                        Math.random() * (100000 - 10000) + 10000
                      )}{" "}
                      Views
                    </p>
                  </div>

                  <div className="">
                    {/* <h3 className="font-bold text-base">{card.name}</h3> */}
                    <p className="text-gray-600 ">{card.reason}</p>
                  </div>

                  <div className="sm:mt-auto  sm:flex sm:items-end">
                    <button className="px-4 py-1 font bg-red-900 text-white font-medium rounded-md hover:bg-red-950 transition-colors">
                      <Link to={`/queries/${card._id}`}>More Details...</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 w-11/12 mx-auto">
        {cards.map((card, index) => (
          <div key={card._id}>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">
              <div className="sm:flex flex-col sm:flex-row gap-4 items-start h-full">
                <figure className="sm:flex-shrink-0">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="sm:w-44 w-full sm:h-[200px] h-[250px] object-cover rounded-md"
                  />
                </figure>
                <div className="sm:flex-1 sm:flex sm:flex-col sm:justify-between h-full">
                  <div className="flex justify-between items-center mb-1">
                    <h2 className="text-lg font font-semibold text-gray-800">
                      {card.title}
                    </h2>
                    <p className="relative group flex items-center gap-1 px-2 bg-blue-200 py-1 rounded-md">
                      <MdOutlineRecommend />
                      {card.recommendationCount}
                      <span className="absolute top-[-35px] left-1/2 transform -translate-x-1/2 hidden group-hover:block bg-black text-white text-xs py-1 px-2 rounded">
                        Recommendation
                      </span>
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-1">
                    <p className="flex items-center gap-1">
                      <CiClock1 className="text-base" />
                      {card.currentDateAndTime}
                    </p>
                    <p className="flex items-center gap-1 px-2 py-1 bg-blue-100 rounded">
                      <FaRegEye />
                      {Math.floor(
                        Math.random() * (100000 - 10000) + 10000
                      )}{" "}
                      Views
                    </p>
                  </div>

                  <div className="mb-1">
                    <h3 className="font-bold text-base">{card.name}</h3>
                    <p className="text-gray-600">{card.reason}</p>
                  </div>

                  <div className="sm:mt-auto sm:flex sm:items-end">
                    <button className="px-4 py-2 font bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors">
                      <Link to={`/queries/${card._id}`}>More Details...</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div> */}

      <hr className=" border-t border-gray-300 my-5" />

      <div className="flex justify-center items-center mb-5 mt-7">
        <button
          onClick={handleQueries}
          className="font text-white px-3 py-2 bg-red-900 "
        >
          View All Queries
        </button>
      </div>
    </div>
  );
};

export default Cards;
