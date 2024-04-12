import React from "react";
import "./GarbageManegment.css";
import GarbageHeader from "./GarbageHeader";
import Camera from "./Camera/Camera";
import { useContext } from "react";
import CameraContext from "./context/CameraContext";

const GarbageManagement = () => {
  const {image,setImage}=useContext(CameraContext)
  return (
    <div className="garbage-body">
      <div className="">
        <GarbageHeader />
        <span style={{ position: "relative" }}>
          {/* <img
            src="https://source.unsplash.com/random/1536x500?/nature"
            className=" img-fluid"
            alt="background image"
          /> */}
          {image?(<img className="img-fluid profile-bg-fix"  src={URL.createObjectURL(image)} id="view1" />):(<img
            src="https://source.unsplash.com/random/1536x500?/nature"
            className=" img-fluid profile-bg-fix"
            alt="background image"
          />)}
          <div className="float-start profile-pos">
            {/* <img
              src="profile.png"
              className=" img-fluid img-style mx-2"
              alt="profile"
            /> */}
            {image?(<img className="img-fluid img-style mx-2 profile_condition"  src={URL.createObjectURL(image)} id="view1" />):(<img
              src="profile.png"
              className=" img-fluid img-style mx-2 profile_condition"
              alt="profile"/>)}
            <Camera class1="extra-pos" photo_height="140px" photo_width="150px" img_src="profile.png" modal_type="profile_photo" modal_title="Upload Profile Photo" specific_img="modal1" />
  <span className="fs-1 mx-3" style={{ ffontWeight: "800" }}>
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
            <Camera class1="" photo_height="500px" photo_width="1536px" img_src="https://source.unsplash.com/random/1536x500?/nature" modal_type="profile_bg" modal_title="Upload Profile-BackGround Photo" specific_img="modal2"/>
              
            
          </div>
        </span>
      </div>
    </div>
  );
};

export default GarbageManagement;
