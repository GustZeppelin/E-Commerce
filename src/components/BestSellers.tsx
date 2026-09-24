
import { CiStar } from "react-icons/ci";
import { useState, useEffect } from 'react';
import axios from "axios";

interface Product {
        id: number
        title: string
        price: number
        rating: number
        thumbnail: string
        category: string
        discountPercentage :number
    }

function BestSellers() {

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
         <div className="best-sellers">
                <h1>Mais Vendidos</h1>
                <div className='products'>
                    {products.slice(4, 8).map((product: Product) => (
                        <div className="product" key={product.id}>
                            {/* <div className='rating-heart'>
                                <p className='disable'><IoMdHeartEmpty /></p>
                                <p className='fav'><IoHeart /></p>
                            </div> */}
                            <div className="product-img">
                                <img src={product.thumbnail} alt="image" />
                            </div>
                            <div className="product-name">
                                <p className='name'>{product.title}</p>
                            </div>
                            <div className="div-rating">
                                <CiStar /><p className='rating'>{product.rating}</p>
                            </div>
                            <div className='price'>
                                <b className='price-value-after-discount'>R$ {(product.price - (product.price * product.discountPercentage / 100)).toFixed(2) }</b>
                                <p className='price-value'>R$ {product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>                                  
            </div>
    )
}

export default BestSellers;