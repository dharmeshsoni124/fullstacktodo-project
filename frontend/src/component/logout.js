import {  useNavigate } from "react-router-dom"
import "./logout.css"
import {useState} from "react";

const Logout=()=>{
    const [item,setItem]=useState([]);

    const nav=useNavigate()
    const logoutHandle=()=>{

        localStorage.clear()
        localStorage.setItem("authorization","")
        nav("/")
    }

    return(
        <button  className="logout"onClick={logoutHandle} value={item}>Logout</button>
    )
}
export default Logout