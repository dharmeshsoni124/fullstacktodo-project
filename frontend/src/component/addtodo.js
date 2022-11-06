import "./addtodo.css";
import {useState} from "react";

 


const Addtodo=()=>{
    const[addtodo,setAddtodo]=useState([]);
    const[todo,setTodo]=useState=("")

    const handleAddtodo=(e)=>{
        setAddtodo(e.target.value);
    }

    const handleTodo=()=>{
         e.preventDefault();
         setTodo()
        
    }

    return(
        <div>
         <h1>Create a To Do </h1>
         <form>
            <div>
                <label className="activity-label">Activity</label>
                <input  className="activity" type="text"  onChange={handleAddtodo}/>

            </div>
           
            
                <div>
                <button  onClick={handleTodo}className="add-to-do">Add ToDo</button>
                </div>
            
                
            
         </form>
        </div>
    )
}
 export default Addtodo;