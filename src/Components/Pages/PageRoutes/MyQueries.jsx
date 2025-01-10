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
import { MdOutlineRecommend } from "react-icons/md";
import { Helmet } from "react-helmet-async";

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
            <h1 className="mb-5 text-5xl font-bold">
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
            <button className="btn bg-blue-500 text-white hover:text-blue-600">
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

      {queries.length === 0 ? (
        <div className="text-center py-10">
          <h2 className="text-2xl font-bold">No Queries Found</h2>
          <p className="text-lg">
            Haven't added any queries yet. Start by adding one!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:w-11/12 gap-5 mx-auto my-6 px-2">
          {queries.map((query) => (
           <div
           key={query._id}
           className="border rounded-xl p-5 bg-gray-100 h-full flex flex-col shadow-md hover:shadow-lg transition-shadow"
         >
           <div className="lg:flex gap-6 items-start">
             <figure>
               <img
                 className="lg:w-52 lg:h-52 w-full h-72 lg:mb-0 mb-10 object-cover rounded-md"
                 src={query.image}
                 alt={`Image for ${query.title}`}
               />
             </figure>
         
             <div className="flex-1 flex flex-col justify-between">
               <div>
                 <div className="mb-2">
                   <h2 className="text-2xl font-semibold text-gray-800">{query.title}</h2>
                 </div>
         
                 <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                   <p className="flex items-center gap-1">
                     <CiClock1 />
                     {query.currentDateAndTime}
                   </p>
                   <p className="flex items-center gap-1 px-2 py-1 bg-blue-100">
                     <FaRegEye />
                     {Math.floor(Math.random() * (100000 - 10000) + 10000)} Views
                   </p>
                   <p className="relative group flex items-center gap-1 px-2 bg-blue-200 py-1">
                     <MdOutlineRecommend />
                     {query.recommendationCount}
                     <span className="absolute top-[-35px] left-1/2 transform -translate-x-1/2 hidden group-hover:block bg-black text-white text-xs py-1 px-2 rounded">
                       Recommendation
                     </span>
                   </p>
                 </div>
         
                 <div>
                   <h3 className="font-bold">
                    {query.name}
                   </h3>
                   <p className="text-gray-600">{query.reason}</p>
                 </div>
               </div>
         
             
               <div className="mt-4 flex gap-2 items-center">
                 <button className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors">
                   <Link to={`/queries/user/${query._id}`}>Update</Link>
                 </button>
                 <button
                   onClick={() => handleDelete(query._id)}
                   className="px-4 py-2 bg-red-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors"
                 >
                   Delete
                 </button>
                 <button className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors">
                   <Link to={`/queries/${query._id}`}>Details</Link>
                 </button>
               </div>
             </div>
           </div>
         </div>
         
          ))}
        </div>
      )}
    </div>
  );
};

export default MyQueries;
