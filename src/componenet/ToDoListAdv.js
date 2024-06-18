import { useState } from "react"
//check this E:\ANKIT_CODE\REACT-byme\react-practise\machine-oding-round\my-app\src\component\Heading.js
const ToDoListAdv=()=>{
const [arry , setArry] = useState("")
const [store , setStore] =useState([])



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
    const newValue = prompt("Enter new value:");
    setStore(()=>store.map((item,ind)=>{
        if( ind == index){
          
           console.log(item)
           
         return item=newValue
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
       <button onClick={()=>editHandle(index)} >Edit</button>
    

        </>)
    })

}

</>)
}

export default ToDoListAdv