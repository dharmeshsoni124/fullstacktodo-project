import "./addtodo.css";
import {useState,useEffect} from "react";

 


const Addtodo=()=>{
    const Timer=()=>{
        const[addtodo,setAddtodo]=useState([]);
        // const[todo,setTodo]=useState=("")
        
        const[second,setSecond]=useState("00");
        const[minute,setMinute]=useState("00");
    
       
   
    
    useEffect(()=>{
    Timer =setInterval(()=>{
        setSecond(second=second+1)
     
        if(second===59){
             setMinute(minute+1);
             setSecond(0);
        }
    },1000)
    })
    
    }
   


    return(
        <div>
         <h1>Create a To Do </h1>
         <form>
            <div>
                <label className="activity-label">Activity</label>
                <input  className="activity" type="text"  />

            </div>
           
            
                <div>
                <button  className="add-to-do">Add ToDo</button>
                </div>
                <div>
                    <button  className="start">start</button>
                    <button className="stop">stop</button>
                    <button className="pause">pause</button>
                    <button className="resume">resume</button>
                   
                  
                    
                </div>
            
                
            
         </form>
        </div>
    )
}
 export default Addtodo;