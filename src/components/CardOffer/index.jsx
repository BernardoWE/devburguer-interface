import PropTypes from "prop-types"
import { CardImage, Container } from "./styles"
import { CartButton } from "../CartButton"
import { useCart } from "../../hooks/CartContext"

export function CardOffer({offer}){

    const { putProductInCart} = useCart()
    return (
        <Container>
            <CardImage src={offer.url} alt={offer.name}/>
            <div>
                <p>{offer.name}</p>
                <strong>{offer.formatedPrice}</strong>
            </div>
            <CartButton onClick={() => putProductInCart(offer)}></CartButton>
        </Container>
    )

}

CardOffer.propTypes = {
    offer: PropTypes.object
}