import '../css/header.css'


function Header() {
    return (
        <div className="header-container">
            <div className='header'>
      <div className="title">
        <h1>ShopHub</h1>
      </div>
      <div className="search">
        <input placeholder='Buscar produtos...' type="text" />
      </div>
      <div className="buttons">
        <button>Entrar</button>
        <button>Favoritos</button>
        <button>Carrinho</button>
      </div>
    </div>
    <div className="subheader">
      <div className='select-page'>
        <h1>Início</h1>
        <h1>Categorias</h1>
        <h1>Lançamentos</h1>
        <h1>Promoções</h1>
        <h1>Mais vendidos</h1>
      </div>
    </div>
        </div>
    )
}

export default Header