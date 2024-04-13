import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Signup = () => {
  const [signup, setSignup] = useState({
    name: "",
    email: "",
    password: "",
    ph: "",
  });
  let history = useHistory();
  const submit = async (e) => {
    e.preventDefault();

    let { name, password, email, ph } = signup;

    name = Array.isArray(name) ? name[0] : name;
    password = Array.isArray(password) ? password[0] : password;
    email = Array.isArray(email) ? email[0] : email;
    ph = Array.isArray(ph) ? ph[0] : ph;

    const url = "http://localhost:8080/create";
    const response = await fetch(url, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ name, ph, email, password }),
    });
    let answer = await response.json();
    if (answer.Success) {
      // console.log(answer)
      localStorage.setItem("iNote-Book[Tag]:", answer.token);
      history.push("/");
      // showAlert('success','Successfully Sign In..')
      alert("Successfully Sign In..");
    } else {
      // showAlert('warning','Invalid Credentials!..Check Again..')
      alert("Invalid Credentials!..Check Again..");
    }
  };
  const changing = (e) => {
    setSignup({ ...signup, [e.target.name]: [e.target.value] });
  };

  return (
    <>
      <div className="card-back">
        <div className="center-wrap">
          <div className="section text-center">
            <h4 className="mb-3 pb-3">Sign Up</h4>
            <form onSubmit={submit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-style"
                  placeholder="Full Name"
                  name="name"
                  value={signup.name}
                  onChange={changing}
                  required
                />
                <i className="input-icon uil uil-user"></i>
              </div>
              <div className="form-group mt-2">
                <input
                  type="tel"
                  className="form-style"
                  placeholder="Phone Number"
                  name="ph"
                  value={signup.ph}
                  onChange={changing}
                  required
                />
                <i className="input-icon uil uil-phone"></i>
              </div>
              <div className="form-group mt-2">
                <input
                  type="email"
                  className="form-style"
                  placeholder="Email"
                  name="email"
                  value={signup.email}
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
                  name="password"
                  value={signup.password}
                  onChange={changing}
                  required
                />
                <i className="input-icon uil uil-lock-alt"></i>
              </div>
              <button className="btn1 mt-4">Register</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
