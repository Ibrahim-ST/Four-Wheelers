import React from 'react';
import Gallery from '../Gallery/Gallery';
import Newsletter from '../Newsletter/Newsletter';
import Slider from '../Slider/Slider';
import ToyShop from '../ToyShop/ToyShop';

const Home = () => {
    return (
        <div>
          <Slider></Slider> 
          <Gallery></Gallery>
          <ToyShop></ToyShop>
          <Newsletter></Newsletter>
        </div>
    );
};

export default Home;