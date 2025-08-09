import Card from "../components/Card";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/authBg.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.jpeg";
import image7 from "../assets/image7.jpeg";
import { RiImageAddLine } from "react-icons/ri";
import { useContext, useRef, useState } from "react";
import { userDataContext } from "../context/UserContext";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Customize() {
  const {
    serverURL,
    userData,
    setUserData,
    frontendImg,
    setFrontendImg,
    backendImg,
    setBackendImg,
    selectedImage,
    setselectedImg,
  } = useContext(userDataContext);
  const navigate = useNavigate();
  const inputImage = useRef();

  const handleImage = (e) => {
    const file = e.target.files[0];
    setBackendImg(file);
    setFrontendImg(URL.createObjectURL(file));
  };
  return (
    <div className="w-full h-[100vh] bg-gradient-to-t from-[black] to-[#030353] flex justify-center items-center flex-col p-[20px]">
       <IoMdArrowRoundBack className="absolute top-[30px] left-[30px] text-white w-[25px] cursor-pointer h-[25px]" onClick={()=>navigate("/")}/>
      <h1 className="text-white text-[30px] text-center mb-[40px]">
        Select your <span className="text-blue-200 ">Assistant Image</span>{" "}
      </h1>
      <div className="w-full max-w-[900px] flex justify-center items-center flex-wrap gap-[15px] ">
        <Card image={image1}></Card>
        <Card image={image2}></Card>
        <Card image={image3}></Card>
        <Card image={image4}></Card>
        <Card image={image5}></Card>
        <Card image={image6}></Card>
        <Card image={image7}></Card>
        <div
          className={`w-[80px] h-[140px] lg:w-[150px] lg:h-[250px]  bg-[#020220] border-2 border-[#0000ff66] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-950 cursor-pointer hover:border-4 hover:border-white flex items-center justify-center   ${
            selectedImage == "input"
              ? "border-4 border-white shadow-2xl shadow-blue-950 "
              : null
          }
        `}
          onClick={() => {
            inputImage.current.click();
            setselectedImg("input");
          }}
        >
          {!frontendImg && (
            <RiImageAddLine className="text-white w-[25px] h-[25px]" />
          )}
          {frontendImg && (
            <img src={frontendImg} className="h-full object-cover"></img>
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          hidden
          ref={inputImage}
          onChange={handleImage}
        />
      </div>
      {selectedImage && (
        <button
          className="min-w-[150px] h-[50px] mt-[30px] cursor-pointer text-black font-semibold bg-white rounded-full text-[19px]"
          onClick={() => navigate("/customize2")}
        >
          Next
        </button>
      )}
    </div>
  );
}

export default Customize;
