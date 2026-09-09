import '../css/categories.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

    interface Product {
        id: number
        title: string
        price: number
        rating: number
        thumbnail: string
    }



function Categories() {
   
    const [products, setProducts] = useState<Product[]>([])

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
                {products.slice(0, 4).map((product: Product) => (
                    <div className='categorie' key={product.id}>
                        <img src={product.thumbnail} alt="image" />
                    </div>
                ))}
            </div>
            <div className="best-sellers">
                <h1>Mais Vendidos</h1>
                <div className='categories'>
                    {products.slice(4, 8).map((product: Product) => (
                        <div className="product" key={product.id}>
                            <div className="product-img">
                                <img src={product.thumbnail} alt="image" />
                            </div>
                            <div className="product-name">
                                <p className='name'>{product.title}</p>
                            </div>
                            <div className='price-rating'>
                                <p className='price'>R${product.price}</p>
                                <p className='rating'>{product.rating}</p>
                            </div>
                        </div>
                    ))}
                </div>                                  
            </div>
        </div>
    )
}

export default Categories