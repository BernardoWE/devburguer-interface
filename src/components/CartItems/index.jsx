import { Table } from '../index'
import { useCart } from '../../hooks/CartContext'
import { formatPrice } from '../../utils/formatPrice'
import { ButtonGroup, DeleteProductButton, ProductImage } from './styles'
import trash from '../../assets/trash.svg'

export function CartItems(){

    const {cartProducts, increaseProduct, decreaseProduct, deleteProduct} = useCart()
    return (
        <Table.Root>
            <Table.Header>
                <Table.Tr>
                    <Table.Th></Table.Th>
                    <Table.Th>Itens</Table.Th>
                    <Table.Th>Preço</Table.Th>
                    <Table.Th>Quantidade</Table.Th>
                    <Table.Th>Total</Table.Th>
                    <Table.Th></Table.Th>
                </Table.Tr>
            </Table.Header>
            <Table.Body>
                {cartProducts?.length ? cartProducts.map( (product) => (
                    <Table.Tr key={product.id}>
                        <Table.Td>
                            <ProductImage src={product.url} alt="" />
                        </Table.Td>
                        <Table.Td>
                            {product.name}
                        </Table.Td>
                        <Table.Td>
                            {product.formatedPrice}
                        </Table.Td>
                        <Table.Td>
                            <ButtonGroup>
                                <button onClick={()=> decreaseProduct(product.id)}>
                                    -
                                </button>
                                {product.quantity}
                                <button onClick={()=> increaseProduct(product.id)}>
                                    +
                                </button>
                            </ButtonGroup>
                        </Table.Td>
                        
                        <Table.Td style={{fontWeight: 'bold',}}>
                            {formatPrice(product.quantity * product.price)}
                        </Table.Td>
                        <Table.Td>
                            <DeleteProductButton onClick={()=> deleteProduct(product.id)}><img src={trash} alt="" /></DeleteProductButton>
                        </Table.Td>
                    </Table.Tr>
                )

                ): (
                     <Table.Tr>
                        <Table.Td>
                            Carrinho Vazio
                       
                        </Table.Td>
                    </Table.Tr>
                )}
            </Table.Body>
        </Table.Root>
    )
}