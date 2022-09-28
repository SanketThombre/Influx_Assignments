
import chatImg from "../Images/chats.png"
import { chats } from "../data";
import './All_Pages.css';
import {BsCalendar3} from "react-icons/bs"

export const Chats = () => {
    console.log(chats)
    return (
        <div className="chats">
            <div className="chatHeading">
                <img src={chatImg} width="40px" height="40px"alt="ChatImage"/>
                <h4>Chat Box</h4>
            </div>

            <div className="conversationBox" style={{ padding:"10px 25px"}}>

            {chats.map((e) =>
             <div key={e.id} className="chatting">

                    {e.name === "Viggo" ?
                        <div className="conversation">
                            <div>
                                <img className="receiverImg" src={e.image} width="50px" height="50px" alt="ReceiverImg" />
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
                             <div>
                                <img className="receiverImg" src={e.image} width="50px" height="50px" alt="ReceiverImg" />
                            </div>
                    </div>      
                }
            </div>
            )}
           
            </div>

            <div></div>
            
        </div>
    )
}