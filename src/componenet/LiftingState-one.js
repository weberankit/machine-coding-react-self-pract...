import { useState } from "react";
import LiftSecond from "./LiftSecondpart";

const LiftingOne=()=>{
    const data = [
        {
            title: "Accordion Item 1",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam sed elit eleifend viverra nec ut purus. Nam ac mauris sapien. Sed fringilla velit nec justo finibus fermentum."
        },
        {
            title: "Accordion Item 2",
            content: "Integer feugiat, arcu non feugiat vehicula, nunc lorem consectetur leo, nec condimentum purus eros eget nulla. In at tellus nec ante feugiat ultricies nec sed ligula."
        },
        {
            title: "Accordion Item 3",
            content: "Vivamus fringilla orci in lacus placerat, nec faucibus metus feugiat. Donec ut enim vitae mi consectetur elementum. Ut in diam at lorem lacinia finibus."
        }
    ];
    const [indexValue,setIndex]=useState(0)

return(
    <>
    




   {
   //data && data.map((iem)=><LiftSecond datas={iem}/>)

   // <LiftSecond datas={data} />
    //consclusin--
    /**
     * 1st-we can expand and close together throuth two methods 
     * 
     * a-using lifting up state by using map function in  parent component and passing function and passing bollean to
     * child componenet and using useState in parent component
     * 
     *  b- using only one component and directly using useState in the  component and using index===index of map of values
     * 
     * //simple one
     * 2nd-epand on click but not close other
     * we can achieve it by using 2 components using map in parent component and using useState in child component(user click set true and show value)
     * 
     * 
     * 
     */
}


{
   data && data.map((iem ,index)=>{
    return(
   <LiftSecond datas={iem} setValue={()=>setIndex(index)} bool={index === indexValue?true:false}/>
    )
   })
}

 </>
)
}

export default LiftingOne