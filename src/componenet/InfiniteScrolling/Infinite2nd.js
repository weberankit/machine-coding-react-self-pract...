
import React, { useState, useEffect, useRef } from "react";

const InfiniteScroll2nd = () => {
 

const loadElement=useRef(null)

const [currentPage,setCurrentPage] =useState(0)
const [data ,setData] = useState([])
const [futherNotCall , setFurtherNotCall] =useState(null)
async function fetchData(){
if(futherNotCall) return 
try{
const datas= await fetch( `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${currentPage}`)
const json= await datas.json()
if(json?.length>0){
 setData((prev)=>{
    return [...prev ,...json]
})   
}else{
loadElement.current.textContent="Bhai hogaya na kitna chaiye"
 setFurtherNotCall(true)
}
    }catch(error){
        console.log(error)
    }

}

//calling data when page change
useEffect(()=>{
fetchData()
},[currentPage])
//first we will write intersection api
useEffect(()=>{
const Intersection =new IntersectionObserver((entries)=>{
console.log(entries)
if(entries[0].isIntersecting){
    setCurrentPage((prev)=>prev+1)
}
},{threshold:0.1})

if(loadElement?.current){
Intersection.observe(loadElement.current) 
}
return()=>{
    if(loadElement.current){
        Intersection.unobserve(loadElement.current)
    }
}
},[])

return(
    <>
     {data && data.map((item,index) => (
          <li style={{ margin: "10px 0", padding: "10px", border: "1px solid #ccc" }}>
            <strong>{item.title}</strong>
            <p>{item.body}</p>
          </li>
        ))}
    <div ref={loadElement}>loading more</div>
    </>
)

};

export default InfiniteScroll2nd;
