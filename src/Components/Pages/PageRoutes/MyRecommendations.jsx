import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import Loading from "../Layout/Loading";
import useAxios from "../../Hooks/useAxios";
import { Helmet } from "react-helmet-async";

const MyRecommendations = () => {
  const [myRecommendation, setMyRecommendation] = useState([]);
  const { user, loading } = useAuth();

  const axiosSecure = useAxios();
  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/recommendedUser/${user.email}?userEmail=${user.email}`)
        .then((res) => {
          setMyRecommendation(res.data);
        });
    }
  }, [user]);


  const handleRecommendationDelete = (id) => {
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
          `https://assignment-11-server-seven-liard.vercel.app/recommendedUser/${id}`,
          {
            method: "DELETE", 
          }
        )
          .then((res) => {
            if (!res.ok) {
              throw new Error("Failed to delete recommendation");
            }
            return res.json();
          })
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your recommendation has been deleted.",
                icon: "success",
              });
  
              setMyRecommendation(
                myRecommendation.filter((allReco) => allReco._id !== id)
              );
            } else {
              Swal.fire({
                title: "Error!",
                text: data.message || "Could not delete the recommendation.",
                icon: "error",
              });
            }
          })
          .catch((error) => {
            console.error("Error deleting recommendation:", error);
            Swal.fire({
              title: "Error!",
              text: "Something went wrong. Please try again later.",
              icon: "error",
            });
          });
      }
    });
  };
  
  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="mt-32 lg:mt-20">
      <Helmet>
        <title>QueryHive | My Recommendation</title>
      </Helmet>

      <h2 className="my-10 text-center font-bold text-4xl font">My <span className="text-6xl text-red-950">R</span>ecommendation</h2>
      <hr className="my-9"/>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Product Details</th>

              <th>Feature</th>
              <th> Added time</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {myRecommendation.map((myReco) => (
              <tr key={myReco._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={myReco.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{myReco.name}</div>
                      <div className="text-sm opacity-80"> {myReco.title}</div>
                    </div>
                  </div>
                </td>

                <td>{myReco.reason}</td>
                <td>{myReco.currentDateAndTime}</td>
                <td>
                  {" "}
                  <button
                    onClick={() => handleRecommendationDelete(myReco._id)}
                  >
                    <MdDeleteForever className="text-xl text-red-700" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyRecommendations;
