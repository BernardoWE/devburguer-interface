import { Container, Banner} from "./styles";
import { CategoriesCarousel } from "../../components/CategoriesCarousel";
import { OffersCarousel } from "../../components/OffersCarousel";

export function Home(){

    return(
        <main>
            <Banner>
                    <h1>Bem-vindo!</h1>
                </Banner>
            <Container>
                
                <div>
                    <CategoriesCarousel/>
                    <OffersCarousel/>
                    
                </div>
            </Container>
        </main>
    )
}