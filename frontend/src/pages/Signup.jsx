import { useContext,useState } from 'react';
import bg from '../assets/authBg.png'
import { IoEye } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import  { userDataContext } from '../context/UserContext';
import axios from "axios"

function Signup(){

    const [showPassword, setShowPassword] = useState(false);
    const {serverURL,userData, setUserData} =useContext(userDataContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    
    const [name, setName] = useState("");
    const [email, setEmail] =useState("");
     const [password, setPassword] =useState("");
    const [err, setErr] =useState("")
     const handleSignUp = async (e) =>{
        e.preventDefault();
        setErr("")
        setLoading(true)
      try {
        let res = await axios.post(`${serverURL}/api/auth/signup`,{
            name,email,password
        },{withCredentials: true})
       setUserData(res.data)
        setLoading(false)
        navigate("/customize")
      } catch (error) {
        console.log(error);
        setUserData(null);
        setLoading(false)
        setErr(error.response.data.message);
      }  
     }

    return (
        <div className="w-full h-[100vh] bg-cover flex justify-center items-center" style={{backgroundImage:`url(${bg})`}}> 
        <form action="" className='w-[90%] h-[600px] max-w-[500px] bg-[#00000069] backdrop-blur shadow-lg shadow-black flex flex-col items-center justify-center 
       px-[20px] gap-[20px]'onSubmit={handleSignUp}>

            <h1 className='text-white text-[30px] font-semibold mb-[30px]'>Register to <span className='text-blue-400'>Virtual Assistant</span></h1>

            <input type="text" placeholder='Enter your name'
             className='w-full h-[60px] outline-none border-2 border-white bg-transparent text-white placeholder-gray-300
              px-[20px] py-[20px] rounded-full text-[18px]'required 
              onChange={(e)=>setName(e.target.value)} 
              value={name}/>

            <input type="text" placeholder='Email' className='w-full h-[60px] outline-none border-2 border-white bg-transparent
             text-white placeholder-gray-300 px-[20px] py-[20px] rounded-full text-[18px]'required 
              onChange={(e)=>setEmail(e.target.value)} 
              value={email}
             />

            <div className='w-full h-[60px] border-2 border-white bg-transparent relative text-white rounded-full text-[18px]'>
            <input type={showPassword? "text":"password"} placeholder='password' className='w-full h-full rounded-full outline-none bg-transparent placeholder-gray-300 px-[20px] py-[20px] ' required 
              onChange={(e)=>setPassword(e.target.value)} 
              value={password}/>

         {!showPassword &&  <IoEye  className='absolute top-[18px] right-[20px] text-white w-[25px] h-[25px] cursor-pointer'onClick={()=>setShowPassword(true)}/>}
        {showPassword &&  <FaEyeSlash  className='absolute top-[18px] right-[20px] text-white w-[25px] h-[25px] cursor-pointer'onClick={()=>setShowPassword(false)}/>}
             
            </div>
            {
                err.length>0 && <p className='text-red-500 text-[17px]'>
                    *{err}
                </p>
            }
            <button className='min-w-[150px] h-[50px] mt-[30px] text-black font-semibold bg-white rounded-full text-[19px]'disabled={loading}>
                {loading? "Loading...":"Sign up"}</button>
            <p className='text-white text-[18px] ' onClick={()=>navigate("/signin")}>Already have an account ? <span className='text-blue-400'> Sign In</span></p>
        </form>
        </div>
    )
}

export default Signup

