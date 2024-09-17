import { useState,useEffect } from "react"
import "../index.css"


const Pagination=()=>{
    const [data,setData] =useState()
 //   const [Totalpage , setTotalPage] = useState(0)
    let [page ,setPage]=useState(1)
async function DataFetch(){
    const data=await fetch("https://dummyjson.com/products?limit=100")
    const json=await data.json()
      setData(json?.products)
    //  setTotalPage(json?.products.length)
      //console.log(Totalpage)
}
//console.log(data)
useEffect(()=>{
    DataFetch()
},[])

function handleNext(){
    
setPage((prev)=>{
    if(page>=(data.length/10)){

//return 1 
//stoping moving
return page
    }
   return prev+1
})
}
function handlePrev(){
setPage((prev)=>{
    if(prev<=1){
        return prev
    }
return prev-1
})
}
    return(
        <>
        {data&&data.slice(page*10-10,page*10).map((item)=>{
           // console.log(item.thumbnail)
            return (
            < div style={{display:"flex" ,flexDirection:"column"}}>
            <img style={{width:"400px",border:"1px solid" }} src={item.thumbnail} alt="poster-img"></img>
            
            </div>)
        })}
        <div>
            {page}
           {data && new Array(data.length/10).fill(1).map((item,index)=>{
            return(<>
            <span onClick={()=>{setPage(index+1)}}><span className={index+1== page && "page"}>{index+1}</span></span>
            </>)
          })}  
        <button onClick={()=>handlePrev()}>Prev</button>
        <button onClick={()=>handleNext()}>Next</button>

        </div>
        </>
    )
}

export default Pagination