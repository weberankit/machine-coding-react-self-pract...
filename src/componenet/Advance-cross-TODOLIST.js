import { useEffect, useState } from "react"
import PraToDo from "./Advance--cross-TODOLIST_PARATODO"


const SecondAddtocart=()=>{
///input from user
//usestate.state
//usestate to display

const [data ,setData] = useState()

let store=JSON.parse(localStorage.getItem("j0t")) ||[]
console.log(store)

//let storeCheck= [] || JSON.parse(localStorage.getItem("j0tt"))

const [dataList,setList] = useState(store)



useEffect(()=>{
    
localStorage.setItem("j0t",JSON.stringify(dataList))

},[dataList])






const handleList=()=>{
setList((prev)=>{
    console.log(prev)
const newItem={data:data, cross:false}

const arr=[...prev , newItem]

localStorage.setItem("j0t",JSON.stringify(arr))
return arr
})
}


const handleRemove=(id)=>{
setList(()=>{
const re= dataList.filter((item,index)=>{
return index !== id
})

return re
})

}


const handleEdit=(id)=>{
const userInput=prompt("provide inptu")

if(userInput.length>0){
setList((prev)=>{
const edit=dataList.map((item,index)=>{
if(index === id){
return {...item,data:userInput}
}else{
return item
}
})
return edit
})
}


}


function handleit(index){
    const getList=JSON.parse(localStorage.getItem("j0t")) ||[]
    getList[index].cross=true
    localStorage.setItem("j0t",JSON.stringify(getList))
}

return(
<>
<input type="text" value={data} onChange={(e)=>setData(e.target.value)}></input>
<button onClick={handleList}>save</button>

{
dataList && dataList.map((item,index)=>{

return(
<div>

<div className={""} 
>
<PraToDo data={item.data} handle={()=>handleit(index)} indexval={index}/>  
</div>



<button onClick={()=>handleEdit(index)}>Edit</button> <button onClick={()=>handleRemove(index)}>Remove</button>
</div>
)
})
}

</>
)
}

export default SecondAddtocart