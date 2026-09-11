import styled from "styled-components";

export const Container = styled.div`
    height: 50px;
    background-color: ${props => props.theme.darkPurple};
    max-width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        color: ${props => props.theme.white};
        font-size: 14px;
        font-weight: 200;
    }
`