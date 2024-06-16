"use client"
import { IoMdPhonePortrait } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import OtpBoxes from "./OtpBoxes";
export default function OtpCheck({checkPhone,phoneNumber}){
    const [counter,setCounter]=useState(30)
    const [showValidate,setShowValidate]=useState(false)
    const [otpArr, setOtpArr] = useState(["", "", "", ""]);
    const [status,setStatus]=useState(false)
    const [check,setCheck]=useState(false)
    const [invalid,setInvalid]=useState(false)
    const ValidateAll = () => {
        // Debugging statement
        setInvalid(false)
        setCheck(true);
        const timmer = setTimeout(() => {
            console.log("Inside setTimeout"); // Debugging statement
            for (let i in otpArr) {
                if (!Number(otpArr[i])) {
                    setInvalid(true)
                    return;
                }
            }
            setStatus(true); // Debugging statement
            setCheck(false);
        }, 4000);
        return () => clearTimeout(timmer);
    };
    useEffect(() => {
        if(!status){
            const timer = setInterval(() => {
                if (counter > 0) {
                  setCounter((prevCount) => prevCount - 1);
                } else {
                  setShowValidate(true) 
                  clearInterval(timer);
                }
              }, 1000);
          
              return () => clearInterval(timer); 
        }
        
      }, [counter]);
    return(
        <div className=" relative w-full h-full px-8 flex  flex-col gap-3   ">
            <div className=" flex items-center text-slate-400 hover:text-white duration-500 cursor-pointer" onClick={()=>checkPhone()}><h1 className=" text-xl pr-2" >←</h1><h2 className=" text-[1.0rem]">Back</h2></div>
            <h1 className=" text-xl tracking-wider">{`Enter OTP sent to +91-${phoneNumber}`}</h1>
            <OtpBoxes otpArr={otpArr} setOtpArr={setOtpArr} setCheck={setCheck} setStatus={setStatus} showValidate={showValidate} setShowValidate={setShowValidate} />
            <div className=" text-sm"> {`Resend OTP in 00:${counter>=10 ?`${counter}`:`0${counter}`}`} {counter===0 && <span className=" pl-3 text-blue-500 text-[0.8rem] cursor-pointer hover:underline duration-500" onClick={()=>{setCounter(30)}}>Resend</span>}</div>
            <div className=" flex gap-4 items-center  text-sm ">
                <div className=" flex gap-2 cursor-pointer text-white hover:text-slate-100 duration-300"><IoMdPhonePortrait className=" text-xl "/><h1>SMS</h1></div>
                <div className=" flex gap-2 cursor-pointer text-slate-400 hover:text-slate-100 duration-300"><FaPhoneAlt className=" text-lg "/><h1>CALL</h1></div>
            </div>
            {showValidate && !invalid ?<div className=" w-[80%] md:w-[60%] flex justify-center"><button className={` px-6 py-[0.5rem] mt-5 rounded-lg text-white  tracking-widest w-[70%]  flex items-center justify-center ${counter===0?"bg-gradient-to-r from-rose-500 to-rose-800":(status?"bg-gradient-to-r from-green-500 to-green-800 ":"bg-gradient-to-r from-blue-600 to-blue-800 ")}`} onClick={()=>ValidateAll()}>{counter===0?"OTP Expired":(check && !status ? (<span className="animate-pulse">Verifying ...</span>) : (!check && !status ? "Validate" : "Verified"))}</button></div>:(invalid && <div className=" w-[60%] flex justify-center"><button className={` px-6 py-[0.5rem] mt-5 rounded-lg text-white  tracking-widest w-[70%]  flex items-center justify-center bg-gradient-to-r from-rose-500 to-rose-800" `} onClick={()=>ValidateAll()}>Wrong OTP</button></div>)}
            

            <div className=" w-[90%] text-[0.9rem] flex "><div> Having Trouble in Login in ? <span className=" cursor-pointer text-blue-600">Get Help</span></div></div>

        </div>
    )
}