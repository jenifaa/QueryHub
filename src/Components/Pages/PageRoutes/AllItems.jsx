import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllItems = () => {
  const [tableItems, setTableItem] = useState([]);
  useEffect(() => {
    fetch("https://assignment-11-server-seven-liard.vercel.app/queries/all")
      .then((res) => res.json())
      .then((data) => {
       
        setTableItem(data);
      });
  }, []);
  return (
    <div className="my-24">
      <div className="mb-10">
        <h2 className="text-5xl font font-bold text-center mt-12 mb-3">
          All <span className="text-6xl font-extrabold text-red-900">Q</span>
          ueries Table
        </h2>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Query</th>
                <th>Recommendation</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {tableItems.map((tableItem, index) => (
                <tr key={index}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={tableItem.image} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{tableItem.name}</div>
                        <div className="text-sm opacity-80">{tableItem.brand}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                   {tableItem.title}
                  </td>
                  <td>{tableItem.recommendationCount}</td>
                  <th>
                    <Link  to={`/queries/${tableItem._id}`} className="btn bg-red-900 text-white btn-xs">View details..</Link>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllItems;
