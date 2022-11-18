import styled from "styled-components";

export const FooterContainer = styled.footer`
   background-color: #F1F4F7;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;

    div {
        background-color: white;
        width: 490px;
        height: 50px;
        padding: 16px;
        border-radius: 35px;
        display: flex;
        align-items: center;
        box-shadow: 1px 1px 3px 0px rgba(204,204,204,1);
    
        input {
            color: #78787C;
            width: 100%;
            border: none;
            margin: 0 8px;
            height: 28px;
            padding: 0 4px;
        }
    }


    button {
        border: none;
        background-color: white;

        :hover {
            cursor: pointer;
            filter: brightness(0.95)
        }

        :active {
            filter: brightness(0.85);
        }
    }

    .smile, .paperClip {
        width: 32px;
        height: 32px;
        border-radius: 50%;
    }

    .paperClip {
        margin-left: auto;
    }

    .microphone {
        background-color: #61C554;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`