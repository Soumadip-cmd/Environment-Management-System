import React from "react";
import './Login.css';
import Signup from "../Signup/Signup";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {
  return (
    <div className="auth-body">
      <div className="section">
        <div className="container">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 className="mb-0 pb-3">
                  <span className="">Log In </span>
                  <span className="">Sign Up</span>
                </h6>
                <input
                  className="checkbox"
                  type="checkbox"
                  id="reg-log"
                  name="reg-log"
                />
                <label htmlFor="reg-log"></label>
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Log In</h4>
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-style"
                              placeholder="Email"
                            />
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
                          <Link
                            to="/home"
                            className="btn mt-4"
                          >
                            Login
                          </Link>
                          <p className="mb-0 mt-4 text-center">
                            <Link to="/" className="link">
                              Forgot your password?
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                   <Signup/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
