// just only usestate image do as comtext
import { useState } from "react";
import CameraContext from "./CameraContext";

const CameraState = (props) => {
  const [image,setImage]=useState("")
  const [bgimage1,setBgimage1]=useState("")
  const [garbageimg,setGarbageimg]=useState("")
  return (
    <CameraContext.Provider value={{image,setImage,bgimage1,setBgimage1,garbageimg,setGarbageimg}}>
         {props.children}
    </CameraContext.Provider>
  );
};

export default CameraState