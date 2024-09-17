import { useState } from "react"

const PraToDo=({data,handle,indexval})=>{
  const getItem=JSON.parse(localStorage.getItem("j0t"))[indexval]?.cross ||false
const [cross ,setCross] =useState(getItem)


    return(
        <>

        <div style={{ textDecoration:  cross ? "line-through" : "none" }}  onClick={()=>{setCross(true);handle()}}>
    {data}
        </div>
        </>
    )
}   


export default PraToDo