import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import useAuth from "./Hooks/useAuth";

const QueryDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const { user } = useAuth();
  const [CreatedUser, setCreatedUser] = useState([]);
  const handleRecommendation = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const recommendedData = Object.fromEntries(formData.entries());
    console.log(recommendedData);

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
    console.log(newRecommendedData);

    fetch("http://localhost:5000/recommendation", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newRecommendedData),
    });
  };
  return (
    <div className=" max-w-7xl mx-auto mt-10 p-5">
      <h2 className="text-center text-3xl font-bold my-4">Learn More Here</h2>
      <hr className="my-4" />
      <div className="flex flex-col md:flex-row mb-10 gap-10">
        <div className="md:w-1/3 p-5">
          <img
            src={data.image}
            alt={data.title}
            className="rounded-lg shadow-xl w-full object-cover h-80"
          />
        </div>

        <div className=" md:w-2/3 p-5 bg-base-300 shadow-lg rounded-xl">
          <h1 className="text-xl font-bold text-gray-800 mb-3">{data.title}</h1>
          <p className="text-xl text-gray-600">{data.brand}</p>
          <p className="text-md text-gray-500">{data.currentDateAndTime}</p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Details</h2>
          <p className="text-lg text-gray-600 mb-6">{data.reason}</p>

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
          <div className="flex justify-between items-center">
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
          <div className="flex justify-between items-center">
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
                <span className="label-text">
                  Recommended Product Reason
                </span>
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
          <button className="btn btn-primary my-4">Add Recommendation</button>
          </div>
         
        </form>
      </div>

      <div className=" mt-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Comments</h2>
        <div className=" bg-gray-100 p-4 rounded-lg">
          <input
            type="text"
            placeholder="Add your comment"
            className="w-full p-3 rounded-lg border border-gray-300 mb-4"
          />
          <button className="btn btn-primary text-white px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700">
            Post Comment
          </button>
        </div>
        <div className=" mt-6">
          {data.comments?.map((comment, index) => (
            <div key={index} className=" mb-4">
              <div className=" font-bold text-gray-700">{comment.userName}</div>
              <div className=" text-gray-600">{comment.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QueryDetails;
