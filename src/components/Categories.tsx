import '../css/categories.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
import { IoHeart } from "react-icons/io5";
import { CiStar } from "react-icons/ci";

    interface Product {
        id: number
        title: string
        price: number
        rating: number
        thumbnail: string
        category: string
        discountPercentage :number
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

    const uniqueCategories = products.filter(
        (product, index, self) =>
            index === self.findIndex((p) => p.category === product.category)
    ).slice(0, 4);
    
    const applyDiscount = (product: Product) => {
        const discount = (product.price * product.discountPercentage) / 100
    } 

    return (
        <div className="categories-container">
            <h1>Compre por categoria</h1>
            <div className="categories">
                {uniqueCategories.map((product: Product) => (
                    <div className='categorie' key={product.id}>
                        <img src={product.thumbnail} alt="image" />
                        <p>{product.category}</p>
                    </div>
                ))}
            </div>
            <div className="best-sellers">
                <h1>Mais Vendidos</h1>
                <div className='categories'>
                    {products.slice(4, 8).map((product: Product) => (
                        <div className="product" key={product.id}>
                            <div className='rating-heart'>
                                <p className='disable'><IoMdHeartEmpty /></p>
                                <p className='fav'><IoHeart /></p>
                            </div>
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
        </div>
    )
}

export default Categories