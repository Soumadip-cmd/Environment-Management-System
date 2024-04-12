import React from "react";
import WaterHeader from "./WaterHeader"; // Import the WaterHeader component
import "./WaterManagement.css";

const WaterManagement = () => {
  return (
    <div className="water-body">
      <WaterHeader /> {/* Include the WaterHeader component */}
      <div className="">
        <span style={{ position: "relative" }}>
          <img
            src="https://source.unsplash.com/random/1536x500?/nature"
            className="img-fluid profile-bg-fix"
            alt="background image"
          />
          <div className="float-start profile-pos">
            <img
              src="profile.png"
              className="img-fluid img-style mx-2 profile_condition"
              alt="profile"
            />
            <span className="fs-1 mx-3" style={{ fontWeight: "800" }}>
              Soumadip Santra
            </span>
          </div>
          <div className="float-end bgbtn-pos">
            <button className="p-1 mx-2 perfect">
              <img
                src="padlock.png"
                alt="lock"
                className="mx-1 my-0"
                width="20"
                height="20"
              />
              Privacy
            </button>
            <img
              src=""
              className="img-fluid profile-bg-fix"
              alt="background image"
            />
          </div>
        </span>
      </div>
    </div>
  );
};

export default WaterManagement;
