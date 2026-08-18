
import { useEffect } from 'react'
import {api} from '../../services/api.js'

export function CategoriesCarousel(){
    // const [categories, setCategories] = useState([

    // ])
    useEffect(() => {
        async function loadCategories(){
            const response = await api.get('/categories')
            console.log(response)
        }
        loadCategories()
    }, [])

    return (
        <div><h1>ok</h1></div>
    )
}