
import { useEffect, useState } from "react"
import ShowEleme from "./ShowElement"
const ThirdToDoList=()=>{
let [userInput , setUserInput] =useState()
let store=JSON.parse(localStorage.getItem("item")) || []
let [list , setList] = useState(store)


useEffect(()=>{
   
localStorage.setItem("item",JSON.stringify(list))
},[list])



function handleSave(){
setList((prev)=>{
const newitem={data:userInput , ticked:"false"}
const arr=[...prev, newitem ]
  return arr
})


}
function  handleRemove(id){
setList(()=>
{
const arr= list.filter((item,index)=>{
return index!==id
})

return arr
})


}
function handleEdit(id){
    let userPrompt=window.prompt("provide your value")
    if(userPrompt){
    setList(()=>{
    const arr=    list.map((item,index)=>{
         
      if(id=== index){
        return item = userPrompt
      }
      return item

        })

    return arr
    })


    }
}
    return(
        <>

        <input onChange={(e)=>setUserInput(e.target.value)}></input>
        <button onClick={handleSave}>save</button>

        
        {
            list && list.map((item,index)=>{
                return(
                    <>
                    <ShowEleme data={item.data} indi={index}/>
                    <button onClick={()=>handleRemove(index)}>remove</button>
                    <button onClick={()=>handleEdit(index)}>Edit</button>
                    </>
                )
            })
        }
        </>
    )
}








export default ThirdToDoList