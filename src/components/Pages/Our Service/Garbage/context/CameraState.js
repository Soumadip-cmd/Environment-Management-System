// just only usestate image do as comtext
import { useState } from "react";
import CameraContext from "./CameraContext";

const CameraState = (props) => {
  const [image,setImage]=useState("")
  return (
    <CameraContext.Provider value={{image,setImage}}>
         {props.children}
    </CameraContext.Provider>
  );
};

export default CameraState