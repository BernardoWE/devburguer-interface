import styled from "styled-components";
import leftBackgroundLogin from "../../assets/leftBackgroundLogin.svg"
import rightBackgroundLogin from "../../assets/rightBackgroundLogin.svg"

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
`
export const LeftContainer = styled.div`
    background: url('${leftBackgroundLogin}');
    background-size: cover;
    background-position: center;
    height: 100%;
    width: 100%;
    max-width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 80%;
    }
`
export const RightContainer = styled.div`
    background: url('${rightBackgroundLogin}');
    background-color: #1e1e1e;
    /* background-size: cover;
    background-position: center; */
    height: 100%;
    width: 100%;
    max-width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    p{
        color: #fff;
        font-size:18px;
        font-weight: 800;
    }
    a{
        color: #fff;
    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    width: 100%;
    max-width: 400px;
`
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    input{
        width: 100%;
        border: none;
        height: 52px;
        padding: 0 16px;
        border-radius: 5px;

    }
    label{
        font-size: 18px;
        font-weight: 600;
        color: #fff;
    }
    p{
        font-size: 14px;
        line-height: 80%;
        color: #cf3057;
        font-weight: 600;
        height: 10px;
    }
`
export const Title = styled.h2`
   font-family: "Road Rage", sans-serif;
    font-size: 40px;
    color: #fff;
    span{
        color: #9758A6;
        font-family: "Road Rage", sans-serif;
    }

`
