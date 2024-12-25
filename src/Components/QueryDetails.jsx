import React, { useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import useAuth from "./Hooks/useAuth";
import Navbar from "./Pages/Layout/Navbar";
import { div } from "motion/react-client";

const QueryDetails = () => {
  const data = useLoaderData();

  const { user } = useAuth();
  const [recommendationCount, setRecommendationCount] = useState(0);
  const [recommendations, setRecommendations] = useState([]);
  const recommendationsRef = useRef(null);

  useEffect(() => {
    fetch("https://assignment-11-server-seven-liard.vercel.app/recommendation")
      .then((res) => res.json())
      .then((result) => {
        const filterRecommend = result.filter(
          (reco) => reco.queryId === data?._id
        );
        setRecommendations(filterRecommend);
      });
  }, [data?._id]);

  const handleRecommendation = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const recommendedData = Object.fromEntries(formData.entries());
  

    const newRecommendedData = {
      ...recommendedData,
      queryId: data?._id,
      QueryTitle: data?.title,
      ProductName: data?.name,
      userEmail: data?.userEmail,
      userName: data?.userName,
      recommenderEmail: user?.email,
      recommenderName: user?.displayName,

      currentDateAndTime: new Date().toISOString(),
    };
  

    fetch("https://assignment-11-server-seven-liard.vercel.app/recommendation", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newRecommendedData),
    })
      .then((res) => res.json())
      .then((result) => {
 
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className=" max-w-7xl mx-auto mt-40 p-5">
        <h2 className="text-center text-3xl font-bold my-4">
          More Details For You
        </h2>
        <p className="text-sm font-semibold text-gray-500 my-5 text-center">
          Discover the comprehensive insights and background behind this query,
          including the motivations and detailed <br /> reasoning that inspired
          its creation.{" "}
        </p>
        <hr className="my-4" />
        <div className="flex flex-col md:flex-row mt-10 mb-10 gap-10">
          <div className="md:w-1/3 p-5">
            <img
              src={data.image}
              alt={data.title}
              className="rounded-lg shadow-xl w-full  h-80"
            />
          </div>

          <div className=" md:w-2/3 p-5 bg-base-200 shadow-lg rounded-xl">
            <h1 className=" mb-3 text-lg text-gray-600">
              <span className="text-xl font-bold text-black">Query: </span>
              {data.title}
            </h1>
            <p className="text-lg text-gray-600 mb-3">
              <span className="text-xl font-bold text-black">Reason: </span>
              {data.reason}
            </p>
            {/* <h2 className="text-2xl font-semibold text-gray-800 mb-4">Details</h2> */}
            <div className="flex justify-between items-center">
              <p className="text-2xl px-4 py-1 rounded-full bg-blue-400 font-semibold italic my-4 text-white">
                {data.brand}
              </p>
              <p className="text-md text-gray-500 font-semibold">
                {data.currentDateAndTime}
              </p>
            </div>

            <div className=" flex gap-6">
              <button className="btn btn-primary py-2 px-6 rounded-full text-white bg-blue-600 hover:bg-blue-700">
                <a href={`mailto:${data.userEmail}`}>Contact the Author</a>
              </button>
              <button className="btn btn-secondary py-2 px-6 rounded-full text-white bg-green-600 hover:bg-green-700">
                All Recommendation
              </button>
            </div>
          </div>
        </div>
        <hr className="my-6" />

        {/* user information */}

        <div className="border-2 rounded-xl py-5 my-16 bg-base-300">
          <h2 className="text-3xl font-bold text-center my-5 underline  [text-underline-offset:10px]">
            Information of the Creator of the Query
          </h2>

          <div className="flex items-center justify-around py-10">
            <div className=" ">
              <h2 className="italic font-semibold">
                <span className="font-bold text-xl text-black">Name: </span>
                {data.userName}
              </h2>
              <h2 className="text-green-700 font-semibold my-6 italic">
                <span className="font-bold text-xl text-black">Email: </span>
                {data.userEmail}
              </h2>
            </div>
            <div>
              <img
                className="md:w-48 rounded-xl"
                src={data?.userProfileImage}
                alt=""
              />
            </div>
          </div>
        </div>

        {/* recommendation form */}

        <div className="w-8/12 mx-auto">
          <div>
            <h2 className="text-center font-bold text-3xl my-5">
              {" "}
              Add Your Recommendation
            </h2>
          </div>
          <form onSubmit={handleRecommendation} action="">
            <div className="md:flex justify-between items-center gap-5">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Recommendation Title</span>
                </div>
                <input
                  required
                  name="title"
                  type="text"
                  placeholder="Title"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Recommended Product name</span>
                </div>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
            <div className="md:flex gap-5 justify-between items-center">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Recommended Product Image</span>
                </div>
                <input
                  name="image"
                  type="text"
                  placeholder="Image"
                  required
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Recommended Product Reason</span>
                </div>
                <input
                  name="reason"
                  type="text"
                  required
                  placeholder="reason"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
            <div className="flex justify-center items-center">
              <button
                // onClick={() => handleIncrement(data._id)}
                className="btn btn-primary my-4"
              >
                Add Recommendation
              </button>
            </div>
          </form>
        </div>

        {/* all recomendation */}

        <div className=" mt-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            All Recommendations:{" "}
          </h2>
          <div className="space-y-4">
            {recommendations.length > 0 ? (
              recommendations.map((recommendation, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-100 rounded-lg shadow flex items-center gap-20"
                >
                  <div>
                    <img
                      className="w-28 rounded-xl"
                      src={recommendation.image}
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">
                      {recommendation.title}
                    </h3>
                    <p className="text-gray-800 font-semibold italic">
                      {recommendation.reason}
                    </p>
                    <div className="items-center">
                      <p className="text-sm text-gray-800 italic">
                        <span className="text-gray-900 font-semibold">
                          Recommended by:{" "}
                        </span>{" "}
                        {recommendation.recommenderName}
                      </p>
                      <p className="text-sm text-gray-500 italic">
                        {recommendation.currentDateAndTime}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">Add Recommendation</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryDetails;
