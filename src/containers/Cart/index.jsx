
import Logo from '../../assets/Logo.svg'
import { Banner, Container, Content, Title } from './styles'
export function Cart(){

    return(
        <Container>
            <Banner>
                <img src={Logo} alt="" />
            </Banner>
            <Title>
                Checkout - Pedido
            </Title>
            <Content>
                {/* <CartItems>
                    
                </CartItems>
                <CartResume></CartResume> */}
            </Content>
        </Container>
    )
}