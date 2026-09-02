import styled from "styled-components";

export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    button{
        background-color: #9758A6;
        border: none;
        width: 32px;
        height: 32px;
        border-radius: 5px;
        color: #fff;
        transition: all .2s ease-in;
        &:hover{
            background-color: #6f357c;
        }
    }
`
export const ProductImage = styled.img`

    width: 80px;
    border-radius: 16px;
`
export const DeleteProductButton = styled.button`

   background: none;
   border: none;
   &:active{
    transform: scale(.96);
   }
`