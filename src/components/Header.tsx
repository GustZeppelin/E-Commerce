import '../css/header.css'
import { FaRegUser } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";

function Header() {
    return (
        <div className="header-container">
            <div className='header'>
      <div className="title">
        <h1>ShopHub</h1>
      </div>
      <div className="search">
        <input placeholder='Buscar produtos...' type="text" />
        <button><IoSearchOutline /></button>
      </div>
      <div className="buttons">
        <button><FaRegUser className='header-icons'/>Entrar</button>
        <button><IoMdHeartEmpty className='header-icons'/>Favoritos</button>
        <button><MdOutlineShoppingCart className='header-icons'/>Carrinho</button>
      </div>
    </div>
    <div className="subheader">
      <div className='select-page'>
        <h1 className='select'>Início</h1>
        <h1 className='no-select'>Categorias</h1>
        <h1 className='no-select'>Lançamentos</h1>
        <h1 className='no-select'>Promoções</h1>
        <h1 className='no-select'>Mais vendidos</h1>
      </div>
    </div>
        </div>
    )
}

export default Header