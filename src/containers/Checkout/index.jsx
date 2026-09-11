import { Elements } from "@stripe/react-stripe-js"
import { useLocation } from "react-router-dom"
import stripePromise from '../../config/stripeConfig'
import { CheckoutForm } from '../../components'

export function Checkout() {
    // const location = useLocation()
    const { state: { clientSecret } } = useLocation()
    // console.log(location)
    if (!clientSecret) {
        return <div>Erro, volte e tente novamente</div>
    }
    return (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm></CheckoutForm>
        </Elements>
    )
}