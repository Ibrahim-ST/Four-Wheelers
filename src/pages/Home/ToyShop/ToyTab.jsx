import React from "react";
import ToyCard from "./ToyCard";

const ToyTab = ({items}) => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((toy) => (
            <ToyCard key={toy._id} toy={toy}></ToyCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToyTab;
