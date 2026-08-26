import styled from 'styled-components'

import BannerHome from './../../assets/BannerHamburguer.svg'
import Background from './../../assets/rightBackgroundLogin.svg'
import { Link } from 'react-router-dom'

export const Banner = styled.div`
    background: url('${BannerHome}');
    background-size: cover;
    background-position: center;
    background-color: #1f1f1f;
    height: 480px;
    position: relative;
    h1{
        color: #f4f4f4;
        font-family: 'Road Rage', sans-serif;
        font-size: 80px;
        position: absolute;
        right: 20%;
        top: 30%;
        text-align: center;
        line-height: 0.7;
        
    }
    span{
        display: block;
        font-size: 20px;
        margin-top: 5px;
    }
`
export const Container = styled.section`
    /* background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
    ), url('${Background}'); */
    min-height: 100vh;
    padding-bottom: 50px;
    background: linear-gradient(
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0.5)
        ), url('${Background}');
`
export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 30px;
`
export const CategoryButton = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    background: none;
    color: ${props => props.$isActiveCategory ? '#9758a6' : '#9a9a9d'};
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 5px;
    line-height: 20px;
    border: none;
    border-bottom: ${(props) => props.$isActiveCategory && '3px solid #9758a6'};
`
export const ProductsContainer = styled.div`

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 40px;
    gap: 60px;
    justify-content: center;
    max-width: 1280px;
    margin: 50px auto 0;
`
export const BackButton = styled(Link)`
        color: #5C2669;
        /* background-color: blue; */
        /* padding: 0px 0px 50px ; */
        border-radius: 30px;
        font-size: 18px;
        font-weight: 600;
        margin-top: 50px;
        text-decoration: none;
        width: fit-content;
        display: block;
        margin: 0 auto;
/* display: flex; */
/* align-items: center;
justify-content: center; */
`