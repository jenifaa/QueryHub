import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import Loading from "../Layout/Loading";
import useAxios from "../../Hooks/useAxios";
const MyRecommendations = () => {
  const [myRecommendation, setMyRecommendation] = useState([]);
  const { user, loading } = useAuth();
  console.log(user);
  const axiosSecure = useAxios();
  useEffect(() => {
    // fetch(`http://localhost:5000/recommendedUser/${user?.email}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setMyRecommendation(data);
    //   })
    //   .catch((error) => {
        // fetch(`http://localhost:5000/recommendedUser/${user.email}?userEmail=${user.email}`
    //     console.log(error);
    //   });
    if (user?.email) {
      axiosSecure
        .get(`/recommendedUser/${user.email}?userEmail=${user.email}`)
        .then((res) => {
          setMyRecommendation(res.data);
        });
    }
  }, [user]);
  console.log(myRecommendation);

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
        fetch(`http://localhost:5000/recommendedUser/${id}`, {
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

              setMyRecommendation(
                myRecommendation.filter((allReco) => allReco._id != id)
              );
            }
          });
      }
    });
  };
  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="mt-48">
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
                      <div className="text-sm opacity-50"> {myReco.title}</div>
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
