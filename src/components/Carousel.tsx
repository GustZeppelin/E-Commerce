
import Batom from '../assets/image-slide/image1.jpg'
import Carrinho from '../assets/image-slide/image2.jpg'
import Espuma from '../assets/image-slide/image3.jpg'
import Mascara from '../assets/image-slide/image4.jpg'
import RightIcon from '../assets/ChevronRight.svg'
import { useState, useEffect } from 'react'


function Carousel() {
    
const images = [Batom, Carrinho, Espuma, Mascara]
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

useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentImage]);

    return (
        <div className="slide">
            <img src={images[currentImage]}/>
            <button onClick={prevImage} className='slide-btn prev'><img src={RightIcon}/></button>
            <button onClick={nextImage} className='slide-btn next'><img src={RightIcon}/></button>
        </div>       
    )
}

export default Carousel