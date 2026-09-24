import '../css/featuredsection.css'
import Carousel from './Carousel'
import Cart from './Cart'
import Categories from './Categories';


function FeaturedSection() {
    return (
        <div className='featuredsection-container'>
            <Carousel />
            <Cart />
        </div>
    )
}

export default FeaturedSection;