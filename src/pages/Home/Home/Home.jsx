import React from 'react';
import Gallery from '../Gallery/Gallery';
import Newsletter from '../Newsletter/Newsletter';
import Slider from '../Slider/Slider';
import ToyShop from '../ToyShop/ToyShop';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
          <Helmet>
            <title>Home | Four Wheelers</title>
          </Helmet>
          <Slider></Slider> 
          <Gallery></Gallery>
          <ToyShop></ToyShop>
          <Newsletter></Newsletter>
        </div>
    );
};

export default Home;