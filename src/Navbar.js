import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const Navbar = () => {
    const [{ basket, user }] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className='navbar'>
            <Link to='/'> 
            <img className='navbar-logo' src='images/logo.png' alt="logo" />
            <strong>MyRestaurant</strong>
            </Link>
        
        <div className='navbar-nav'>

            <div className='navbar-option'>
                <Link to='/' className='navbar-option'> Home
                </Link>
            </div>

            <div className='navbar-option'>
                <Link to='/menu' className='navbar-option'> Menu
                </Link>
            </div>

            <div className='navbar-option'>
                <Link to='/about' className='navbar-option'> About
                </Link>
            </div>

            <div className='navbar-option'>
                <Link to='/contact' className='navbar-option'> Contact
                </Link>
            </div>

            <div className='navbar-option'>
                <Link to='/orders' className='navbar-option'> Your Order
                </Link>    
            </div>

            <div className='navbar-option'>
            <Link to={!user && '/login'} className='navbar-option'>
            <div onClick={handleAuthentication} className='navbar-option'>
                <span className='navbar-optionLineOne'>Hello {user ? user?.email : 'Guest'}</span>
                <span className='navbar-optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
            </div>
            </Link>
            </div>   

            <div className='navbar-optionBasket'>
                <Link to='/Checkout' className='navbar-optionBasket'>
                <ShoppingBasketIcon />
                </Link>
            <span className='header-optionLineTwo header-basketCount'>{basket?.length}</span>
            </div>
        </div>
    </div>
    )
}

export default Navbar;
