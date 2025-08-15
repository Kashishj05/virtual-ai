import { useContext, useState } from "react"
import { userDataContext } from "../context/UserContext"
import { IoMdArrowRoundBack } from "react-icons/io";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Customize2(){
    const {userData, backendImg,selectedImage,serverURL,setUserData}= useContext(userDataContext);
    const [assistantName, setAssisName ]= useState(userData?.assistantName||"")
    const [loading,setLoading] =useState(false)
    const navigate = useNavigate();
    const handleUpdateAssis = async ()=>{
      try {
        setLoading(true)
        let formData = new FormData()
        formData.append("assistantName",assistantName)
        if(backendImg){
              formData.append("assistantName",backendImg)
        }else {
          formData.append("imageUrl",selectedImage)
        }
         const result = await axios.post(`${serverURL}/api/user/update`,formData,{withCredentials:true})
         setLoading(false)
         console.log(result.data)
         setUserData(result.data)
         navigate("/")
      } catch (error) {
        setLoading(false)
        console.log(error)
      }
    }
    return (
     <div className="w-full h-[100vh] bg-gradient-to-t from-[black] to-[#030353] flex justify-center items-center flex-col p-[20px] relative">
      <IoMdArrowRoundBack className="absolute top-[30px] left-[30px] text-white w-[25px] cursor-pointer h-[25px]" onClick={()=>navigate("/customize")}/>
      <h1 className="text-white text-[30px] text-center mb-[40px]">
        Enter your <span className="text-blue-200 ">Assistant Name</span>{" "}
      </h1>
       <input type="text" placeholder='eg. siri'
             className='w-full max-w-[600px] h-[60px] outline-none border-2 border-white bg-transparent text-white placeholder-gray-300
              px-[20px] py-[20px] rounded-full text-[18px]'required onChange={(e)=>setAssisName(e.target.value)}value={assistantName} />
    {
     assistantName && <button
          className="min-w-[300px] h-[50px] mt-[30px] cursor-pointer text-black font-semibold bg-white rounded-full text-[19px]"
          disabled={loading}
          onClick={()=>{
            handleUpdateAssis()
          }
          }>
        {!loading? "Finally create your Assistant":"loading"}</button>
    }
    
        </div>
    )
}

export default Customize2
