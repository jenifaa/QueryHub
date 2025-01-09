import React, { useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import useAuth from "./Hooks/useAuth";
import Navbar from "./Pages/Layout/Navbar";
import { div } from "motion/react-client";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
const QueryDetails = () => {
  const data = useLoaderData();

  const { user } = useAuth();
  const [recommendationCount, setRecommendationCount] = useState(0);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    fetch(
      "https://assignment-11-server-seven-liard.vercel.app/recommendation",
      { credentials: "include" }
    )
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

    fetch(
      "https://assignment-11-server-seven-liard.vercel.app/recommendation",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newRecommendedData),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          e.target.reset();

          setRecommendations((prev) => [...prev, newRecommendedData]);
        }
      })
      .catch((error) => console.error("Error adding recommendation:", error));
  };

  return (
    <div>
      <Helmet>
        <title>QueryHive | Details</title>
      </Helmet>

      <Navbar></Navbar>
      <div className=" max-w-7xl mx-auto mt-16 p-5 ">
        <h2 className="text-center text-5xl font-bold my-4 font">
          <span className="text-red-900 text-6xl">M</span>ore Details For You
        </h2>
        <p className="text-sm font font-semibold text-gray-500 my-5 text-center">
          Discover the comprehensive insights and background behind this query,
          including the motivations and detailed <br /> reasoning that inspired
          its creation.{" "}
        </p>
        <hr className="my-4" />
        <div className="flex items-center flex-col md:flex-row mt-10 mb-10 gap-10">
          <div className="md:w-1/3 p-5">
            <img
              src={data.image}
              className="rounded-lg shadow-xl w-full  h-80"
            />
          </div>

          <div className=" md:w-2/3 p-5 bg-base-200 shadow-lg flex-grow  h-full flex flex-col rounded-xl">
            <h1 className=" mb-2 text-lg font-bold font">{data.name}</h1>
            <h1 className=" mb-3 text-lg text-gray-600 font">
              <span className="text-xl font-bold text-black">Query: </span>
              {data.title}
            </h1>
            <p className="text-lg text-red-700 font mb-3">{data.reason}</p>

            <p className="my-2 font">{data.brand}</p>

            <p className="text-md text-gray-500 font-semi bold mb-4">
              {data.currentDateAndTime}
            </p>

            <div className=" flex gap-6 mt-auto my-5">
              <button className="btn  py-2 px-6 rounded-full text-white bg-blue-500 hover:bg-blue-700">
                <a href={`mailto:${data.userEmail}`}>Contact the Author</a>
              </button>
              <Link
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                to="recommendation"
                className="btn  py-2 px-6 rounded-full text-white bg-red-950 hover:bg-red-900"
              >
                All Recommendation
              </Link>
            </div>
          </div>
        </div>
        <hr className="my-6" />

        <div className="border-2 rounded-xl py-5 my-16 bg-base-300">
          <h2 className="text-3xl font-bold text-center my-5 underline  [text-underline-offset:10px]">
            Information of the Creator of the Query
          </h2>

          <div className="md:flex items-center justify-around py-10 px-5">
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
                className="md:w-52 rounded-xl"
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
                className="btn bg-blue-500 text-white my-4"
              >
                Add Recommendation
              </button>
            </div>
          </form>
        </div>

        {/* all recomendation */}

        <div id="recommendation" className=" mt-16">
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
                    <img className="w-28 " src={recommendation.image} alt="" />
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
        {/* <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            All Recommendations
          </h2>
          <div className="space-y-6">
            {recommendations.length > 0 ? (
              recommendations.map((recommendation, index) => {
                const isUserRecommendation =
                  recommendation.recommenderEmail === user?.email;

                return (
                  <motion.div
                    key={index}
                    className={`chat ${
                      isUserRecommendation ? "chat-end" : "chat-start"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                  >
                    <div className="chat-bubble bg-blue-100 shadow-xl w-full  max-w-5xl  text-black p-5">
                      <div className="flex items-center gap-4 mb-3">
                        <img
                          className="w-16 h-16 rounded-full shadow-md"
                          src={recommendation.image}
                          alt={recommendation.title}
                        />
                        <h3 className="font-bold text-xl">
                          {recommendation.title}
                        </h3>
                      </div>
                      <p className="text-gray-700 italic mb-4 text-lg">
                        {recommendation.reason}
                      </p>
                      <div className="mt-2 text-sm text-gray-600">
                        <p>
                          <span className="font-semibold">Recommended by:</span>{" "}
                          {recommendation.recommenderName}
                        </p>
                        <p className="text-gray-500">
                          {recommendation.currentDateAndTime}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <p className="text-gray-500 text-center">
                No recommendations yet. Add your own!
              </p>
            )}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default QueryDetails;
