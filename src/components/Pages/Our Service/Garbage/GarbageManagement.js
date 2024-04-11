import React from "react";
import "./GarbageManegment.css";
import GarbageHeader from "./GarbageHeader";

const GarbageManagement = () => {
  return (
    <div className="garbage-body">
      <div className="">
        <GarbageHeader />
        <span style={{ position: "relative" }}>
          <img
            src="https://source.unsplash.com/random/1536x500?/nature"
            className=" img-fluid"
            alt="background image"
          />
          <div className="float-start profile-pos">
            <img
              src="profile.png"
              className=" img-fluid img-style mx-2"
              alt="profile"
            />
            {/* <button className="pb-1 mx-2 perfect extra-pos my-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-camera-fill"
                viewBox="0 0 16 16"
              >
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0" />
              </svg>
            </button> */}
            <label for="file-upload" className="profile-file-upload p-1 mx-2 perfect extra-pos my-0" >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-camera-fill"
                viewBox="0 0 16 16"
              >
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0" />
              </svg>
            </label>
            <input id="file-upload" type="file" accept="image/*" capture="user"/>

            <span className="fs-1 mx-3" style={{ ffontWeight: "800" }}>
              Soumadip Santra
            </span>
          </div>
          <div className="float-end bgbtn-pos">
            <button className="pb-1 mx-2 perfect">
              <img
                src="padlock.png"
                alt="lock"
                className="mx-1 my-0"
                width="20"
                height="20"
              />
              Privacy
            </button>
            <label for="file-upload" className="profile-file-upload p-1 mx-2 perfect my-0" >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-camera-fill"
                viewBox="0 0 16 16"
              >
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0" />
              </svg>
            </label>
            <input id="file-upload" type="file" accept="image/*" capture="user"/>
          </div>
        </span>
      </div>
    </div>
  );
};

export default GarbageManagement;
