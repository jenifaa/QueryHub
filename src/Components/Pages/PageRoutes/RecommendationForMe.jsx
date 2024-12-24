import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";

const RecommendationForMe = () => {
  const [recommendationForMe, setRecommendationForMe] = useState([]);
 const axiosSecure = useAxios();
  console.log(recommendationForMe);
  const { user } = useAuth();
  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/user-recommendation/${user?.email}`)
        .then((res) => {
          setRecommendationForMe(res.data);
        });
    }
  }, [user?.email]);
  return (
    <div className="mt-48">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Product Details</th>
              <th>Recommender</th>
              <th>Feature</th>
              <th> Added time</th>
            </tr>
          </thead>
          <tbody>
            {recommendationForMe.map((allReco) => (
              <tr key={allReco._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={allReco.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{allReco.name}</div>
                      <div className="text-sm opacity-50"> {allReco.title}</div>
                    </div>
                  </div>
                </td>
                <td>{allReco.recommenderName}</td>
                <td>{allReco.reason}</td>
                <td>{allReco.currentDateAndTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecommendationForMe;
