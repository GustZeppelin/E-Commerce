import '../css/featuredsection.css'
import '../css/categories.css'
import axios from 'axios'
import { useEffect, useState } from 'react'


    interface Product {
        id: number
        category: string
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

    const uniqueCategories = products.filter(
        (product, index, self) =>
            index === self.findIndex((p) => p.category === product.category)
    ).slice(0, 4);
    

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
        </div>
    )
}

export default Categories;