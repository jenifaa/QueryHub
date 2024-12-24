import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Queries = () => {
  const allData = useLoaderData();
  console.log(allData);
  const [allQuery, setAllQuery] = useState(allData);
  const [search,setSearch] = useState("")
  // useEffect(()=>{
  //   const fetchAllQueries = async () =>{
  //     const {data} = await axios.get(`http://localhost:5000/all-query?search=${search}`)
  //     setAllQuery(data);
  //   }
  //   fetchAllQueries()
  // },[search])
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

      <div className="w-96 mx-auto my-10">
        <label className="input input-bordered flex items-center gap-2">
          <input onChange={e => setSearch(e.target.value)} type="text" className="grow" placeholder="Search" />
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
      <div className="grid grid-cols-1 md:grid-cols-2   gap-10 lg:w-11/12 mx-auto my-10">
        {allQuery.map((all) => (
          <div key={all._id} className="border rounded-xl p-3 ">
            <div className="card bg-base-300 p-5 ">
              <div className="lg:flex">
                <div>
                  <figure>
                    <img className="lg:w-52 rounded-xl mb-3" src={all.image} />
                  </figure>
                 
                </div>

                <div className="card-body">
                <h2 className="card-title font-bold">Name: {all.name}</h2>
                <h2 className=""><span className="font-bold text-xl mr-3">Brand :</span> {all.brand}</h2>
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
