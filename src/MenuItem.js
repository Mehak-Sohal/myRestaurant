import React from 'react'
import './MenuItem.css'
import { useStateValue } from './StateProvider'

const MenuItem = ({ id, title, price, image, info }) => {
    const [{}, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id, title, price, image, 
            }
        });
    }

    return (
        <div className='menuitem'>
            <img className='menuitem-image' src={image} alt='' />

            <div className='menuitem-dish'>
                <p className='menuitem-title'>{title}</p>
                <p className='menuitem-price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <p className='menuitem-info'>{info}</p>

            <button onClick={addToBasket}>Order</button>
          </div> 
        </div>
    )
}

export default MenuItem
