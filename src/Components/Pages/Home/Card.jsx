import React from "react";

const Card = ({ card }) => {
  const {title,image,brand} = card;
  return (
    <div>
     
        <div className="border rounded-xl p-3 w-[580px]">
          <div className="card bg-base-300 w-[550px] p-5 ">
            <div className="flex">
              <figure>
                <img className="w-48 rounded-xl" src={image} />
              </figure>

              <div className="card-body">
                <h2 className="card-title font-bold">{brand}</h2>
                <p>{title}</p>
                {/* <div className="card-actions flex flex-row  pt-5">
                  <button className="btn btn-primary">
                    <Link to="/queryUpdate">Update</Link>
                  </button>
                  <button
                    onClick={() => handleDelete(query._id)}
                    className="btn btn-primary"
                  >
                    Delete
                  </button>
                  <button className="btn btn-primary">
                    <Link to={`/queries/${query._id}`}>Details</Link>
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default Card;
