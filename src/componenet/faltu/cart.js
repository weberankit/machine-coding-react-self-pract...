import { useContext } from "react"
import { context } from "./usecontext"

const Cart=()=>{
    const user=useContext(context)
    console.log("dd",user)
    return(
<h3>kk</h3>
    )
}
export default Cart