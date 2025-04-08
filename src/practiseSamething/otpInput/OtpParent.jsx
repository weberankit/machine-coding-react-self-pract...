import {useState} from "react"
import InputBox from "./InputBox"
const OtpParent=()=>{
const [modal,setModal]=useState(null)

function handleOtp(otp){
    //sent to server
}



    return(
        <>
       { !modal ? <>
        <div>Enter mobile number</div>
        <div><input type="number"></input></div>
        <button  onClick={()=>setModal(true)}>submit</button>
        </>
        :
      <InputBox lengthBox={5} handleSubmitOtp={(otp)=>handleOtp(otp)}/>
       }
        
        </>
    )
}


export default OtpParent