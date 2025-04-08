import { useState } from "react"
import OtpInput from "./OtpInput"


const ParentPhoneOtp=()=>{

const [phoneNo, setPhoneNo] =useState("")
const [tooglOtp ,setToggleOtp] = useState(null)
function handleSubmit(e){
e.preventDefault()

//handle validtaion
//handle api
setToggleOtp(true)
} 

const handleSubmitOtp=(otp)=>{
console.log("otp" ,otp)
}

    return(
        <>
 {tooglOtp?
 <OtpInput length={5} handleSubmitOtp={handleSubmitOtp}/>
 
 : <form onSubmit={handleSubmit}>

    <input type="number" placeholder="phone no" value={phoneNo} onChange={(e)=>setPhoneNo(e.target.value)}/>
    <button type="submit"  >send</button>
  </form>
}
        </>
    )
}
export default ParentPhoneOtp