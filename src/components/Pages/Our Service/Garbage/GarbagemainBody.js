import React, { useContext } from "react";
import CameraContext from "./context/CameraContext";
import "./garbagemainbody.css";
import CameraGarbage from "./Camera/CameraGarbage";


const GarbagemainBody = () => {
  const { image,garbageimg } = useContext(CameraContext);
  return (
    <>
      <section className=" d-flex justify-content-center  garbagemainBody">
        <div className=" m-4">
          {image ? (
            <img
              className="img-fluid mx-2 small-profile"
              src={URL.createObjectURL(image)}
              id="view1"
            />
          ) : (
            <img
              src="profile.png"
              className=" img-fluid mx-2 small-profile"
              alt="profile"
            />
          )}
          <span>
            <CameraGarbage
              class1=""
              photo_height="500px"
              photo_width="1536px"
              img_src="https://source.unsplash.com/random/1536x500?/garbage"
              modal_type="garbage_modal"
              modal_title="Upload Garbage Photo"
              specific_img="modal3"
            />
          </span>
        </div>
      </section>
      <div className="container my-5">
        <div className="  garbagemainBody">
          <div className=" pt-4">
            <h2 className="text-center ">
              <i>~~~Your Posts~~~</i>
            </h2>
            <hr />
            <div className="container my-5">
              {/* <img
              src="https://source.unsplash.com/random/1536x500?/garbage"
              className=" img-fluid img-extra px-4"
              alt="background image"
            /> */}
              {garbageimg ? (
                <img
                  className=" img-fluid img-extra d-flex justify-content-center align-items-center px-4"
                  src={URL.createObjectURL(garbageimg)}
                  id="view1"
                  alt="garbage-image"
                />
              ) : (
                <img
                  src="https://source.unsplash.com/random/1536x500?/garbage"
                  className=" img-fluid img-extra d-flex justify-content-center align-items-center px-4"
                  alt="garbage-image"
                />
              )}
            </div>
          </div>
          {/* Comment share contribute btn */}
          <div className="p-4 pt-2">
            <div className="d-flex justify-content-evenly">
              <button
                className="btn btn-primary btn-condition px-4 py-2"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-chat-dots-fill mx-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                </svg>
                <span className="mx-2 btn-condition">Comment</span>
              </button>
              <button
                className="btn btn-danger btn-condition px-4 py-2"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-stars mx-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
                </svg>
                <span className="mx-2 btn-condition">Contribute</span>
              </button>
              <button
                className="btn btn-dark btn-condition px-5 py-2"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  classname="bi bi-share-fill mx-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5" />
                </svg>
                <span className=" mx-2 btn-condition">Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GarbagemainBody;
