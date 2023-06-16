import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/alltoys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  console.log(toys);
  return (
    <div className="mx-4">
      <div className="w-full ">
        <h3 className="text-3xl font-semibold m-4">
          Total Toys: {toys.length}
        </h3>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Seller</th>
                <th>Data</th>
                <th>Toy Name</th>
                <th>Sub Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>View Details</th>
              </tr>
            </thead>
            <tbody>
              {toys.map((toy, index) => (
                <tr key={toy._id}>
                  <th>{index + 1}</th>
                  <td>{toy.seller}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask  rounded-full w-12 h-12">
                                <img src={toy.photoURL} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div> 
                    </div>
                    </td>
                  <td>{toy.name}</td>
                  <td>{toy.subCategory}</td>
                  <td>{toy.price}</td>
                  <td>{toy.quantity}</td>
                  <td>
                    <Link to={`/alltoys/${toy._id}`}>
                      <button className="btn btn-outline">View</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
