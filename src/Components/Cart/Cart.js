import React from "react";
import { useNavigate } from "react-router-dom";

import CartItem from "../CartItem/CartItem";
import './Cart.css';

function Cart (props) {
    const [isCheckoutPopupDisplayed, setCheckoutPopupDisplay] = React.useState(false);
    let navigate = useNavigate();

    const calculateTotalProductPrice = () => {
        let totalProductCost = 0;

        for( let i = 0; i < props.cartProducts.length; i++) {
            totalProductCost += props.cartProducts[i].price * props.cartProducts[i].count
        }

        return totalProductCost.toFixed(2);
    }

    const handleCheckoutPopup = () => {
        setCheckoutPopupDisplay(!isCheckoutPopupDisplayed)
    }

    const confirmPurchase = () => {
        // hide popup
        handleCheckoutPopup()
        // remove all products from cart
        props.removeAllProductsFromCart()
        // redirect the user back to the homepage
        navigate('/products')
    }

    return (
        <div>
            {/* {isCheckoutPopupDisplayed ? <div>Checkout is completed </div> : null} */}
            {isCheckoutPopupDisplayed && (
            <div className='popup'>
                <div className='popup-card'>
                    <div className='popup-card-content'>
                        <h1>Your order was finalised</h1>
                        <p>Total amount was {calculateTotalProductPrice()}</p>
                        <button onClick={confirmPurchase}>Confirm Purchase</button>
                    </div>
                </div>
            </div>
            )}
            <div className="cart-container">
                <p>Item</p>
                <div />
                <p>Price</p>
                <p>Quantity</p>
                <p>Remove</p>
                {JSON.parse(window.localStorage.getItem('cartProducts')).map(
                    (productItem) => 
                    <CartItem cartProductInfo={productItem} deleteProduct={props.deleteProduct} />
                )}
                {props.cartProducts.length ? 
                    <>Total {calculateTotalProductPrice()}</>
                    :
                    null
                }
                {props.cartProducts.length ? <button onClick={handleCheckoutPopup}>Checkout</button> : null}
            </div>
        </div>
    )
}


export default Cart;