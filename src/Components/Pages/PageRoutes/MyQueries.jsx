import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Typewriter from "typewriter-effect";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import useAxios from "../../Hooks/useAxios";
import Header from "../Layout/Header";
import { CiClock1 } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { MdDeleteForever, MdOutlineRecommend } from "react-icons/md";
import { Helmet } from "react-helmet-async";
import { FaRegEdit } from "react-icons/fa";
const MyQueries = () => {
  // const data = useLoaderData();
  const [queries, setQueries] = useState([]);
  const { user } = useAuth();
  const axiosSecure = useAxios();

  useEffect(() => {
    if (user?.email) {
      axiosSecure.get(`/queries/user?userEmail=${user.email}`).then((res) => {
        setQueries(res.data);
      });
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://assignment-11-server-seven-liard.vercel.app/queries/user/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Application has been deleted.",
                icon: "success",
              });

              setQueries(queries.filter((queryId) => queryId._id != id));
            }
          });
      }
    });
  };

  return (
    <div className="mt-[50px]">
      <Helmet>
        <title>QueryHive | MyQueries</title>
      </Helmet>

      <Header></Header>
      <div
        className="hero h-[500px]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/d7SymqR/freepik-candid-image-photography-natural-textures-highly-r-65182.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold colo">
              <Typewriter
                options={{
                  strings: [
                    "Welcome to Query Hive!",
                    "Explore Questions, Share Ideas!",
                    "Discover Insights, Add Recommendations!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="mb-5 ">
              A platform where you can add, explore, and manage queries. Join
              the community and find insights on various topics.
            </p>
            <button className="px-6 py-3 text-md rounded-md hover:bg-red-900 text-white bg-red-950 ">
              <Link to="/addQueries">Add Query </Link>
            </button>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-5xl font-bold text-center my-10">
          My <span className="text-6xl text-red-900">Q</span>ueries
        </h2>
      </div>
      <hr />

      <div className="overflow-x-auto min-h-screen">
        {queries.length === 0 ? (
          <div className="text-center py-10">
            <h2 className="text-2xl font-bold">No Queries Found</h2>
            <p className="text-lg">
              Haven't added any queries yet. Start by adding one!
            </p>
          </div>
        ) : (
          <table className="table">
            {/* Table Header */}
            <thead>
              <tr>
                <th></th>
                <th>Product</th>
                <th>Added Time</th>
                <th>Recommendation</th>
                <th>Update</th>
                <th>Delete</th>
                <th>Details</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {queries.map((query, index) => (
                <tr key={query._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={query.image} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{query.name}</div>
                        <div className="text-sm opacity-70">{query.brand}</div>
                      </div>
                    </div>
                  </td>
                  <td>{query.currentDateAndTime}</td>
                  <td>{query.recommendationCount}</td>
                  <td>
                    <button>
                      <Link to={`/queries/user/${query._id}`}>
                        <FaRegEdit className="text-2xl text-blue-600"/>
                      </Link>
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(query._id)}
                      // className="px-4 py-2 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition-colors"
                    >
                      <MdDeleteForever className="text-2xl text-red-700" />
                    </button>
                  </td>
                  <td>
                    <button className="px-2 py-1 bg-blue-500 text-xs text-white font-medium rounded-md hover:bg-blue-600 transition-colors">
                      <Link to={`/queries/${query._id}`}>Details..</Link>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default MyQueries;
