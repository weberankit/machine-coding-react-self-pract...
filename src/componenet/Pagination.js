/*import { useState,useEffect } from "react"
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
            <span onClick={()=>{setPage(index+1)}}><span className={index+1== page && "page"}>
                
                {index+1}</span></span>
            </>)
          })}  
        <button onClick={()=>handlePrev()}>Prev</button>
        <button onClick={()=>handleNext()}>Next</button>

        </div>
        </>
    )
}

export default Pagination*/

//this I have learned from gpt https://chatgpt.com/c/66f63834-84cc-8011-9e5b-2bf8f5ef9ea2
import { useState, useEffect } from "react";
import "../index.css";

const Pagination = () => {
    const [data, setData] = useState([]);
    let [page, setPage] = useState(1);
    const visiblePages = 6; // Number of visible page numbers at a time

    async function DataFetch() {
        const response = await fetch("https://dummyjson.com/products?limit=100");
        const json = await response.json();
        setData(json?.products || []); // Ensure data is an array
    }

    useEffect(() => {
        DataFetch();
    }, []);

    function handleNext() {
        setPage((prev) => {
            if (page >= Math.ceil(data.length / 10)) {
                return page; // Stop if it's the last page
            }
            return prev + 1;
        });
    }

    function handlePrev() {
        setPage((prev) => {
            if (prev <= 1) {
                return prev; // Stop if it's the first page
            }
            return prev - 1;
        });
    }

    // Handle undefined data by ensuring there is content before rendering pagination
    if (!data || data.length === 0) {
        return <div>Loading...</div>; // Display loading or empty state
    }

    const startPage = Math.max(1, page- Math.floor(visiblePages/2) );//page start ex--p=6 so start=3
    const endPage = Math.min(Math.ceil(data.length / 10), startPage + visiblePages - 1);//page-end so end=8

    return (
        <>
            {data.slice(page * 10 - 10, page * 10).map((item) => {
                return (
                    <div style={{ display: "flex", flexDirection: "row" }} key={item.id}>
                        <img style={{ width: "400px", border: "1px solid" }} src={item.thumbnail} alt="poster-img" />
                    </div>
                );
            })}
            <div>
                {page} 
                {
                    /**to create array we use array.from and their lotsofotherfunctionalties */
                }
                {Array.from({ length: endPage - startPage+1}, (_, index) => {
                    const pageIndex = startPage + index;
                    return (
                        <span key={pageIndex} onClick={() => setPage(pageIndex)}>
                            <span className={pageIndex === page ? "page" : ""}>
                                {pageIndex}
                            </span>
                        </span>
                    );
                })}
                <button onClick={handlePrev}>Prev</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </>
    );
};

export default Pagination;
