import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const AddToy = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useContext(AuthContext);
  const { displayName, email } = user;
  const onSubmit = (data) => {
    console.log(data);

    fetch('http://localhost:5000/addtoy',{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        reset();
        if(data.insertedId){
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'New Toy added successfully',
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
  };
  return (
    <div className="w-full px-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Toy Name*</span>
          </label>
          <input
            type="text"
            placeholder="Toy Name"
            {...register("name", { required: true, maxLength: 120 })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Toy Image*</span>
          </label>
          <input
            type="text"
            placeholder="Toy Image"
            {...register("photoURL", { required: true, maxLength: 520 })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="flex gap-2 my-4">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">Seller name*</span>
            </label>
            <input
              {...register("seller", {
                required: true,
                maxLength: 120,
              })}
              value={displayName}
              readOnly
              type="text"
              className="input input-bordered w-full text-black"
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">Seller email*</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: true,
                maxLength: 120,
              })}
              value={email}
              readOnly
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="flex gap-2">

        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Sub Category*</span>
          </label>
          <input
            type="text"
            placeholder="Jeep or Car or Truck"
            {...register("subCategory", { required: true, maxLength: 120 })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Available Quantity*</span>
          </label>
          <input
            type="text"
            placeholder="Available Quantity"
            {...register("quantity", { required: true, maxLength: 120 })}
            className="input input-bordered w-full "
          />
        </div>
        </div>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Detail description*</span>
          </label>
          <input
            type="text"
            placeholder="Detail description"
            {...register("description", { required: true, maxLength: 120 })}
            className="input input-bordered w-full "
          />
        </div>

        <div className="flex gap-2 my-4">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">Rating*</span>
            </label>
            <input
              type="text"
              {...register("rating", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              type="text"
              {...register("price", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
        </div>

        <div className="text-center">
          <input
            className="btn btn-outline bg-slate-100 border-0 border-b-4 border-[#28A745] mb-4"
            type="submit"
            value="Add New Toy"
          />
        </div>
      </form>
    </div>
  );
};

export default AddToy;
