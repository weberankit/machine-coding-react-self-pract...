import { useEffect, useRef, useState } from "react"

const OtpInput=({length = 5 , handleSubmitOtp=()=>{}})=>{

const [optField , setOtpField] = useState(new Array(length).fill(""))
const inputRef=useRef([])


useEffect(()=>{
if(inputRef.current[0]){
 inputRef.current[0].focus()
}
},[])

function handleChange(e,index){
const values=e.target.value
if(isNaN(values))return
const optAllFieldState=[...optField]
//to get only last one
/**
 * const value="345"
   value.substring(value.length-1)
   output--'5'--
 * 
 */
optAllFieldState[index] = values.substring(values.length-1)
setOtpField(optAllFieldState)
//sumitting otp
//note here we do not use otpField state as it take some time to update async so we use this 
const optSenttoServer=optAllFieldState.join("")
//now submit when opt length ois euqal to 5
if(optSenttoServer.length===5)handleSubmitOtp(optSenttoServer);

//moving to next input if user completed the current input

if(values && index<length-1 && inputRef.current[index+1]){
    //1st condition--check value is avail
    //2nd contion---check only happen when currrent index is lower than  total length 
    //3rd condition ---check move to next if the next input box is avail -- notvery nessary
    inputRef.current[index+1].focus()
}


}

function handleKeyDown(e,index){
    //to move previous input field 
if(e.key==="Backspace" && !optField[index] && index>0 && inputRef[index-1]){
    inputRef.current[index-1].focus()
}
}
function handleClick(index){

}

    return(
        <div className=" bg-black  text-white flex flex-row h-[100vh] justify-center items-center">
      {optField.map((item,index)=>{
        return(
            <div key={index}>
                {/*By doing inputRef.current[index] = input, we are saving each input element in the 
                inputRef.current array at the specific index. 
                This allows us to store and later access the reference of each individual <input> */}
            <input
            onChange={(e)=>handleChange(e,index)}
             ref={(input)=>inputRef.current[index]=input} 
             type="number" 
             className="w-[70px] text-black h-[70px] rounded-sm border border-white m-1 text-center"
             value={item}
             onKeyDown={(e)=>handleKeyDown(e,index)}
             onClick={()=>handleClick(index)}
             />
            
            </div>
        )
      })}

        </div>
    )
}
export default OtpInput