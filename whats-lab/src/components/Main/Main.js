import { MainContainer } from "./Main.styled"
import { ChatBalloon } from "./Main.styled"
import TickDoubleBlue from "../../assets/tick-double-blue.svg"

function Main (props){
    return (
        <MainContainer>
            {props.messages.map((message) => (
            <div>
                <ChatBalloon  
                sender={message.sender}
                onDoubleClick={() => props.deleteMessage(message.id)}
                >
                    <h1>{message.sender}</h1>
                    <p>{message.content}</p>
                    <div>
                        <span>{message.createdAt}</span>
                        <img src={TickDoubleBlue} alt="View status icon"/>
                    </div>
                </ChatBalloon>
            </div>
            ))}
        </MainContainer>
    )
}

export default Main