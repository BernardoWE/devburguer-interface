import { useState } from 'react'
import { toast} from 'react-toastify'
import {formatPrice} from '../../utils/formatPrice'
import {api} from '../../services/api'
import {useCart} from '../../hooks/CartContext'
import {Button} from '../Button'
import { Container } from './styles'
import { useNavigate } from 'react-router-dom'
export function CartResume(){
    const [deliveryTax] = useState(500)
    const {cartProducts,} = useCart()

    const navigate = useNavigate()
    const finalPrice = cartProducts.reduce((acc, current)=>{
        return current.price * current.quantity + acc
    }, 0)

    const submitOrder = async () =>{
        const products = cartProducts.map((product)=>{
            return {id: product.id, quantity: product.quantity, price: product.price}
        })
        try {
           
            const { data } = await api.post('/create-payment-intent',{products})
            navigate('/checkout', {
                state: data
            })
        } catch (error) {
            toast.error('Erro ao realizar o pedido!')
        }
       
                
    }
    
    return(
        <div>
            <Container>
                <div className="container-top">
                    <h2 className='title'>Resumo do pedido</h2>
                    <p className='items'>Itens</p>
                    <p className='items-price'>{formatPrice(finalPrice)}</p>
                    <p className='delivery-tax'>Taxa de Entrega</p>
                    <p className='delivery-tax-price'>{formatPrice(deliveryTax)}</p>
                    
                </div>
                <div className="container-bottom">
                    <p>Total</p>
                    <p>{formatPrice(finalPrice + deliveryTax)}</p>
                </div>
            </Container>
            <Button onClick={submitOrder}>Finalizar Pedido</Button>
        </div>
    )
}