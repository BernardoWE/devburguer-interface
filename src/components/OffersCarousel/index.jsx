
import { useEffect, useState } from 'react'
import {api} from '../../services/api.js'

// import Carousel from 'react-multi-carousel'
import * as MultiCarouselModule from 'react-multi-carousel'; import 'react-multi-carousel/lib/styles.css';
import { Container, Title } from './styles.js'
import { CardOffer } from '../CardOffer/index.jsx';
const Carousel = MultiCarouselModule.default?.default || MultiCarouselModule.default || MultiCarouselModule.Carousel;
export function OffersCarousel(){
    
    const [offers, setOffers] = useState([

    ])
    useEffect(() => {
        async function loadProducts(){
            const {data} = await api.get('/products')
            setOffers(data)

            const onlyOffers = data.filter(product => product.offer)
            console.log(onlyOffers)
            setOffers(onlyOffers)
           
        }
        loadProducts()
    }, [])
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000},
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1280},
            items: 4
        },
        tablet: {
            breakpoint: { max: 1280, min: 690},
            items: 3
        },
        mobile: {
            breakpoint: { max: 690, min: 0},
            items: 2
        },

    }
    // console.log(Carousel)
    return (
        <Container>
            <Title>Ofertas do dia</Title>
            <Carousel
                responsive={responsive}
                infinite={true}
                partialVisible={false}
                itemClass='carousel-item'
                
            >
                {offers.map((offer) => (

                <CardOffer key={offer.id} offer={offer}></CardOffer>

                ))}
            </Carousel>
        </Container>
    )
}