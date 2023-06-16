import { ToastContainer, toast } from "react-toastify";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
  const { createUser, updateUser, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(email, photo, name, password);

    if (password.length < 6) {
        toast("Password must be 6 digit long", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
      return;
    }

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        toast("User created Successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }); 
        updateUser(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            console.log("user name updated");
            logOut()
            .then(() => {
              navigate("/login");
            }); 
          })
          .catch((error) => {
            console.log('this',error);
          });
      })
      .catch((error) => { 
        const errMsg = error.message;
        if (errMsg.includes("auth/email-already-in-use")) {
            toast("User already exist! Use another email", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
          }
        console.log(errMsg);
      });
  };
  return (
    <div className=" min-h-screen bg-base-200">
      <div className=" md:w-1/2 mx-auto hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up!</h1>
        </div>
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  name="photo"
                  defaultValue="https://i.ibb.co/dPLwMqQ/output.png"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Your Password"
                  name="password"
                  className="input input-bordered"
                />
              </div>
 
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <label className="label">
                <Link to="/login" className="label-text-alt link link-hover">
                  Already Registered? Login
                </Link>
              </label>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default SignUp;
