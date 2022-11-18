import video from "../../assets/video.svg"
import call from "../../assets/call.svg"
import moreOptions from "../../assets/more-options.svg"
import { HeaderContainer } from "./Header.styled"
import { Select } from "./Header.styled"
import { Status } from "./Header.styled"


function Header(props) {

    const { currSender, onChangeSender, senders } = props
    return (
      <HeaderContainer>
        <div className="sender-profile">
            <img src={`https://picsum.photos/seed/${currSender}/200/200`} alt="Profile photo" />
            <div>
                <Select onChange={onChangeSender}>
                    {senders.map((sender) => {
                        return (
                        <option key={sender} value={sender}>
                            {sender}
                        </option>
                        )
                    })}
                </Select>
                <Status>Online</Status>
            </div>
        </div>
        
        <div className="action-menu">
            <button>
                <img src={video} alt="more options icon" />
            </button>
        
            <button>
                <img src={call} alt="phone call icon" />
            </button>
       
            <button>
                <img src={moreOptions} alt="video cam icon" />
            </button>
        </div>
      </HeaderContainer>
    );
  }
  
  export default Header;
  