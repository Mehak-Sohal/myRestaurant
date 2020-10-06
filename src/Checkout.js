import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import CheckoutMenuItem from './CheckoutMenuItem'
import { useStateValue } from './StateProvider'

const Checkout = () => {
    const [{ basket, user }] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout-top'>
                <div className='checkout-title'>
                    <h3><h5>Hello, {user?.email}</h5><br /> Your Order List</h3>
                </div>
                <div className='checkout-right'>
                    <Subtotal />
                </div>
            </div>

            <div className='checkout-bottom'>
                {basket?.map(item => (
                    <CheckoutMenuItem 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    />
                ))}    
            </div>   
        </div>
    )
}

export default Checkout
