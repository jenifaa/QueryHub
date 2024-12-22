import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const MyQueries = () => {
  const data = useLoaderData();
  const [queries, setQueries] = useState(data);
  console.log(data);
  return (
    <div className="mt-28">
      <div
        className="hero h-[450px]"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
           <button className="btn btn-primary"><Link to="/addQueries">Add Query </Link></button>
          </div>
        </div>
      </div>

      {queries.length === 0 ? (
        <div className="text-center py-10">
          <h2 className="text-2xl font-bold">No Queries Found</h2>
          <p className="text-lg">
            You haven't added any queries yet. Start by adding one!
          </p>
         
        </div>
      ) : (
        <div className="grid grid-cols-1 md;:grid-cols-2  lg:w-10/12 gap-5 mx-auto my-6">
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
                    <div className="card-actions flex flex-row  pt-5">
                      <button className="btn btn-primary">
                        <Link to="">Update</Link>
                      </button>
                      <button className="btn btn-primary">
                        <Link to="/addQueries">Delete</Link>
                      </button>
                      <button className="btn btn-primary">
                        <Link to="/addQueries">Details</Link>
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
