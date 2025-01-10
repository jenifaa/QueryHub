import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import updateImg from "../assets/images/Update-rafiki.png";
import Navbar from "./Pages/Layout/Navbar";
const QueryUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      title: e.target.title.value,
      brand: e.target.brand.value,
      reason: e.target.reason.value,
      image: e.target.image.value,
      currentDateAndTime: new Date().toISOString(),
    };
    fetch(
      `https://assignment-11-server-seven-liard.vercel.app/queries/user/${id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        navigate("/myQueries");
      });
  };

  return (
    <div className="pt-20 bg-base-200">
      <Navbar></Navbar>
      <div className="flex  w-10/12 mx-auto">
        <div>
          <img src={updateImg} alt="" />
        </div>
        <div className="lg:w-10/12 mx-auto">
          <h2 className="text-center font text-5xl font-bold">
            Update Your Query
          </h2>
          <form onSubmit={handleUpdate} className="card-body">
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
              <button className="btn bg-blue-500 text-white"> Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QueryUpdate;
