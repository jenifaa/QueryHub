import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";


const RecommendationForMe = () => {
  const [recommendationForMe, setRecommendationForMe] = useState([]);
  console.log(recommendationForMe);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/user-recommendation/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setRecommendationForMe(data);
      });
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
            {
                recommendationForMe.map(allReco =>   <tr key={allReco._id}>
              
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
                    <td>
                     {allReco.recommenderName}
                      
                    </td>
                    <td>{allReco.reason}</td>
                    <td>{allReco.currentDateAndTime}</td>
                  
                  </tr>)
            }
          
           
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecommendationForMe;
