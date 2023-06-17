import { Rating, ThinStar  } from "@smastrom/react-rating";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
const ToyDetails = () => {
  const toy = useLoaderData();
  console.log("t", toy);
  const {
    seller,
    photoURL,
    price,
    quantity,
    name,
    email,
    rating,
    description,
  } = toy;

  const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: '#ffb700',
    inactiveFillColor: '#fbf1a9'
  }

  return (
    <>
    <Helmet>
        <title>{name} Details</title>
    </Helmet>
    <div className="w-1/2 mx-auto">
      <div className="w-full max-w-xl bg-white border border-gray-200 rounded-lg shadow">
        <img className="rounded-t-lg" src={photoURL} alt="product image" />

        <div className="px-5 pb-5 space-y-1">
          <h5 className="text-3xl text-center font-semibold tracking-tight text-gray-900">
            {name}
          </h5>
          <div className="flex justify-between">
          <p><span className="font-bold">Seller</span>: {seller}</p>
          <p><span className="font-bold">Seller Email</span>: {email}</p>         

          </div>
          <p><span className="font-bold">Quantity</span>: {quantity}</p>
          <p className="flex"><span className="font-bold">Rating</span>: 
          <Rating style={{ maxWidth: 100 }} value={rating}  itemStyles={myStyles} readOnly />
          </p>    
          <p><span className="font-bold">Product Description</span>: {description}</p>
  
          <p className="text-3xl"><span className="font-bold ">Price</span>: ${price}</p>
          <div className="text-center">
          <button className="btn btn-outline border-b-4 border-0 border-red-500 bg-[#161661] text-white">BUY NOW</button>
          </div>
        </div>
      </div>
    </div></>
  );
};

export default ToyDetails;
