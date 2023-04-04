import cart from './assets/cart.svg'

const CartWidget = () =>{
    return(
        <div className='row'>
            <img src={cart} alt='cart' className='carrito img-fluid' />
            <p>1</p>
        </div>
    )
}

export default CartWidget