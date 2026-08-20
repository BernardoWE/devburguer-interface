import PropTypes from "prop-types"
import { CardImage, Container } from "./styles"
import { CartButton } from "../CartButton"

export function CardOffer({offer}){
    return (
        <Container>
            <CardImage src={offer.url} alt={offer.name}/>
            <div>
                <p>{offer.name}</p>
                <strong>{offer.price}</strong>
            </div>
            <CartButton></CartButton>
        </Container>
    )

}

CardOffer.propTypes = {
    offer: PropTypes.object
}