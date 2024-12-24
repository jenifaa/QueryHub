import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const Cards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/queries")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
      });
  }, []);
  console.log(cards);
  return (
    <div className="my-20">
      <div className="text-center">
        <h2 className="my-4 font-bold text-4xl">
          Some Recent{" "}
          <span className="text-6xl font-extrabold text-blue-800">Q</span>ueries
        </h2>
        <p className="text-sm font-medium mb-10 ">
          "Explore the latest questions and discussions from our community."
          <br />
          "Find insights, recommendations, and feedback on trending products."
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2  w-10/12 gap-5 mx-auto my-6">
        {cards.map((card) => (
          <div key={card._id} className="border rounded-xl p-3 w-[580px]">
            <div className="card bg-base-300 w-[550px] p-2 ">
              <div className="flex">
                <figure>
                  <img className="w-56 h-52 rounded-xl" src={card.image} />
                </figure>

                <div className="card-body">
                  <h2 className="card-title font-bold">{card.brand}</h2>
                  <p>{card.title}</p>
                  <p>RecommedationCount: {card.recommendationCount}</p>
                  <div className="card-actions   pt-2">
                    <button className="btn btn-primary">
                      <Link to={`/queries/${card._id}`}>Details</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
