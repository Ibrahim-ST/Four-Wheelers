import React from "react";

const Slider = () => {
  return (
    <div>
      <div className="carousel w-full h-[650px] bg-slate-900 "> 
        <h3>Your cars</h3>
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://pngimg.com/d/camaro_PNG17.png"
            className="object-contain md:w-5/6 mx-auto h-screen"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://purepng.com/public/uploads/large/purepng.com-chevrolet-camaro-black-carcarcarsvehiclevehiclestransport-561521126664dkdbq.png"
            className="object-contain md:w-5/6 mx-auto h-screen"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://pngimg.com/d/camaro_PNG19.png"
            className="object-contain md:w-5/6 mx-auto h-screen"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://pngimg.com/d/camaro_PNG17.png"
            className="object-contain md:w-5/6 mx-auto h-screen"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
