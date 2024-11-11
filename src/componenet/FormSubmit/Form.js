import { useState , useRef } from "react"

const Form=()=>{

const [userVal, setUserValue]=useState({email:"",text:""})
//console.log(Math.random())
    const handleForm=(e)=>{

    e.preventDefault()
   console.log(userVal)

   ///validation

const name=userVal.text
if(name?.trim()?.length===0){
alert("check your text name sir")
return 
}


   const re =
   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
   const checkEmail= new RegExp(re)
   const emailVaild= checkEmail.test(userVal.email)
   if(!emailVaild){
    alert("check your email sir")
    return 
   }


   ///database operzation
   

  
    }

    
function handleChange(e){
  
    setUserValue((prev)=>{return {...prev ,[e.target.name]:e.target.value}})
    
}


    return(
        <>
{userVal.email}{userVal.text}
        <form onSubmit={handleForm}>
        <input name="text"onChange={handleChange}   type="text" ></input> 
        <input name="email"  onChange={handleChange}  type="email"></input>
        <button type="submit" >click</button>

    </form>
        </>
    )
}

export default Form