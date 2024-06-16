"use client"
import Image from "next/image";
import leftimg from "./assests/College.jpg"
import { Jost } from 'next/font/google'
import PhoneNumberPage from "./Compoents/PhoneNoPage";
import { useState } from "react";
import OtpCheck from "./Compoents/OtpCheck";
 
const jost= Jost({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
export default function Home() {
  const [otp,setotp]=useState(false)
  const [phone,setPhone]=useState("")
  // const [finalNumber,setFinalNumber]=useState()
  const enterOtp=()=>{
    setotp(!otp)
    // console.log("+91"+phone)
  }
  return (
    <main className={`flex min-h-screen bg-black justify-center items-center ${jost.className}`}>
        <div className=" w-[70%] h-[65vh] border-[1px] border-slate-700 rounded-xl shadow-lg shadow-zinc-600 flex  items-center justify-center overflow-hidden">
          <div className=" w-[80%] h-full relative md:block hidden ">
            <Image src={leftimg} className=" w-full h-full " priority/>
            <div className=" absolute w-full h-full  bg-gradient-to-r from-[#0c0c0c1a] to-[#000000] left-0 top-0"></div>
          </div>
          <div className=" relative w-full min-h-full p-8 flex flex-col gap-3 text-zinc-100 tracking-wider items-center  ">
            {!otp?<PhoneNumberPage gotOtp={enterOtp} phone={phone} setPhone={setPhone} />:<OtpCheck  checkPhone={enterOtp} phoneNumber={phone}/>}
              
          </div>
        </div>
    </main>
  );
}
