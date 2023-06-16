import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ToyCard from "./ToyCard";
import ToyTab from "./ToyTab";

const ToyShop = () => {
  const [toys, setToys] = useState([]); 

  useEffect(() => {
    fetch("http://localhost:5000/alltoys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const car = toys.filter((item) => item.subCategory === "Car");
  const truck = toys.filter((item) => item.subCategory === "Truck");
  const jeep = toys.filter((item) => item.subCategory === "Jeep");
  console.log(truck);
  return (
    <div>
      <h5 className="mb-2 text-center text-5xl font-extrabold tracking-tight text-gray-900 uppercase">
        Shop By Category
      </h5>
      <p className="w-2/3 mx-auto my-4 text-gray-600 text-justify">
        Rev up the excitement with our collection of popular car toys. From
        sleek race cars to rugged off-road vehicles, our selection is packed
        with high-speed thrills for young car enthusiasts. Let your child's
        creativity hit the accelerator as they embark on thrilling adventures,
        conquering imaginary tracks and exploring imaginary worlds.
      </p>
      <Tabs>
        <div className="text-center">
        <TabList>
          <Tab>All</Tab>
          <Tab>Car</Tab>
          <Tab>Jeep</Tab>
          <Tab>Truck</Tab>
        </TabList>
        </div>

        <TabPanel>
          <ToyTab items={toys}></ToyTab>
        </TabPanel>
        <TabPanel>
          <ToyTab items={car}></ToyTab>
        </TabPanel>
        <TabPanel>
          <ToyTab items={jeep}></ToyTab>
        </TabPanel>
        <TabPanel>
          <ToyTab items={truck}></ToyTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ToyShop;
