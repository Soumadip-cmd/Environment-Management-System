import React from "react";
import "./GarbageManegment.css";
import GarbageHeader from "./GarbageHeader";
import { useContext } from "react";
import CameraContext from "./context/CameraContext";
import CameraProfile from "./Camera/CameraProfile";
import CameraBg from "./Camera/CameraBg";
import GarbagemainBody from "./GarbagemainBody";


const GarbageManagement = () => {
  const { image, bgimage1 } = useContext(CameraContext)
  return (
    <div className="garbage-body">
      <div className="topHeight">
        <GarbageHeader />
        <span style={{ position: "relative" }} className="">
          {/* <img
            src="https://source.unsplash.com/random/1536x500?/nature"
            className=" img-fluid"
            alt="background image"
          /> */}
          {bgimage1 ? (<img className="img-fluid profile-bg-fix" src={URL.createObjectURL(bgimage1)} id="view1" />) : (<img
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
            {image ? (<img className="img-fluid img-style mx-2 profile_condition" src={URL.createObjectURL(image)} id="view1" />) : (<img
              src="profile.png"
              className=" img-fluid img-style mx-2 profile_condition"
              alt="profile" />)}
            <CameraProfile class1="extra-pos" photo_height="140px" photo_width="150px" img_src="profile.png" modal_type="profile_photo" modal_title="Upload Profile Photo" specific_img="modal1" />
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
            <CameraBg class1="" photo_height="500px" photo_width="1536px" img_src="https://source.unsplash.com/random/1536x500?/nature" modal_type="profile_bg" modal_title="Upload Profile-BackGround Photo" specific_img="modal2" />


          </div>
          <p className="float-start mt-3"><button type="button" class="btn btn-primary px-5 py-2" style={{position:'relative',left:'212px'}}>Message User</button></p>
        </span>
        <hr className="mt-5" style={{position:'relative',top:'27px',    right:'79px'}}/>
      </div>
        <div className="container my-5 ">
          <GarbagemainBody />
        </div>
        
    </div>
  );
};

export default GarbageManagement;
