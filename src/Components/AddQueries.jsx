import React, { useState } from "react";
import Navbar from "./Pages/Layout/Navbar";
import useAuth from "./Hooks/useAuth";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AddQueries = () => {
  const { user } = useAuth();

  const [recommendation, setRecommendaton] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());

    const newData = {
      ...initialData,
      userEmail: user?.email,
      userName: user?.displayName,
      userProfileImage: user?.photoURL,
      currentDateAndTime: new Date().toISOString(),
      recommendationCount: 0,
    };

    fetch("https://assignment-11-server-seven-liard.vercel.app/queries", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        // if()
       if(data.insertedId){
        Swal.fire({
          title: " Query Added",
          text: "Your Query Added to the list",
          icon: "success"
        });

       }
        e.target.reset();
      });

    
  };

  return (
    <div>
      <Navbar></Navbar>
      <Helmet>
        <title>QueryHive | Add Queries</title>
      </Helmet>

      <div className="card bg-base-200 w-full md:w-10/12 mx-auto mt-36 mb-10">
        <h2 className="text-center text-3xl font-bold pb-3 pt-10">Add Query</h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Brand</span>
            </label>
            <input
              type="text"
              name="brand"
              placeholder="Product Brand"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Query Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Query Title"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Image Url</span>
            </label>
            <input
              type="url"
              name="image"
              placeholder="Product Image url"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Boycotting Reason Details</span>
            </label>
            <input
              type="text"
              name="reason"
              placeholder="Boycotting Reason Details"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add Query</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddQueries;
