import { useState } from "react"

const Clock=()=>{
    const [inputValue ,setInputValue]=useState({hrs:"",min:"",sec:""})
  
   const inputHour=inputValue.hrs*3600*1000
   const inputMin=inputValue.min*60*1000
   const inputSec=inputValue.sec*1000
 // console.log(inputHour)
 // console.log(inputValue)
function handleTime(){
const presentTime=Date.now()
//2000added b/c it tkes one sec in setinterval
const futureTime=inputHour+inputMin+inputSec+presentTime+2000


let timer= setInterval(()=>{
let  timeLeft=futureTime-Date.now()
console.log(timeLeft)
if(timeLeft>0){
    
   // console.log("wait")

//console.log(timeLeft)
const seconds=Math.floor(timeLeft/1000)
//console.log(seconds)
const minutes= Math.floor(seconds/60)
//console.log(minutes)
const Totalhour=Math.floor( minutes/60)
//console.log(hour)

const totalSec=seconds%60
const totalMin=minutes%60
console.log(Totalhour,totalMin,totalSec)
setInputValue({hrs:Totalhour,min:totalMin,sec:totalSec})

}else{
    clearInterval(timer)
}
},1000)
}

    return(
       <>
   
<input type="number" placeholder="Hrs" value={inputValue.hrs} onChange={(e)=>{setInputValue({...inputValue,hrs:e.target.value}) }} ></input>

<input type="number" placeholder="min" value={inputValue.min} onChange={(e)=>{setInputValue({...inputValue,min:e.target.value})}} ></input>
<input type="number" placeholder="sec" value={inputValue.sec} onChange={(e)=>{setInputValue({...inputValue,sec:e.target.value})}} ></input>
    
<button onClick={()=>handleTime()}>Start</button>


        </>
    )
}
export default Clock