import React, { useEffect, useState } from "react";
import './Admin.css'
import { Link } from "react-router-dom";
import axios from "axios";

export default function Myleave() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/rewards-claim")
      .then((result) => {
        setUsers(result.data);
        console.log(result.data);
      });
  }, []);

const handleApprove = (userId) => {
  axios.put(`http://localhost:8080/rewards-claim/${userId}`, { status: "Approved" })
    .then((response) => {
      // Find the index of the user in the users array
      const index = users.findIndex(user => user._id === userId);
      // Create a copy of the users array
      const updatedUsers = [...users];
      // Update the status of the user in the copied array
      updatedUsers[index] = { ...updatedUsers[index], status: "Approved" };
      // Update the state with the modified users array
      setUsers(updatedUsers);
    })
    .catch((error) => {
      console.error("Error approving user:", error);
    });
};

// Function to handle rejection of a user
const handleReject = (userId) => {
  axios.put(`http://localhost:8080/rewards-claim/${userId}`, { status: "Rejected" })
    .then((response) => {
      // Find the index of the user in the users array
      const index = users.findIndex(user => user._id === userId);
      // Create a copy of the users array
      const updatedUsers = [...users];
      // Update the status of the user in the copied array
      updatedUsers[index] = { ...updatedUsers[index], status: "Rejected" };
      // Update the state with the modified users array
      setUsers(updatedUsers);
    })
    .catch((error) => {
      console.error("Error rejecting user:", error);
    });
};

  return (
    <>
      <div style={{ minHeight: "100%" }}>
        <nav
          className="navbar navbar-expand-lg"
          style={{ backgroundColor: "rgb(0 77 255 / 65%)" }}
        >
          <div className="container">
            <Link
              className="navbar-brand"
              style={{ fontSize: "25px", color: "white", letterSpacing: ".05125em" }}
              to="/"
            >
              Garbage , Water & Reward Tracking
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="/navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" style={{ color: "white" }} to="/">
                    <span className="ms-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="14"
                        fill="currentColor"
                        className="bi bi-house"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                      </svg>
                    </span>
                    Home
                    <span className="ms-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-left-short"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
                        />
                      </svg>
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" style={{ color: "white" }} to="/Applyleave">
                    Garbage Service
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" style={{ color: "white" }} to="/leavehistory">
                    Water Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container my-2 pt-3">
          <h2> Services Tracking</h2>
        </div>
        <div className="container mt-3" style={boxstyle}>
          <h4>View </h4>
          <br />
          Show
          <select className="p-2 m-1 px-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
          entries
          <form className="d-flex float-end">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search.."
              aria-label="Search"
            />
            <button className="btn btn-outline-danger" type="submit">
              Search
            </button>
          </form>
          <div className="container m-2">
            <div className="row">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Service Type</th>
                    <th>Photo Proof</th>

                    <th>Live Location</th>
                    <th> Manuall Location</th>
                    <th>Description</th>

                    <th>Contributed  On</th>
                    <th>Email ID </th>
                    <th>Mobile Number</th>
                    <th>Action</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={user._id}>
                      <td>{index + 1}</td>
                      <td>{user.user_name}</td>

                      <td>
                        {user.work_type === 'other' ? `${user.work_type}: ${user.other_worktype}` : user.work_type}
                      </td>



                      <td>
                        <img src={`http://localhost:8080/Server/Public/RewardWorkProof/${user.user_docx}`}
                          alt="UserPhoto"
                          height="111px"
                          width="149px"
                        />
                      </td>


                      <td> {user.user_liveaddress}</td>
                      <td>{user.user_address}</td>
                      <td>
                        
                        {user.description}
                      </td>
                      <td>
                        {user.date_time && (
                          <>
                            Date: {new Date(user.date_time).toLocaleDateString()}<br />
                            Time: {new Date(user.date_time).toLocaleTimeString()}
                          </>
                        )}
                      </td>

                      <td>{user.user_email}</td>
                      <td>{user.user_emergencyphneno}</td>
                     
                      <td>
                        <span className="badge bg-success"
                          style={{
                            margin: "5px",
                            pading: "30px",
                            width: "65px",
                            height: "25px",
                            cursor: "pointer"
                          }} onClick={() => handleApprove(user._id)}>Approve</span>
                        <span className="badge bg-danger"
                          style={{
                            margin: "5px",
                            pading: "30px",
                            width: "65px",
                            height: "23px",
                            cursor: "pointer"
                          }}  onClick={() => handleReject(user._id)}
                        >Reject</span>

                      </td>
                      <td>{user.status}</td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          </div>
          <div className="container m-2" style={{ background: "white", height: "25px" }}>
            <p className="float-start my-2">Showing 1 to 2 of 2 entries</p>
            <div
              className="btn-group float-end my-2"
              role="group"
              aria-label="Basic outlined example"
            >
              <button type="button" className="btn btn-outline-primary">
                &#11164;
              </button>
              <button type="button" className="btn btn-outline-primary active">
                1
              </button>
              <button type="button" className="btn btn-outline-primary">
                &#11166;
              </button>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

const boxstyle = {
  background: "white",
  padding: "21px",
  borderTop: "5px solid #004dffe8",
  borderRadius: "5px",
  height: "auto",
};
