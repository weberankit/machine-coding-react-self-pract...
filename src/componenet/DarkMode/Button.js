import { useContext } from "react"
import { mode } from "../../utils/helper"
const Button=()=>{
const themes=useContext(mode) 
console.log(themes)
const {bg,setBg} = themes

    return(
        <>
        <button onClick={()=>setBg(!bg)} >Light </button>
        </>
    )
}
export default Button