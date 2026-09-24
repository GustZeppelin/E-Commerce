
import Slide1 from '../assets/image-slide/image_1.jpg'
import Slide2 from '../assets/image-slide/image_2.jpg'
import RightIcon from '../assets/ChevronRight.svg'
import { useState, useEffect } from 'react'
import axios from 'axios';
interface Product {
        id: number
        category: string
        thumbnail: string

    }

function Carousel() {
    
const images = [Slide1, Slide2]
const [currentImage, setCurrentImage] = useState(0)

const nextImage = (): void =>  {
    if (currentImage === images.length-1) {
        setCurrentImage(0)
    }
    else {
        setCurrentImage(prev => prev + 1)
    }
}

const prevImage = (): void => {
    if (currentImage === 0) {
        setCurrentImage(images.length-1)
    }
    else {
        setCurrentImage(prev => prev - 1)
    }
}

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
        (product:Product, index, self) =>
            index === self.findIndex((p) => p.category === product.category)
    ).slice(0, 4);

useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentImage]);

    return (
        <div className="slide-container">
            <div className='slide'>
                <img src={images[currentImage]}/>
                <button onClick={prevImage} className='slide-btn prev'><img src={RightIcon}/></button>
                <button onClick={nextImage} className='slide-btn next'><img src={RightIcon}/></button>
            </div>
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
        </div>       
    )
}

export default Carousel