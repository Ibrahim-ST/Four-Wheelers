import React from 'react';
import Gallery from '../Gallery/Gallery';
import Slider from '../Slider/Slider';
import ToyShop from '../ToyShop/ToyShop';

const Home = () => {
    return (
        <div>
          <Slider></Slider> 
          <Gallery></Gallery>
          <ToyShop></ToyShop>
        </div>
    );
};

export default Home;