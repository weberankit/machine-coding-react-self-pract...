import { useRef } from "react"
const InputBox=({lengthBox})=>{
const box=new Array(lengthBox).fill("")

const inputRef=useRef([])

function handleChange(e,index){
if (e.target.value && index < lengthBox - 1) {
  inputRef[index + 1].focus();
}
}



    return(
        <>

{box.map((item,index)=>{
    return(
        <>
        <input
        
        onChange={(e)=>handleChange(e,index)}
        ref={((inputEl)=>inputRef[index]=inputEl)} className="border border-black " type="number"></input>
        
        </>
    )
})}

        </>
    )
}


export default InputBox