
import { useState , useRef } from "react"
const FormUseRef=()=>{
   const formRef=useRef()
   console.log(Math.random())
//console.log(Math.random())
    const handleForm=(e)=>{

    e.preventDefault()


  console.log(formRef.current)
 //we can also acces bthis formRef.current[0].value
const text=formRef.current["text"]?.value
console.log(text)
const email=formRef.current["email"]?.value
console.log(email)
  /**/


   ///validation

const name=text
if(name?.trim()?.length===0){
alert("check your text name sir")
return 
}


   const re =
   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
   const checkEmail= new RegExp(re)
   const emailVaild= checkEmail.test(email)
   if(!emailVaild){
    alert("check your email sir")
    return 
   }


   ///database operzation
    }



    return(
        <>

        <form  ref={formRef} onSubmit={handleForm}>
        <input name="text"   type="text" ></input> 
        <input name="email"  type="email"></input>
        <button type="submit" >click</button>

    </form>
        </>
    )
    
}



export  default FormUseRef