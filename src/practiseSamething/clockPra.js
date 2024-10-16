import { useState } from "react"

const ClockPra=()=>{

/***
 * 30mins
 * conver 30min in to sec
 *  current time + userTime provide
 * 
 * 
 * 
 * 
 * 
 */
const [usertime,setUserTime]=useState({hrs:"",mins:"",sec:""})

function handleTime(){
    console.log(usertime)
 //   if(!usertime.hrs && !usertime.sec && !usertime.mins =="") return null
    const getPresentTimme=Date.now()
    console.log(getPresentTimme)
    const hrs=usertime.hrs*3600*1000
    const min=usertime.mins*60*1000
    const sec=usertime.sec*1000
    const TotalTime=hrs+min+sec+getPresentTimme
    console.log(TotalTime)
   
    
  let timerId=  setInterval(()=>{

         const timeLeft=TotalTime-Date.now()+2000
         if(timeLeft>0){
         const seconds=Math.floor( timeLeft/1000)
         const minute= Math.floor(seconds/60)
         const finalHour= Math.floor( minute/60)
         const finalMinute= minute%60
         const finalSeconds=seconds%60

         setUserTime({hrs:finalHour,mins:finalMinute,sec:finalSeconds})



///forwatch------not made yet


         const hourDeg = (finalHour % 12) * 30 + finalMinute * 0.5; // 360deg/12 hours = 30deg per hour
         const minuteDeg = finalMinute * 6; // 360deg/60 minutes = 6deg per minute
         const secondDeg = finalSeconds * 6; // 360deg/60 seconds = 6deg per second
     
         // Rotate clock hands
         document.querySelector('.hour-hand').style.transform = `rotate(${hourDeg}deg)`;
         document.querySelector('.minute-hand').style.transform = `rotate(${minuteDeg}deg)`;
         document.querySelector('.second-hand').style.transform = `rotate(${secondDeg}deg)`;







         }else{
            clearInterval(timeLeft)
         }

    },1000)

}
    return(
        <>
<input value={usertime.hrs} type="number" placeholder="hours" onChange={(e)=>setUserTime((prev)=>{return {...prev,hrs:e.target.value}})} ></input>
<input value={usertime.mins} type="number" placeholder="minute" onChange={(e)=>setUserTime((prev)=>{return {...prev,mins:e.target.value}})}></input>
<input value={usertime.sec} type="number" placeholder="seconds" onChange={(e)=>setUserTime((prev)=>{return {...prev,sec:e.target.value}})}></input>
      <button onClick={handleTime}>save</button>  



      <div className="analog-clock-container">
      <div className="clock-face">
        <div className="hand hour-hand"></div>
        <div className="hand minute-hand"></div>
        <div className="hand second-hand"></div>
      </div>
    </div>


        </>
    )
}

export default ClockPra