import { Link } from "react-router-dom";
import styled from "styled-components";

export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    button{
        background-color: ${props => props.theme.purple};
        border: none;
        width: 32px;
        height: 32px;
        border-radius: 5px;
        color: ${props => props.theme.white};
        transition: all .2s ease-in;
        &:hover{
            background-color: ${props => props.theme.secondDarkPurple};
        }
    }
`
export const ProductImage = styled.img`

    width: 90px;
    padding: 5px;
    border-radius: 16px;
    background-color: #F3F3F3;
`
export const DeleteProductButton = styled.button`

   background: none;
   border: none;
   &:active{
    transform: scale(.96);
   }
`
export const BackButton = styled(Link)`

    color: ${props => props.theme.darkPurple};
    font-size: 15px;
    
`