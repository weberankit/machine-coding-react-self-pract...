import { useEffect,useState } from "react"
import "../index.css"
const BackendPagination=()=>{
    const [data,setData] =useState()
       const [Totalpage , setTotalPage] = useState()
       let [page ,setPage]=useState(1)
   async function DataFetch(){
    console.log("paging",page)
       const data=await fetch(`https://dummyjson.com/products?limit=10&skip=${page*10-10 }&select=thumbnail`)
       const json=await data.json()
         setData(json?.products)
         setTotalPage(json?.total/10)
         //console.log(Totalpage)
        console.log(json.total)//page=194 totalpage=19  
   }
   console.log(data," " , page)
   useEffect(()=>{
       DataFetch()
   },[page])
   
   function handleNext(){
    console.log(page,"pae")
    setPage((prev)=>{
      if(page>Totalpage){
        console.log(page,"this is page")
        return prev
      }
       return prev+1
    })
   
   }
   function handlePrev(){
    setPage((prev)=>{
        if(page<=1){
            return prev
        }
    return prev-1
    })
   }
       return(
           <>
           {data&&data.map((item)=>{
              // console.log(item.thumbnail)
               return (
               < div style={{display:"flex" ,flexDirection:"column"}}>
               <img style={{width:"400px",border:"1px solid" }} src={item.thumbnail} alt="poster-img"></img>
               
               </div>)
           })}
           <div>
               {page}
              {data && new Array(Math.floor(Totalpage+1)).fill(1).map((item,index)=>{
               return(<>
               <span onClick={()=>{setPage(index+1)}}><span className={index+1== page && "page"} style={{padding:"2px"} }>{index+1}</span></span>
            
               </>)
             })}  
           <button onClick={()=>handlePrev()}>Prev</button>
           <button onClick={()=>handleNext()}>Next</button>
   
           </div>
           </>
       )
}

export default BackendPagination