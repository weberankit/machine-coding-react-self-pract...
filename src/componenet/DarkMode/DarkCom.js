import {useContext ,useState} from "react"
import {mode} from "../../utils/helper"
import Button from "./Button"
import Content from "./Content"

const DarkCom=()=>{

const themes=useContext(mode)
const [bg,setBg] = useState(true)

    return(
        <>
        <mode.Provider value={{bg,setBg}}>
        hi i am ankit  
        <Content/>
           <Button/>
        
        </mode.Provider>
        </>
    )
}

export default DarkCom