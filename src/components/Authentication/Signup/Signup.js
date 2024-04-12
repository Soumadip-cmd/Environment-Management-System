import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const Signup = () => {
  return (
    <>
      <div className="card-back">
        <div className="center-wrap">
          <div className="section text-center">
            <h4 className="mb-3 pb-3">Sign Up</h4>
            <div className="form-group">
              <input
                type="text"
                className="form-style"
                placeholder="Full Name"
              />
              <i className="input-icon uil uil-user"></i>
            </div>
            <div className="form-group mt-2">
              <input
                type="tel"
                className="form-style"
                placeholder="Phone Number"
              />
              <i className="input-icon uil uil-phone"></i>
            </div>
            <div className="form-group mt-2">
              <input type="email" className="form-style" placeholder="Email" />
              <i className="input-icon uil uil-at"></i>
            </div>
            <div className="form-group mt-2">
              <input
                type="password"
                className="form-style"
                placeholder="Password"
              />
              <i className="input-icon uil uil-lock-alt"></i>
            </div>
            <Link to="/" className="btn1 mt-4">
              Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
