import React from "react";
import { useNavigate, useParams } from "react-router-dom";

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
    fetch(`https://assignment-11-server-seven-liard.vercel.app/queries/user/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {

   
        navigate("/myQueries");
      });
  };

  return (
    <div>
      <h2 className="text-center text-4xl font-bold my-5">update your query</h2>
      <form onSubmit={handleUpdate} className="w-8/12 mx-auto card-body">
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
          <button className="btn btn-primary">Add Update</button>
        </div>
      </form>
    </div>
  );
};

export default QueryUpdate;
