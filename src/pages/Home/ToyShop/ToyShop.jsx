import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ToyCard from "./ToyCard";

const ToyShop = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  return (
    <div>
      <h5 className="mb-2 text-center text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
        Popular Toys
      </h5>
      <p className="w-2/3 mx-auto my-4 text-gray-600 text-justify">
      Rev up the excitement with our collection of popular car toys. From sleek race cars to rugged off-road vehicles, our selection is packed with high-speed thrills for young car enthusiasts. Let your child's creativity hit the accelerator as they embark on thrilling adventures, conquering imaginary tracks and exploring imaginary worlds. 
      </p> 
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {toys.map((toy) => (
            <ToyCard key={toy._id} toy={toy}></ToyCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToyShop;
