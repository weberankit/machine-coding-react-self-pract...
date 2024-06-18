import { useState } from "react"

const LiftSecond=({datas,setValue,bool})=>{
    ///console.log(props.datas)
  //  const [toggle,setToggle]=useState(false)
   console.log(datas)
return(<>



 <div>
   <div > {datas.title}</div>
    
    <button onClick={setValue} ></button>

    {bool && datas.content}
   </div>
    




</>
)

}
export default  LiftSecond