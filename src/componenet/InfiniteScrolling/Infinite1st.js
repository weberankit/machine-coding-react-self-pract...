import {useState,useEffect} from "react"
const Infinite=()=>{
const [list,setList]=useState()
let page=30
let max=100
async function fetchData(){
    console.log(page)
    const data=await fetch("https://dummyjson.com/products?limit="+page)
    const json=await data.json()
    setList(json?.products)
    console.log(json)
}
useEffect(()=>{
fetchData()

window.addEventListener("scroll",scrolling)

return ()=>{window.removeEventListener("scroll",scrolling)}
},[])

function scrolling(){
//console.log("kingh")
//console.log("window inner height-", window.innerHeight ,  "how much you have scroll-",window.scrollY, " content-",document.body.scrollHeight)
//he Element.scrollHeight read-only property is a measurement of the height of 
//an element's content, including content not visible on the screen due to overflow
console.log(window.scrollY+window.innerHeight,document.body.scrollHeight)

if(window.scrollY+window.innerHeight>=document.body.scrollHeight){
    page=page+10
    if(page<=100) fetchData()
   
}
}




    return(
        <>
        {list&&list.map((item)=>{
            return(
                <>
                <li>{item.id}</li>
                </>
            )
        })}
        </>
    )
}
export default Infinite