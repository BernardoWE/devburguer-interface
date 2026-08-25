import styled from 'styled-components'

import BannerHome from './../../assets/BannerHome.svg'
import Background from './../../assets/rightBackgroundLogin.svg'

export const Banner = styled.div`
    background-image: url('${BannerHome}');
    background-size: cover;
    background-position: center;
    height: 480px;
    position: relative;
    h1{
        color: #f4f4f4;
        font-family: 'Road Rage', sans-serif;
        font-size: 80px;
        position: absolute;
        right: 20%;
        top: 20%;
        
    }
`
export const Container = styled.section`
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
    ), url('${Background}');
    
    
`

// export const Content = styled.div`
//     padding-bottom: 70px;
    
// `