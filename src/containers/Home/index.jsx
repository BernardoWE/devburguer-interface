import { Container, Banner, Content } from "./styles";
import { CategoriesCarousel } from "../../components/CategoriesCarousel";

export function Home(){

    return(
        <main>
            <Banner>
                    <h1>Bem-vindo!</h1>
                </Banner>
            <Container>
                <CategoriesCarousel></CategoriesCarousel>
                <Content></Content>
            </Container>
        </main>
    )
}