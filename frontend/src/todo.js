import react from "react";
import {useState} from "react";


const todo=()=>{
   const [todo,setTodo]=useState("");

   const handletodo=(e)=>{
     setTodo(e.target.value)
   }

   const handlebutton=()=>{
   }
   

    return(
        <>
<form>
    <div>
        <h1>Todo List</h1>
        <span>
        <input type="text"  onChange={handletodo}/>
       <button onClick={handlebutton}>Add todo</button>
        </span>

        
    </div>



</form>


        </>
    )
}

export default todo;