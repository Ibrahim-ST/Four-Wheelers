import React from "react";
import { Link } from "react-router-dom";
import logo from '../../../assets/logo.png'
const NavBar = () => {
const navItems = <>
    <li> <Link to='/'>Home</Link> </li>
      <li> <Link to='/about'>About</Link> </li>
      <li> <Link to='/about'>Blog</Link> </li>
      <li> <Link to='/login'>Login</Link> </li>
</>

  return (
    <div>
      <div className="navbar bg-base-300">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <img src={logo} className='w-20 hidden md:block' alt="" />
           
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-outline btn-secondary text-xl font-bold">Four Wheelers</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;