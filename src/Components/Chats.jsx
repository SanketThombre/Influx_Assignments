
import chatImg from "../Images/chats.png"
import { chats } from "../data";
import './All_Pages.css';
import { BsCalendar3 } from "react-icons/bs";
import { useState, useEffect } from "react";
import axios from "axios";

export const Chats = () => {
    const [data, setData] = useState([]);
    // console.log(chats);
    const [msg, setMsg] = useState("");
    const handleSubmit = () => {
         const Message =  {
            id: data.length+1,
            name:"John Wick",
            time: "11:01",
            day: "Yesterday",
            message: `${msg}`,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBtkmN856coZk4VznBQur_FJQ6HSSynWjGiN1-9Y_C2T8LIXCHvRTLjH6Y3sfSlWgo5Fg&usqp=CAU"
        }

        setMsg("");

       if (msg!="") {
           axios.post("https://influx-backend-server.herokuapp.com/chats",Message)
        //    console.log(Message);
        }
    }

    useEffect(() => { 
        axios.get("http://localhost:5000/chats")
        .then((res)=>setData(res.data))
     }, [msg]);

    return (
        <div className="chats">
            <div className="chatHeading">
                <img src={chatImg} width="40px" height="40px"alt="ChatImage"/>
                <h4>Chat Box</h4>
            </div>

            <div className="conversationBox">

            {data.map((e) =>
             <div key={e.id} className="chatting">

                    {e.name === "Viggo" ?
                        <div className="conversation">
                            <div style={{position: "relative"}}>
                                <img className="receiverImg" src={e.image} width="50px" height="50px" alt="ReceiverImg" />
                                <div className="onlineStatus"></div>
                            </div>
                            <div style={{textAlign: "left"}}>
                                
                                <div className="receiverMessage"><p>{e.message}</p></div>
                                
                                <p className="date"><BsCalendar3/> {e.time} | { e.day}</p>
                            </div>
                        </div> : <div className="conversation">
                             <div style={{textAlign: "right"}}>
                                
                                <div className="senderMessage"><p>{e.message}</p></div>
                                
                                <p className="date"><BsCalendar3/> {e.time} | { e.day}</p>
                            </div>
                             <div style={{position: "relative"}}>
                                <img className="receiverImg" src={e.image} width="50px" height="50px" alt="ReceiverImg" />
                                <div className="onlineStatus"></div>
                            </div>
                    </div>      
                }
            </div>
            )}
           
            </div>

            <div className="typeBox">
                <input className="inputBox" type="text" value={msg} placeholder="Write here and hit enter to send...." onChange={(e)=>setMsg(e.target.value)} />
                <button className="sendBtn" onClick={handleSubmit}>Send</button>
                
            </div>
            
        </div>
    )
}