import React from 'react'
import './CheckoutMenuItem.css'
import { useStateValue } from './StateProvider'

const CheckoutMenuItem = ({ id, title, image, price, hideButton }) => {

    const [{}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    };

    return (
        <div className='checkoutMenuItem'>
            <img className='checkoutMenuItem-image' src={image} alt='' />

            <div className='checkoutMenuItem-info'>
                <p className='checkoutMenuItem-title'>{title}</p>
                <p className='checkoutMenuItem-price'><small>$</small>
                <strong>{price}</strong>
                </p>
                {!hideButton && (
                 <button onClick={removeFromBasket}>Remove from Basket</button>
                )}    
            </div>
        </div>
    )
}

export default CheckoutMenuItem
