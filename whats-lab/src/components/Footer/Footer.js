import { FooterContainer } from "./Footer.styled"
import smileFace from "../../assets/Smiley.svg"
import paperClip from "../../assets/Paperclip.svg"
import microphone from "../../assets/Microphone.svg"
import { useState } from "react"

function Footer(props){
    const { sendMessage } = props
    const [text, setText] = useState("")

    const changeText = (e) => {
        setText(e.target.value)
    }

    const clearText = () => {
        setText("")
    }
    return (
        <FooterContainer>
            <div>
                <button className="smile">
                    <img src={smileFace} alt="Smile icon"/>
                </button>

                <input 
                value={text}
                onChange={changeText} 
                placeholder="Type a message"
                onKeyDown={(e) => sendMessage(e, text, clearText)}
                />

                <button className="paperClip">
                    <img src={paperClip} alt="Append icon"/>
                </button>
            </div>
            <button className="microphone">
                <img src={microphone} alt="Microphone icon" />
            </button>
            
        </FooterContainer>
    )
}

export default Footer