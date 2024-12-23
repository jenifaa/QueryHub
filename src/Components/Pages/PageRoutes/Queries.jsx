import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Queries = () => {
  const allData = useLoaderData();
  console.log(allData);
  const [allQuery, setAllQuery] = useState(allData);
  return (
    <div className="mt-36 bg-base-100">
      <div>
        <h2 className="text-4xl font-bold text-center mt-10 mb-3">
          All <span className="text-6xl font-extrabold text-blue-800">Q</span>
          ueries
        </h2>
        <p className="text-center text-sm font-semibold mb-10">
          Explore a wide range of user-submitted queries and insights. Discover
          solutions, share your thoughts, <br />
          and contribute to the growing community of knowledge.
        </p>
        <hr />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2   gap-10 lg:w-11/12 mx-auto my-10">
        {allQuery.map((all) => (
          <div key={all._id} className="border rounded-xl p-3 ">
            <div className="card bg-base-300 p-5 ">
              <div className="flex">
                <div>
                  <figure>
                    <img className="w-52 rounded-xl mb-3" src={all.image} />
                  </figure>
                  <h2 className="card-title font-bold">Brand: {all.brand}</h2>
                </div>

                <div className="card-body">
                  <p>
                    <span className="font-bold text-xl mr-3">Query :</span>{" "}
                    {all.title}
                  </p>
                  <p>
                    <span className="font-bold text-xl mr-3">Added Time:</span>{" "}
                    {all.currentDateAndTime}
                  </p>
                  <p>
                    <span className="font-bold text-xl mr-3">
                      RecommendationCount:
                    </span>{" "}
                    {all.recommendationCount}
                  </p>
                  <div className="card-actions flex  pt-5">
                 
                    <button className="btn btn-primary">
                      <Link to={`/queries/${all._id}`}>recommendation</Link>
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

export default Queries;
