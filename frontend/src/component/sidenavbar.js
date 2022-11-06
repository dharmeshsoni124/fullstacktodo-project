import "./sidenavbar.css"
import { Link } from "react-router-dom";
import Logout from "./logout";
import {useState} from "react";
import {  useNavigate } from "react-router-dom"






const SideNavBar = () => {
   
    
        const [item,setItem]=useState([]);
    
        const nav=useNavigate()

        const logoutHandle=()=>{
    
            localStorage.clear()
            localStorage.setItem("authorization","")
            nav("/")
        }
    
        
    
   
    return (
        
            <div className="nav-container">
                
                    <nav className="nav">
                    <div className="user-name">
                        username
                    </div>
                   
                    </nav>
                        <Link to ="/addtodo">
                        <button  type="submit" className="add-new">Add New Activity</button>
                        </Link>
                    <div>
                    <div className="todo">
                    <div className="list1">To do List</div>
                    <div className="list3"> History</div>
                    <button  className="list4"onClick={logoutHandle}>Logout</button>
                    </div>
                    
      <table className="table">
         <tr className="table-row">
            <th className="table-head">Activity</th>
            <th className="table-head">Status</th>
            <th className="table-head">Time taken(Hrs :Min :Sec)</th>
            <th className="table-head">Action</th>
         </tr>
         
      </table>
                    </div>
                    
                </div>
               
            

        
    )
}
export default SideNavBar;