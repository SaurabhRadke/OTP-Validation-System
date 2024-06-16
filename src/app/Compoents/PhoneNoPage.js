"use client"

import { useState } from "react"

export default function  PhoneNumberPage({gotOtp,phone,setPhone}){
    const start="+91"
    const [show,setShow]=useState(false)
    
    const onAddPhone=(event)=>{
        const number = event.target.value.replace(/\D/g, '')
        const l=number.length
        if(l===10){
            setShow(true)
        }
        else if(l<10 && show){
            setShow(false)
        }
        setPhone(number)
    }
    return(
        <><h1 className=" text-2xl pb-2">Login or SignUp to Continue</h1>
        <div className="flex w-full px-3 py-1 gap-2 justify-center">
          <input type="text" defaultValue={start} className="px-3 py-2 w-[3.8rem] tracking-wider text-slate-300 outline-none bg-black border-[1px] border-zinc-700 rounded-lg "/>
          <input type="text" placeholder="Enter Mobile Number"  className="px-3 py-2 outline-none bg-black border-[1px] w-[60%] border-zinc-700 rounded-lg tracking-widest"  value={phone} onChange={(e)=>onAddPhone(e)} maxLength={10} />
        </div>
        <p className=" px-5 text-[0.8rem] tracking-wide text-slate-400 w-[90%] "><span>By proceeding you confirm that you are above 18 years of age and agree to the <a href="/" className=" text-blue-600 cursor-pointer hover:text-slate-200 duration-500">Privacy Policy </a> &amp; <a href="/" className=" text-blue-600 cursor-pointer hover:text-slate-200 duration-500">Terms of Use.</a></span></p>
        <div className=" flex justify-center items-center mt-10  w-[80%]">
        {show && <button className=" px-6 py-[0.5rem] rounded-lg text-white bg-gradient-to-r from-blue-600 to-blue-800  tracking-widest w-[70%]  flex items-center justify-center" onClick={()=>gotOtp()}>GET OTP <div className=" text-2xl pl-2 flex items-center -mt-1 ">→</div></button>}
        </div>
        
        <div className="  w-[70%] text-[0.9rem] flex justify-center "><div> Having Trouble in Login in ? <span className=" cursor-pointer text-blue-600">Get Help</span></div></div></>
    )
}