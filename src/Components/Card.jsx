import { useState } from "react";
import "./Card.css"

function Card(){
    const [task , setTask] = useState("")
    const [entry , setEntry] = useState([])
    function getdata(){
        const update = [...entry , task];
        setEntry(update);
        localStorage.setItem("value",update);
        console.log(entry);
        setTask("");
    }
    function deletetask(index){
        const update = entry.filter((val,i)=> i!== index)
        setEntry(update);
        localStorage.setItem("value",update)
    }
    return(
        <div className="Card">
            <h3 style={{textAlign:"center",color:"#6b63ffbe"}}>Let's discuss</h3>
            <div className="entry">
                <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} placeholder="what's your task"/>
                <button onClick={getdata}>+</button>
            </div>
            {entry.map((val,index)=>{
                return(
                    <div className="subcard" key={index} >  
                        <h3>{val}</h3>
                        <button onClick={()=> deletetask(index)}>X</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Card