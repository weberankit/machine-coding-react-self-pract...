import { useState } from "react"

const ShowEleme=({data,indi})=>{
    let store=JSON.parse(localStorage.getItem("item"))[indi]?.ticked || false
    const [show , setShow] =useState(store)
    function handle(){
       let get=JSON.parse(localStorage.getItem("item"))
       get[indi].ticked = !show
        localStorage.setItem("item",JSON.stringify(get)) 
    }

return(
    <>
    
    <div onClick={()=>{setShow(!show);handle()}} style={{textDecoration:show?"line-through":"underline"}}>
        {data}
    </div>
    </>
)

}
export default ShowEleme