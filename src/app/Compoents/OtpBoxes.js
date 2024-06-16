"use client"
import { useEffect, useRef, useState } from "react";

export default function OtpBoxes({otpArr,setOtpArr,showValidate,setShowValidate,setCheck,setStatus}) {
  const emptyArr = ["", "", "", ""];
//   const [otpArr, setOtpArr] = useState(["", "", "", ""]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const refsArr = [useRef(), useRef(), useRef(), useRef()];

  useEffect(() => {
    refsArr[currentIndex].current.focus();
    if(currentIndex===3){
        setShowValidate(true)
    }
    else(
        setShowValidate(false)
    )
  }, [currentIndex]);

  const handleBackspace = (e, index) => {
    if (e.code === "Backspace" && index > 0) {
      // Clear the current input and move focus to the previous input
      const copyArr = [...otpArr];
      copyArr[index] = "";
      setOtpArr(copyArr);
      setCurrentIndex(prev => prev - 1);
    }
  };

  const AddingOtpChange = (event, index) => {
    const value = event.target.value;
    setCheck(false)
    setStatus(false)
    const copyArr = [...otpArr];
    copyArr[index] = value;
    setOtpArr(copyArr);

    // Move focus to the next input if not on the last input
    if (index < 3 && value) {
      setCurrentIndex(prev => prev + 1);
    }
  };
  const HandelPaste=(event)=>{
    const data=event.clipboardData.getData('text')
    
    if(!Number(data) || data.length!==4){
        return
    }
    console.log(data)
    const dataArr=data.split("")
    console.log(dataArr)
    setOtpArr(dataArr)
    setCurrentIndex(3)
    refsArr[3].current.focus()
  }
  return (
    <div className="flex gap-3 items-center p-1">
      {emptyArr.map((val, ind) => (
        <input
          key={ind}
          ref={refsArr[ind]}
          type="text"
          className={` rounded-lg text-center py-[0.6rem] bg-black outline-none border-[1px] border-zinc-400 text-[1rem] w-[3rem]`}
          maxLength={1}
          value={otpArr[ind]}
          onPaste={(e)=>HandelPaste(e)}
          onChange={(e) => AddingOtpChange(e, ind)}
          onKeyDown={(e) => handleBackspace(e, ind)}
          onClick={()=>{setCurrentIndex(ind)}}
        />
      ))}
    </div>
  );
}
