import { useState } from "react"
const TodoList=()=>{
const [inputUser , setUserInput]=useState("")
const[list , setList]=useState([])
const[editInput , setEditInput]=useState("")
const [show,setShow]=useState(null)
console.log(list)

const removeHandle=(index)=>{
  setList( ()=>{ return list.filter((item,indii)=>{
    if(index!==indii){
        return item
    }
    })
}
)

}
const editHandle=(index)=>{
setList(()=>{
    return list.map((item,indi)=>{
        if(index===indi){
            return editInput
        }else{
            return item
        }
    })
})
setEditInput("")
}



    return(
<>
<input type="text" value={inputUser} onChange={(e)=>{

    setUserInput(e.target.value)
}}></input>
<button onClick={()=>{
    setList((prevItem)=>{ //console.log(prevItem)
         return[...prevItem,inputUser]})
}} >create</button>

{
  list &&  list.map((item ,index)=>{
        return(<>
      <div> {item} <button onClick={()=>removeHandle(index)}>Remove</button>
      <button onClick={()=>{
      
      editHandle(index)
      setShow(index)
      }
    }>{show === index ?"Save":"Edit"}</button>
      {show === index ?<input value={editInput} placeholder="type here for any changes" onChange={(e)=>{setEditInput(e.target.value)}}></input>:""}
        </div> 
        </>)
    })
}


</>
    )
}

export default TodoList