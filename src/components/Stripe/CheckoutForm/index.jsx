import { useState } from "react";
import {
    PaymentElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import {  useNavigate } from "react-router-dom";
import '../../Stripe/styles.css'
import { useCart } from "../../../hooks/CartContext";
import { api } from "../../../services/api";
import { toast } from "react-toastify";

export function CheckoutForm() {
    const { cartProducts, clearCart } = useCart()
    const navigate = useNavigate()
    const stripe = useStripe();
    const elements = useElements();
    // const { state: { dpmCheckerLink } } = useLocation()

    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            console.error('Stripe ou Elements com falha')
            return;
        }

        setIsLoading(true);

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            redirect: 'if_required',

        });
        if (error) {
            setMessage(error.message);
            toast.error(error.message)
        } else if (paymentIntent && paymentIntent.status === 'succeeded') {
            try {
                const products = cartProducts.map((product) => {
                    return { id: product.id, quantity: product.quantity, price: product.price }
                })
                const { status } = await
                    api.post("/orders", { products }, {
                        validateStatus: () => true
                    })
                if (status === 200 || status === 201) {

                    setTimeout(() => {
                        navigate(`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`)
                        clearCart()
                    }, 3000);

                    toast.success('Pedido realizado com sucesso!')

                } else if (status === 400) {
                    toast.error('Erro ao realizar o pedido!')
                } else {
                    throw new Error()
                }

                // console.log(status)
            } catch (error) {
                console.log(error)
                toast.error('Falha no sistema')
            }
        } else {
            navigate(`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`)
            toast.error('Falha no sistema')
        }

        setIsLoading(false);
    };

    const paymentElementOptions = {
        layout: "accordion"
    }

    return (
        <div className="container">
            <form id="payment-form" onSubmit={handleSubmit}>

                <PaymentElement id="payment-element" options={paymentElementOptions} />
                <button disabled={isLoading || !stripe || !elements} id="submit" className="button">
                    <span id="button-text">
                        {isLoading ? <div className="spinner" id="spinner"></div> : "PAGAR AGORA"}
                    </span>
                </button>
                {/* Show any error or success messages */}
                {message && <div id="payment-message">{message}</div>}
            </form>
        </div>
    );
}