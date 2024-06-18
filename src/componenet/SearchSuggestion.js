
import { useEffect, useRef, useState } from "react";

const SearchSuggestion=()=>{
const [inputVal,setVal]=useState()
const [list,setlist]=useState(null)
//function handleSearch(){}
let refValue=useRef(null)

const callingSuggestion=async()=>{
    const fetching = await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" + inputVal);

    const data=await fetching.json()
    console.log(data)
    setlist(data[1])
}




//console.log(inputVal)


useEffect(()=>{
  let timer
     if(inputVal){
  //callingSuggestion()
//debounce(callingSuggestion)

//debounce.call(callingSuggestion)
/*
debounce(callingSuggestion)

     */
    /*
  timer=setTimeout(() => {
    callingSuggestion()
}, 200);
*/
    
}


  // return(()=>clearTimeout(timer))


},[inputVal])

 let timer;
function debounce(fn){

  console.log(timer)
  
    if(refValue.current){
clearTimeout(refValue.current)
console.log("clear",timer)
 } 

console.log(timer)
       //console.log("hi") 
 
  refValue.current= setTimeout(()=>{
   // console.log(this)
    //this()
    fn()
},200)



console.log(timer,"te")
}



    return(
        <>
        <div>
            <p>this is input</p>
            <input value={inputVal} onChange={(e)=>{return setVal(e.target.value)}}/> 
         
        </div>
        <div>
            {list&& list.map(item=><p>{item}</p>)}
        </div>
        </>
    )
}

export default SearchSuggestion
