


function Cart() {
    return (
        <div className="cart-container">
            <div className="cart-header">
                <h1>Meu Carrinho</h1>
                <b>Ver Carrinho</b>
            </div>
            <div className="cart-products">

            </div>
            <div className="shipping">
                <div>
                    <p>Subtotal</p>
                    <p>Frete</p>
                </div>
                <div>
                    <p>R$ 10.000</p>
                    <p>Grátis</p>
                </div>
            </div>
            <div className="shipping">
                <p>Total</p>
                <p>R$ 10.000</p>
            </div>
            <div className="button-buy">
                
                <button>Finalizar Compra</button>
            </div>
        </div> 
    )
}

export default Cart