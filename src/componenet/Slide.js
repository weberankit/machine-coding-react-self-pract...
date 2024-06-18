import { imgData } from "./helper"
import { useState,useEffect } from "react"
const Slider=()=>{
    //make slide which not call images every time 
let [value , setvalue]= useState(0)
useEffect(()=>{
   let timer= setTimeout(()=>{
        increment()  
      },2000)

    return(()=>{
        clearTimeout(timer)
    })
},[value])


function decrement(){  
    console.log(value,imgData.length)
setvalue(!value ? imgData.length-1 : value-1 )
}
function increment(){
    console.log(value,imgData.length)  
    setvalue(value>=imgData.length-1?value=0:value+1)
    }
    

    return(
<>
<div style={{objectFit:"contain"}}>
    <button onClick={decrement}>prev</button>

    {imgData.map((url,index)=>{
      return( 
        <div key={url} style={value === index ? { display: 'block' } : { display: 'none' }}>
      <img src={url}></img>
      </div>
        )
    })}

<button onClick={increment}> next</button>

</div>

</>
    )
}
export default Slider