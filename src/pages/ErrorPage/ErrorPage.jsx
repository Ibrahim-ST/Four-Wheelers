import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/e.jpg";
const ErrorPage = () => {
  return (
    <div className="bg-red-200">
      <div class="flex items-center justify-center h-screen">
        <div class="relative">
          <img src={image} className="h-full" alt="" />
          <div class="absolute left-10 top-20 flex  justify-center">
            <span class="text-white text-lg">
              <div className="flex flex-col ">
                <h1 className="text-2xl md:text-9xl text-slate-900 text-center font-extrabold">
                  <span className="text-white">Got</span> Lost?
                </h1>
                <h3 className="text-2xl md:text-9xl text-center font-extrabold">
                  4<span className="text-slate-900">0</span>4
                </h3>
                <span className="text-2xl md:text-9xl  font-extrabold">
                  <span className="text-slate-900">Page not</span> found.
                </span>
              </div>
            </span>
            <Link to="./">
              <button className="btn btn-outline hover:bg-slate-900">Four Wheelers</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
