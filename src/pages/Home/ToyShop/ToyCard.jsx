import React from "react";
import { Link } from "react-router-dom";

const ToyCard = ({toy}) => {
    const {_id, name, price,  photoURL} = toy;
  return (
    <div>         
      <div className="card w-96 bg-base-300 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={photoURL} alt="Shoes" className="rounded-xl h-44" />
        </figure>
        <div className="card-body ">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <p className="text-orange-500 font-bold">Price : ${price}</p>
          <div className="card-actions">
            <Link to={`/alltoys/${_id}`}>
              <button className="btn btn-outline">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyCard; 