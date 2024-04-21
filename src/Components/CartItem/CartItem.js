import './CartItem.css';

export default function CartItem (props) {
    return (
        <>
            <img className='cart-item-image' src={props.cartProductInfo.image} alt={props.cartProductInfo.title} />
            <h1 className='cart-item-title'>{props.cartProductInfo.title}</h1>
            <p>{props.cartProductInfo.price} €</p>
            <p>{props.cartProductInfo.count}</p>
            <button 
                className='cart-item-button' 
                onClick={() => props.deleteProduct(props.cartProductInfo)}
            >
                Delete Product
            </button>
        </>
    )
}