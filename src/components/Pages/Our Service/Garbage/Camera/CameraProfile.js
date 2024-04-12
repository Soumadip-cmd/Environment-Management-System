import React, { useContext, useRef } from "react";
import CameraContext from "../context/CameraContext";

const CameraProfile = (props) => {
  // class1-->Stand for position the camera button using className
  // modal-title--> take titlte
  // related-text-->gives a content brief description about the topic
  // photo_height,photo_width--> set the  acccepted imaGE height width
  // img_src--> is the default image place on the camera modal
  // modal-type---> stand for  target modal
  // specific_img--->this is used to select a particular div for a particular modal(by not changing all div){you can say as target}(imp to add)
  const { class1, modal_title, related_text,photo_height,photo_width,img_src,modal_type,specific_img } = props;
  
  const {image,setImage}=useContext(CameraContext)
  
  const refclose = useRef(null);
  const handleUpload = () => {
    refclose.current.click();
    document.getElementById(specific_img).value=""
    
    // setImage({...image,[event.target.id]:[event.target.value]})
    // setImage('')
  };
  
  const changing=(event)=>{
    setImage(event.target.files[0])
    
  
  }

  var image_body={
    height:{photo_height},
    width:{photo_width},
    borderRadius:'5px'
  }
  return (
    <>
      {/* camera image */}
      <span
        className={`profile-file-upload p-1 mx-2 perfect ${class1} my-0`}
        data-bs-toggle="modal"
        data-bs-target={`#${modal_type}`}
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
                <h6><i style={{color:'brown'}}>{related_text}</i></h6>
                {image?(<img className="container mb-3 d-flex justify-content-center" style={image_body} src={URL.createObjectURL(image)} id="view1" alt="image" />):(<img className="container mb-3 d-flex justify-content-center" alt="image" style={image_body} src={img_src} id="view0" />)}
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
                <input className="form-control" accept=".png, .jpeg, .jpg" type="file" id={specific_img} onChange={changing}  />
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

CameraProfile.defaultProps = {
  modal_title: "Modal Title",
  related_text: "Choose Your Desire Photo",
  photo_height:'140px',
  photo_width:'150px',
  // specific_img:'modalimg'
};
export default CameraProfile;
