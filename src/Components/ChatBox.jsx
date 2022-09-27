import { Chats } from "./Chats"
import {Task} from "./Task"

export const ChatBox = () => {
    return (
        <div className="Main">

            <div className="chatBox">
                <Task/>
                <Chats/>
                
            </div>

        </div>
    )
}