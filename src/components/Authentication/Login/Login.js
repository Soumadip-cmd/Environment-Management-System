import React, { useState } from "react";
import "./Login.css";
import Signup from "../Signup/Signup";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {
  const [login, setLogin] = useState({ email: "", password: "" });
  let history = useHistory();
  const submit = async (e) => {
    e.preventDefault();
    let email = Array.isArray(login.email) ? login.email[0] : login.email;
    let password = Array.isArray(login.password)
      ? login.password[0]
      : login.password;
    const url = "http://localhost:8080/login";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });
    const json = await response.json();
    // console.log(json.Tag_Number);
    if (json.Success) {
      //save the auth-token and redirect to yournote page
      localStorage.setItem("Auth-Token", json.Tag_Number);
      history.push("/");
      // showAlert("success","Successfully Logged In..")
      alert("Successfully Logged In..");
    } else {
      // showAlert("danger","Login Failed!!..Check Again..")
      alert("Login Failed!!..Check Again..");
    }
  };

  const changing = (e) => {
    setLogin({ ...login, [e.target.name]: [e.target.value] });
  };

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
                          <form onSubmit={submit}>
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-style"
                                placeholder="Email"
                                value={login.email}
                                name="email"
                                onChange={changing}
                                required
                              />
                              <i className="input-icon uil uil-at"></i>
                            </div>
                            <div className="form-group mt-2">
                              <input
                                type="password"
                                className="form-style"
                                placeholder="Password"
                                value={login.password}
                                name="password"
                                onChange={changing}
                                required
                              />
                              <i className="input-icon uil uil-lock-alt"></i>
                            </div>
                            <button className="btn1 mt-4">Login</button>
                            <p className="mb-0 mt-4 text-center">
                              <Link to="/" className="link">
                                Forgot your password?
                              </Link>
                            </p>
                          </form>
                        </div>
                      </div>
                    </div>
                    <Signup />
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
