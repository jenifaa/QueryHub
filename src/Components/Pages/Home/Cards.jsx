import React, { useEffect, useState } from "react";
import { MdOutlineRecommend } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BiBookmarkAlt } from "react-icons/bi";
import { CiClock1 } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { div } from "framer-motion/client";
const Cards = ({ cardsRef }) => {
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
    <div ref={cardsRef} className="my-20 font">
      <div className="text-center">
        <h2 className="my-4 font-bold text-4xl flex justify-center items-center gap-1">
          <BiBookmarkAlt />
          Recent{" "}
          <span className="text-6xl font-extrabold text-blue-800 ml-2"> Q</span>
          ueries
        </h2>
        <p className="text-sm font-medium mb-10 ">
          "Explore the latest questions and discussions from our community."
          <br />
          "Find insights, recommendations, and feedback on trending products."
        </p>
      </div>

      <div className="grid grid-cols-1 w-10/12 gap-6 mx-auto">
        {cards.map((card) => (
          <div key={card._id}>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex gap-6 items-start">
                <figure className="flex-shrink-0">
                  <img
                    className="w-36 h-36 object-cover rounded-md"
                    src={card.image}
                    alt={card.title}
                  />
                </figure>

                <div className="border-l-2 border-black h-auto"></div>

                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-2xl font-semibold text-gray-800">
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

                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <p className="flex items-center gap-1">
                      <CiClock1 />
                      {card.currentDateAndTime}
                    </p>
                    <p className="flex items-center gap-1 px-2 py-1 bg-blue-100">
                      <FaRegEye />
                      {Math.floor(
                        Math.random() * (100000 - 10000) + 10000
                      )}{" "}
                      Views
                    </p>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-gray-700">
                        Name: <span className="font-normal">{card.name}</span>
                      </h3>
                      <p className="text-gray-600">{card.reason}</p>
                    </div>

                    <div className="text-right">
                      <button className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors">
                        <Link to={`/queries/${card._id}`}>More Details...</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="border border-gray-400 mt-6" />
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center my-5">
        <button
          onClick={handleQueries}
          className="font text-white px-3 py-2 bg-black "
        >
          View All Queries
        </button>
      </div>
    </div>
  );
};

export default Cards;
