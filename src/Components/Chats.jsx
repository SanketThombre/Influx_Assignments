
import chatImg from "../Images/chats.png"
import { chats } from "../data";
import './All_Pages.css';

export const Chats = () => {
    console.log(chats)
    return (
        <div className="chats">
            <div className="chatHeading">
                <img src={chatImg} width="40px" height="40px"alt="ChatImage"/>
                <h4>Chat Box</h4>
            </div>

            <div>

            {chats.map((e) =>
             <div key={e.id} className="chatting">

                    {e.name === "Viggo" ?
                        <div>
                            <div>
                                <img src={e.image} width="50px" height="50px" alt="ReceiverImg" />
                            </div>
                            <div>
                                
                                <div><p>{e.message}</p></div>
                                
                                <p>{e.time} | { e.day}</p>
                            </div>
                        </div> : <div>
                             <div>
                                
                                <div><p>{e.message}</p></div>
                                
                                <p>{e.time} | { e.day}</p>
                            </div>
                             <div>
                                <img src={e.image} width="50px" height="50px" alt="ReceiverImg" />
                            </div>
                    </div>      
                }
            </div>
            )}
           
            </div>
            
        </div>
    )
}