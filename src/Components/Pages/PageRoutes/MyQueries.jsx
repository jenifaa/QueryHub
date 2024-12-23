import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Typewriter from "typewriter-effect";
import useAuth from "../../Hooks/useAuth";

const MyQueries = () => {
  // const data = useLoaderData();
  const [queries, setQueries] = useState([]);
  const { user } = useAuth();
  console.log(user);
  // console.log(data);
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/queries/user?userEmail=${user.email}`)
        .then((res) => res.json())
        .then((data) => setQueries(data))
        .catch((err) => console.error("Error fetching queries:", err));
    }
  }, [user?.email]);
  console.log(queries);

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
        fetch(`http://localhost:5000/queries/user/${id}`, {
          method: "DELETE",
        })
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

  // const handleDetails = (id) => {
  //   const selectedQuery = queries.find((query) => query._id === id); // Find the selected query
  //   if (!selectedQuery) return; // 
  //   Swal.fire({
  //     title: "Update your product details",

  //     html: `
  //     <input id="title" class="swal2-input" placeholder="Title" value="${selectedQuery.title}" />
  //     <input id="brand" class="swal2-input" placeholder="Brand" value="${selectedQuery.brand}" />
  //     <textarea id="reason" class="swal2-input" placeholder="Reason">${selectedQuery.reason}</textarea>
  //     <textarea id="image" class="swal2-input" placeholder="Image">${selectedQuery.image}</textarea>
  //   `,

  //     focusConfirm: false,

  //     preConfirm: async () => {
  //       const title = document.getElementById("title").value;
  //       const brand = document.getElementById("brand").value;
  //       const reason = document.getElementById("reason").value;
  //       const image = document.getElementById("image").value;
  //       if (!title || !brand || !reason || !image) {
  //         Swal.showValidationMessage("All fields are required.");
  //         return;
  //       }
  //       try {
  //         const response = await fetch(
  //           `http://localhost:5000/queries/user/${id}`,
  //           {
  //             method: "PUT",
  //             headers: {
  //               "content-type": "application/json",
  //             },
  //             body: JSON.stringify({
  //               title,
  //               brand,
  //               image,
  //               reason,
  //             }),
  //           }
  //         );
  //         if (!response.ok) {
  //           return Swal.showValidationMessage(
  //             `Failed to update product: ${response.statusText}`
  //           );
  //         }
  //         const updatedQuery = await response.json();
  //         return updatedQuery;
  //       } catch (error) {
  //         Swal.showValidationMessage(`
  //         Request failed: ${error}
  //       `);
  //       }
  //     },
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       Swal.fire({
  //         title: "Update Successful!",
  //         text: `Query have been updated successfully.`,
  //         icon: "success",
  //       });
  //       const updatedQuery = result.value;
  //       setQueries(
  //         queries.map((query) => {
  //           query._id === updatedQuery._id ? updatedQuery : query;
  //         })
  //       );
  //     }
  //   });
  // };

  return (
    <div className="mt-28">
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
            <button className="btn btn-primary">
              <Link to="/addQueries">Add Query </Link>
            </button>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-5xl font-bold text-center my-10">My Queries</h2>
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
        <div className="grid grid-cols-1 md:grid-cols-2  lg:w-11/12 gap-5 mx-auto my-6">
          {queries.map((query) => (
            <div key={query._id} className="border rounded-xl p-3 ">
              <div className="card bg-base-300  p-3 ">
                <div className="lg:flex">
                  <figure>
                    <img className="lg:w-56 lg:h-56 rounded-xl" src={query.image} />
                  </figure>

                  <div className="card-body">
                    <h2 className="card-title font-bold">{query.name}</h2>
                    <p>{query.title}</p>
                    <p><span className="font-bold">Brand: </span> {query.brand}</p>
                    <p><span className="font-bold">Reason for Boycotting: </span> {query.reason}</p>
                    <p>{query.currentDateAndTime}</p>
                    <div className="card-actions flex flex-row  pt-5">
                     
                      <button className="btn btn-primary">
                        <Link to={`/queries/user/${query._id}`}>Update</Link>
                      </button>
                      <button
                        onClick={() => handleDelete(query._id)}
                        className="btn bg-red-700 text-white font-semibold"
                      >
                        Delete
                      </button>
                      <button className="btn btn-primary">
                        <Link to={`/queries/${query._id}`}>Details</Link>
                      </button>
                    </div>
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
