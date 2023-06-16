import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import React from "react";
import logo from "../../../assets/logo.png";
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-slate-900  text-white">
        <div>
          <img className="w-32" src={logo} alt="" />
          <p>
            Four Wheelers
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div>
          <span className="footer-title">QUICK LINKS</span>
          <a href="/alltoys" className="link link-hover">All Toys</a>
          <a href="/addtoy" className="link link-hover">Add Toy</a>
          <a href="/blog" className="link link-hover">Blogs</a>
          <a href="/" className="link link-hover">Home</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a> 
          <h3 className="footer-title mb-0">Social Links</h3>
          <div className="flex gap-4">
                <a href="https://www.facebook.com/ibrahim.siddiqueee"><FaFacebook  className="text-[#82D135]" size={30}/>
                </a>
                <a href="https://www.linkedin.com/in/ibrahim-siddiqueee/"><FaLinkedin className="text-[#82D135]" size={30}/>
                </a>
                <a href="https://github.com/Ibrahim-ST"><FaGithub className="text-[#82D135]" size={30}/>
                </a>
              </div>
        </div>
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className=" ">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
