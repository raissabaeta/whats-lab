import styled from "styled-components";

export const HeaderContainer = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;

    div.sender-profile{
        display: flex;
        align-items: center;


    img {
         width: 50px;
         border-radius: 50%;
        }
    }

    div {
        margin-left: 8px;
    }

    div.action-menu{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 135px;

        button{
            border-radius: 50%;
            border: none;
            width: 38px;
            height: 38px;
            background-color: #f8f8f8;
            display: flex;
            align-items: center;
            justify-content: center;
            
            :hover {
                cursor: pointer;
                filter: brightness(0.95)
            }

            img{

            }
        }
    }

`

export const Select = styled.select`
    border: none;
    font-weight: 700;
    font-size: 16px;
`

export const Status = styled.p`
    font-size: 12px;
    font-weight: 500;
    color: #b9bec3;
    padding-left: 4px;
`