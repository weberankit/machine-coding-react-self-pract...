import { useState } from "react"

const PraToDo=({data,indexval})=>{
  const getItem=JSON.parse(localStorage.getItem("j0t"))[indexval]?.cross ||false
const [cross ,setCross] =useState(getItem)

console.log(getItem)

function handlecheck(){
    setCross(!cross);
   const getList=JSON.parse(localStorage.getItem("j0t")) ||[]
    getList[indexval].cross= !cross
    localStorage.setItem("j0t",JSON.stringify(getList))
}
    return(
        <>

        <div style={{ textDecoration:  cross ? "line-through" : "none" }}  onClick={()=>{handlecheck()}}>
    {data}
        </div>
        </>
    )
}   


export default PraToDo