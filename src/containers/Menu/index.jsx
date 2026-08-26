import { useEffect, useState } from "react";
import { Container, Banner, ProductsContainer, CategoryMenu, CategoryButton, BackButton } from "./styles";
import { api } from "../../services/api.js"
import { formatPrice } from "../../utils/formatPrice.js";
import { CardOffer } from "../../components/CardOffer/index.jsx";
import { useLocation, useNavigate } from "react-router-dom";

export function Menu() {

    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const navigate = useNavigate()
    const { search} = useLocation()
    
    const queryParams = new URLSearchParams(search)
    
    
    const [activeCategory, setActiveCategory] = useState(()=>{
        const categoryId = +queryParams.get('categoria')
        if (categoryId) {
            return categoryId
        }
        return 0 
    })
    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories')
            // setCategories(data)
            const newCategories = [{ id: 0, name: "Todas" }, ...data]
            setCategories(newCategories)

        }

        async function loadProducts() {
            const { data } = await api.get('/products')
            setProducts(data)

            const newProducts = data.map(product => ({
                formatedPrice: formatPrice(product.price),
                ...product
            }))
            setProducts(newProducts)

        }
        loadCategories()
        loadProducts()
    }, [])
    useEffect(() => {
        if (activeCategory === 0) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setFilteredProducts(products)
        }else{
            const newFilteredProducts = products.filter(
                product => product.category_id === activeCategory
            )
            setFilteredProducts(newFilteredProducts)
        }
    }, [products, activeCategory])
    
    return (
        <Container>
            <Banner>
                <h1>
                    O MELHOR
                    <br />
                    HAMBÚRGUER
                    <br />
                    ESTÁ AQUI!
                    <span>Esse cardápio está irresistível!</span>
                </h1>

            </Banner>
            <CategoryMenu>
                {categories.map(category => (
                    <CategoryButton
                        key={category.id}
                        $isActiveCategory={category.id === activeCategory}
                        onClick={()=> {
                            navigate(
                                {
                                    pathname: '/cardapio',
                                    search: `?categoria=${category.id}`
                                },
                                {
                                    replace: true
                                },
                                
                            )
                            setActiveCategory(category.id)
                        }}
                    >{category.name}</CategoryButton>
                ))}
            </CategoryMenu>
            <ProductsContainer>
                {filteredProducts.map((product) => (
                    <CardOffer offer={product} key={product.id}></CardOffer>
                ))}
            </ProductsContainer>
                <BackButton
                onClick={()=> {
                            navigate(-1)
                    }}
                > {"<"} Voltar</BackButton>
                
        </Container>

    )
}