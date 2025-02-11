import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import { Helmet } from "react-helmet-async";


const RecommendationForMe = () => {
  const [recommendationForMe, setRecommendationForMe] = useState([]);
 const axiosSecure = useAxios();
 
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
    <div className="mt-32 lg:mt-20">
      <Helmet>
        <title>QueryHive | Recommendation for me</title>
      </Helmet>

      <h2 className="font text-3xl font-bold text-center my-10">Recommendation For ME</h2>
      <hr className="mb-5"/>
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
                      <div className="text-sm opacity-80 colo"> {allReco.title}</div>
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
