import { useState } from "react"
const AdvHighAddtowish=()=>{
    const [arry , setArry] = useState("")
const [store , setStore] =useState([])
const [show,setShow]=useState(null)
const [editInput , setEditInput] =useState("")

//console.log(store,arry)
function removeHandle(index){
console.log(index)
setStore(()=>store.filter((item,ind)=>{
 if( ind !== index){
    return item
}

})
)
}

function editHandle(index){
    setEditInput("")
    setStore(()=>store.map((item,ind)=>{
        if( ind == index){
          
           console.log(item)
           
         return item=editInput
       }else{
        
        return item
       }
       
       
       })
     
       )

      
    }

    return(
<>
<input type='text' placeholder="type here" value={arry} onChange={(e)=>setArry(e.target.value)} ></input>
<button onClick={()=>{
    setStore((art)=>{
     return   [...art,arry]
    })
    setArry("")
}}>btn</button>
 

{
    store.map((item,index)=>{
        return(<>
        
       <div> <h1>{item}</h1> <button onClick={()=>removeHandle(index)}>Remove</button></div>
       <button onClick={()=>{
        editHandle(index)
        setShow(index)
    
    }
    
    }> {show===index ? "Save":"Edit"}</button>
    {  show === index ?<input type='text' placeholder="type here to change" value={editInput} onChange={(e)=>setEditInput(e.target.value)} ></input>:"" }

        </>)
    })

}

</>)
}
export default AdvHighAddtowish