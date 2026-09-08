import '../css/categories.css'
import axios from 'axios'
import { useEffect, useState } from 'react'



function Categories() {
    
    const [products, setProducts] = useState()

    const getProducts = async (): Promise<void> => {
        try {
            const response = await axios.get('https://dummyjson.com/products')
            setProducts(response.data.products)
            console.log(response.data.products[1])
        } catch (error) {
            console.error('Request failed:', error)
        }
    }
    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div className="categories-container">
            <h1>Compre por categoria</h1>
            <div className="categories">
                <div className='categorie'>{products && <img src={products[2].thumbnail}></img>}<p>Máscaras</p></div>
                <div className='categorie'>{products && <img src={products[3].thumbnail}></img>}<p>Batons</p></div>
                <div className='categorie'>{products && <img src={products[4].thumbnail}></img>}<p>Esmaltes</p></div>
                <div className='categorie'>{products && <img src={products[5].thumbnail}></img>}<p>Perfumes</p></div>
            </div>
        </div>
    )
}

export default Categories