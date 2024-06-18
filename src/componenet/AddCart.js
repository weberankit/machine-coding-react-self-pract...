import { useRef } from "react"
import { useState ,useEffect} from "react"
const AddCart=()=>{
const [carts,setCarts] =useState()
const [store,setStore] =useState([])
async function data(){
    const raw= await fetch('https://dummyjson.com/carts')
    const c= await raw.json()
    setCarts(c.carts)
}
//console.log(carts)

useEffect(()=>{
data()
const getItems=JSON.parse(localStorage.getItem("cart"))
console.log(getItems)
if(getItems){
    setStore(getItems)
}
},[])



function adding(id) {
   
    setStore((prev) => {
        
/*since initiaaly prev is 0 so fildel is empty [] so it will push element*/




        const updatedStore = [...prev];
       // const itemIndex = updatedStore.findIndex(item => item.id === id);
        const findEle=updatedStore.find((item)=>{
            if(item.id === id){
                return item
            }
        })

if(findEle){
    findEle.quantity+=1
}else{
    updatedStore.push({ id: id, quantity: 1 });  
}

        /*
        if (itemIndex !== -1) {
            // If item exists, increase its quantity
            updatedStore[itemIndex].quantity += 1;
        } else {
            // If item does not exist, add it with a quantity of 1
            updatedStore.push({ id: id, quantity: 1 });
        }
*/
 // Update local storage with the new cart
        localStorage.setItem("cart", JSON.stringify(updatedStore));

return updatedStore;
   

       
  });
       
}
//second approch of adding
let array=useRef([])
console.log(array.current)
function addItems(id){
    const findEle=array.current.find((item)=>{
        if(item.id === id){
            return item
        }
    })

if(findEle){
findEle.quantity+=1
}else{
array.current.push({ id: id, quantity: 1 });  
}
console.log(array.current,"show")
   
   
localStorage.setItem("cart", JSON.stringify(array.current));
/*
very imp

Using setStore([...array.current]) instead of 
setStore(() => array.current) ensures that React recognizes 
the state change and triggers a re-render of the component. Here's a detailed explanation:

Understanding State Updates in React
React uses shallow comparison to determine if
 a state update should trigger a re-render. When you update 
 state with setStore, React compares the new state with the previous state.
  If you pass the same reference, React might not detect the change because 
  the reference is the same even if the content has changed.

*/

setStore(()=>{
    return [...array.current]
})
console.log(store,"store")
}






function handleDelete(id){
console.log("delete",id)
setStore((prev)=>{
    const storing=[...prev]
console.log(storing)
const findValue=storing.filter((item)=>{
    if(item.id!==id){
        return item
    }
})
localStorage.setItem("cart",JSON.stringify(findValue))
return findValue


})

}
console.log(store)
    return(
        <>
        <div style={{display:"flex",flexDirection:"row",background:"pink",justifyContent:"space-between"}}>
        <div>
        {carts&&carts.map((item)=>{
            return(<>
            <p>{item.id}</p>
            <div><button onClick={()=>adding(item.id)}>Add to cart</button></div>


    

            </>)
        })}
        </div>
<div>
<h1>ALL Added items</h1>
    <div>{store.map((item)=>{
        return(<><p>{item.id} {item.quantity}</p><button onClick={()=>handleDelete(item.id)}>Delete</button></>)
    })}</div>
</div>



</div>
        </>
    )
}
export default AddCart