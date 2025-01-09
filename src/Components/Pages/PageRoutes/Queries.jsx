import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import { Link, useLoaderData } from "react-router-dom";

const Queries = () => {
  const allData = useLoaderData();

  const [allQuery, setAllQuery] = useState(allData);
  const [search, setSearch] = useState("");
  const [isGrid, setIsGrid] = useState(false);

  return (
    <div className="mt-20 bg-base-100">
      <Helmet>
        <title>QueryHive | Queries</title>
      </Helmet>

      <div>
        <h2 className="text-4xl font-bold text-center mt-10 mb-3">
          All <span className="text-6xl font-extrabold text-red-900">Q</span>
          ueries
        </h2>
        <p className="text-center text-sm font-semibold mb-10">
          Explore a wide range of user-submitted queries and insights. Discover
          solutions, share your thoughts, <br />
          and contribute to the growing community of knowledge.
        </p>
        <hr />
      </div>

      <div className="md:flex items-center  justify-center gap-5">
        <div className="w-96  my-10">
          <label className="input input-bordered flex items-center gap-2">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              className="grow"
              placeholder="Search"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <div>
          <button
            onClick={() => setIsGrid(!isGrid)}
            className="btn bg-blue-500 text-white"
          >
            Change LayOut(2/3)
          </button>
        </div>
      </div>
      <div
        className={`grid  grid-cols-1 ${
          isGrid
            ? "md:grid-cols-1 lg:grid-cols-3 w-11/12 "
            : "lg:grid-cols-4 lg:w-11/12 md:grid-cols-2"
        }  gap-4 lg:gap-5  mx-auto my-10`}
      >
        {allQuery
          .filter((all) => {
            return search.toLowerCase() === ""
              ? all
              : all.name.toLowerCase().includes(search);
          })
          .map((all) => (
            <div
              key={all._id}
              className=""
            >
              <div className={` bg-base-300 p-5  lg:w-80 mx-auto md:w-80`}>
                <div className="">
                  <h2 className="card-title font-bold">Name: {all.name}</h2>
                  <p>{all.currentDateAndTime}</p>
                  <hr className="border border-gray-300 my-2" />
                  <div className=" my-auto">
                    <figure className="p-5">
                      <img className="md:w-80 w-full  h-56 " src={all.image} />
                    </figure>
                  </div>

                  <div className=" ">
                    {/* <h2 className="">
                      <span className="font-bold text-xl mr-3">Brand :</span>{" "}
                      {all.brand}
                    </h2> */}
                    <p className="font-bold ">{all.title}</p>
                    <p className="text-red-700">{all.reason}</p>

                    <p>
                      <span className="font-bold  mr-3">
                        RecommendationCount:
                      </span>{" "}
                      {all.recommendationCount}
                    </p>
                    <div className="card-actions flex  ">
                      <button className="px-3 py-1 bg-blue-500 text-white my-3">
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
