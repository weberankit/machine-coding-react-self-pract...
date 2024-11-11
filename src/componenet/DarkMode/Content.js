import { useContext } from "react"
import { mode } from "../../utils/helper"
const Content=()=>{
const thems=useContext(mode)
console.log(thems)
const {bg}=thems
    return(
        <div style={{background:bg?"white":"black"}}>
        
        <div  style={{height:"440px",width:"550px"}}>


        </div>
        </div>
    )
}
export default Content