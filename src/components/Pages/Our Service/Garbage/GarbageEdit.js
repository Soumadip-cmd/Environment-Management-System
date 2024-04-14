import React, { useContext, useRef } from "react";
import CameraContext from "./context/CameraContext";

const GarbageEdit = () => {
  const refcls = useRef(null);
  const refcamera = useRef(null);
  const { garbageimg, setGarbageimg } = useContext(CameraContext);
  const handleUpdate = () => {
    refcls.current.click();
  };
  var image_body = {
    height: '1536px',
    width: '500px',
    borderRadius: "5px",
  };
  const changing = (event) => {
    setGarbageimg(event.target.files[0]);
  };
  const cameraclick=()=>{
    refcamera.current.click()
  }

  return (
    <>
      <span className="float-end " style={{ cursor: "pointer" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="currentColor"
          className="bi bi-pencil-square"
          viewBox="0 0 16 16"
          data-bs-toggle="modal"
          data-bs-target="#garbageEdit"
        >
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
          <path
            fill-rule="evenodd"
            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
          />
        </svg>
      </span>

      <div
        className="modal fade"
        id="garbageEdit"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div class="mb-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label text-capitalize"
                >
                  <span className="from-head">
                    Write Something about your post
                  </span>
                </label>
                <textarea
                  className="form-control"
                  placeholder="Write Your Problem in Brief"
                  cols={30}
                  rows={4}
                ></textarea>
              </div>
              <div className="mb-3" style={{ position: "relative" }}>
                  <label htmlFor="location" className="form-label">
                    <span className="from-head">Your Exact Loaction</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="location"
                    aria-describedby="emailHelp"
                  />
                  <button className="btn btn-outline-dark btn-sm btn-fetch">
                    Fetch Location
                  </button>
                </div>
                <div className="mb-3" style={{ position: "relative" }}>
                  <label htmlFor="location" className="form-label">
                    <span className="from-head">Garbage Type</span>
                  </label>
                  <select className="form-control">
                    <option disabled selected value={"--Select Garbage Type--"}>
                      --Select Garbage Type--
                    </option>
                    <option value="">Biodegradable Waste</option>
                    <option value="">Non-Biodegradable Waste</option>
                    <option value="">Hazardous Waste</option>
                    <option value="">Recyclable Waste</option>
                    <option value="">Electronic Waste (E-waste)</option>
                    <option value="">Construction and Demolition Waste</option>
                    <option value="">Medical or Biohazardous Waste</option>
                    <option value="">Radioactive Waste</option>
                  </select>
                </div>
                {garbageimg ? (
                  <img
                    className="container mb-3 d-flex justify-content-center"
                    style={image_body}
                    src={URL.createObjectURL(garbageimg)}
                    id="view1"
                    alt="garbageimg"
                  />
                ) : (
                  <img
                    className="container mb-3 d-flex justify-content-center"
                    alt="garbageimg"
                    style={image_body}
                    // src={img_src}
                    id="view0"
                  />
                )}
              </div>

              <div className="mb-3">
                <label  className="form-label">
                  <span className="from-head">
                    Upload Photo as jpeg/png File:
                  </span>
                </label>
                <input
                  className="form-control"
                  accept=".png, .jpeg, .jpg"
                  type="file"
                  // id={specific_img}
                  onChange={changing}
                />
              </div>
              <p>Or,</p>
              <div className="mb-3">
                <label htmlFor="formFile" className="form-label">
                  Use Camera:
                </label>
                <input
                  className="form-control"
                  ref={refcamera}
                  type="file"
                  id="formFile1"
                  onChange={changing}
                  capture="environment" style={{display:'none'}}
                />
                <span
                  className={`profile-file-upload p-1 mx-2 perfect extra-camera  my-0`}
                  onClick={cameraclick}

                >
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
                </span>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refcls}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleUpdate}
              >
                Save changes
              </button>
            </div>
          </div>
        
      </div>
    </>
  );
};

export default GarbageEdit;
