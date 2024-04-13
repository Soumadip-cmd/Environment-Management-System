import React, { useContext, useRef } from "react";
import CameraContext from "../context/CameraContext";

const CameraGarbage = (props) => {
  // class1-->Stand htmlFor position the camera button using className
  // modal-title--> take titlte
  // related-text-->gives a content brief description about the topic
  // photo_height,photo_width--> set the  acccepted imaGE height width
  // img_src--> is the default garbageimg place on the camera modal
  // modal-type---> stand htmlFor  target modal
  // specific_img--->this is used to select a particular div htmlFor a particular modal(by not changing all div){you can say as target}(imp to add)
  const {
    class1,
    modal_title,
    related_text,
    photo_height,
    photo_width,
    img_src,
    modal_type,
    specific_img,
  } = props;

  const { garbageimg, setGarbageimg } = useContext(CameraContext);

  const refclose = useRef(null);
  const refcamera = useRef(null);
  const handleUpload = () => {
    refclose.current.click();
    document.getElementById(specific_img).value = "";

    // setGarbageimg({...garbageimg,[event.target.id]:[event.target.value]})
    // setGarbageimg('')
  };

  const cameraclick=()=>{
    refcamera.current.click()
  }
  const changing = (event) => {
    setGarbageimg(event.target.files[0]);
  };

  var image_body = {
    height: { photo_height },
    width: { photo_width },
    borderRadius: "5px",
  };
  return (
    <>
      {/* camera garbageimg */}
      <span className={`profile-file-upload p-1 mx-2 perfect ${class1} my-0`}>
        <button
          className="button mx-2 py-2 border-0"
          type="button"
          data-bs-toggle="modal"
          data-bs-target={`#${modal_type}`}
        >
          Create Post For Garbage Problem
        </button>
      </span>
      {/* camera open modal */}

      <div
        className="modal fade "
        id={modal_type}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ color: "black" }}
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {modal_title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                ref={refclose}
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <h6 className="mb-3">
                  <i style={{ color: "brown" }}>{related_text}</i>
                </h6>
                <div className="mb-3">
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
                    rows={5}
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
                    src={img_src}
                    id="view0"
                  />
                )}
              </div>

              <div className="mb-3">
                <label htmlFor={specific_img} className="form-label">
                  <span className="from-head">
                    Upload Photo as jpeg/png File:
                  </span>
                </label>
                <input
                  className="form-control"
                  accept=".png, .jpeg, .jpg"
                  type="file"
                  id={specific_img}
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

            <div className="modal-footer d-flex justify-content-center ">
              <button
                type="button"
                className="btn btn-danger "
                onClick={handleUpload}
              >
                UpLoad
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

CameraGarbage.defaultProps = {
  modal_title: "Modal Title",
  related_text: "Choose Your Desire Photo",
  photo_height: "140px",
  photo_width: "150px",
  // specific_img:'modalimg'
};

export default CameraGarbage;
