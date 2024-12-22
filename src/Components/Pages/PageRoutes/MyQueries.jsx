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

  const handleDetails = () => {
    Swal.fire({
      title: "Submit your Github username",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Look up",
      showLoaderOnConfirm: true,
      preConfirm: async (login) => {
        try {
          const githubUrl = `
          https://api.github.com/users/${login}
        `;
          const response = await fetch(githubUrl);
          if (!response.ok) {
            return Swal.showValidationMessage(`
            ${JSON.stringify(await response.json())}
          `);
          }
          return response.json();
        } catch (error) {
          Swal.showValidationMessage(`
          Request failed: ${error}
        `);
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url,
        });
      }
    });
  };

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
            You haven't added any queries yet. Start by adding one!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2  lg:w-10/12 gap-5 mx-auto my-6">
          {queries.map((query) => (
            <div key={query._id} className="border rounded-xl p-3 w-[580px]">
              <div className="card bg-base-300 w-[550px] p-5 ">
                <div className="flex">
                  <figure>
                    <img className="w-48 rounded-xl" src={query.image} />
                  </figure>

                  <div className="card-body">
                    <h2 className="card-title font-bold">{query.brand}</h2>
                    <p>{query.title}</p>
                    <p>{query.currentDateAndTime}</p>
                    <div className="card-actions flex flex-row  pt-5">
                      <button
                        onClick={handleDetails}
                        className="btn btn-primary"
                      >
                        {/* <Link to="/queryUpdate">Update</Link> */}
                        Update
                      </button>
                      {/* <button className="btn btn-primary">
                        <Link to="/queryUpdate">Update</Link>
                      </button> */}
                      <button
                        onClick={() => handleDelete(query._id)}
                        className="btn bg-red-700 text-white font-semibold"
                      >
                        Delete
                      </button>
                      <button className="btn btn-primary">
                        <Link to={`/queries/user/${query._id}`}>Details</Link>
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
