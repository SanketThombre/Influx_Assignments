
import chatImg from "../Images/chats.png"

export const Chats = () => {
    return (
        <div className="chats">
            <div className="chatHeading">
                <img src={chatImg} width="40px" height="40px"alt="ChatImage"/>
                <h4>Chat Box</h4>
            </div>
        </div>
    )
}