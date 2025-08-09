import { useContext } from "react";
import UserContext, { userDataContext } from "../context/UserContext.jsx";

function Card({image}) {
     const {serverURL,userData, setUserData,frontendImg, setFrontendImg,backendImg, 
  setBackendImg,selectedImage, setselectedImg}=useContext(userDataContext);
    return (
        <div className={` w-[70px] h-[140px] lg:w-[150px] lg:h-[250px] bg-[#020220] border-2 border-[#0000ff66] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-950 cursor-pointer hover:border-4 hover:border-white 
            ${selectedImage==image? "border-4 border-white shadow-2xl shadow-blue-950 " :null}`} 
        onClick={()=>{setselectedImg(image)
            setBackendImg(null)
            setFrontendImg(null)}
        }>
         <img src={image} className="h-full object-cover" alt="" />
        </div>
    )
}

export default Card