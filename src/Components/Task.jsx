
import taskImg from "../Images/Task.png";
import { task } from "../data";
import './All_Pages.css';
import { useState, useEffect } from "react";
import axios from "axios";


export const Task = () => {
    
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/task")
       .then((res)=>setData(res.data)) 
    },[])

    return (
        <div className="task">
            <div className="taskHeading">
                <img src={taskImg} width="40px" height="40px"alt="ChatImage"/>
                <h4>Tasks List</h4>
            </div>

            {data.map((e) =>
                
               
                <div className="box" key={e.id}>
                    <div className="MainBox">
                        {e.status === "Latest Task" ? <div style={{ width: "3px", height: "40px", borderRadius: "7px", backgroundColor: `#95939e` }}></div>
                            :e.image?<div style={{ width: "3px", height: "40px", borderRadius: "7px", backgroundColor: `#00caf2` }}></div>
                            : <div style={{ width: "3px", height: "40px", borderRadius: "7px", backgroundColor: `#fbd88a` }}></div>} 
                        <input type="checkbox" />
                        <div className="taskBox">
                            {e.image ? <img src={e.image } width="50px" height="50px" alt="PersonImg" /> :null}
                <div className="title">
                    <h5>{e.title}</h5>
                    <p>{e.user}</p>
                </div>
                {e.status === "Rejected" ? <p className="reject">REJECTED</p> : null}
                {e.status==="Planned"?<p className="plan">Planned</p>:null}            
            </div>
                    </div>
        
        {e.status==="Latest Task"?<p className="latest">LATEST TASK</p>:null}
    </div>
            )}

            <div className="TaskSaveBtn">
                <button className="cancelBtn">Cancel</button>
                <button className="saveBtn">Save</button>

            </div>

        </div>
    )
}