import React, { useContext, useRef } from "react";
import CameraContext from "../context/CameraContext";

const CameraGarbage = (props) => {
  // class1-->Stand for position the camera button using className
  // modal-title--> take titlte
  // related-text-->gives a content brief description about the topic
  // photo_height,photo_width--> set the  acccepted imaGE height width
  // img_src--> is the default garbageimg place on the camera modal
  // modal-type---> stand for  target modal
  // specific_img--->this is used to select a particular div for a particular modal(by not changing all div){you can say as target}(imp to add)
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

  const { garbageimg,setGarbageimg } = useContext(CameraContext);

  const refclose = useRef(null);
  const handleUpload = () => {
    refclose.current.click();
    document.getElementById(specific_img).value = "";

    // setGarbageimg({...garbageimg,[event.target.id]:[event.target.value]})
    // setGarbageimg('')
  };

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
      <span
        className={`profile-file-upload p-1 mx-2 perfect ${class1} my-0`}
        
      >
        <button class="button mx-2 py-2 border-0" type="button" data-bs-toggle="modal"
        data-bs-target={`#${modal_type}`}>
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
                <h6>
                  <i style={{ color: "brown" }}>{related_text}</i>
                </h6>
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

              {/* <div className="mb-3">
                <label htmlFor="formFile" className="form-label">
                  Use Camera:
                </label>
                <input className="form-control" type="file" id="formFile1" onChange={changing}/>
              </div> */}

              <div className="mb-3">
                <label htmlFor={specific_img} className="form-label">
                  Upload as jpeg/png File:
                </label>
                <input
                  className="form-control"
                  accept=".png, .jpeg, .jpg"
                  type="file"
                  id={specific_img}
                  onChange={changing}
                />
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
