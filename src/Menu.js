import React from 'react'
import MenuItem from './MenuItem'
import './Menu.css'

const Menu = () => {
    return (
        <div className='menu'>
            <section id='snacks'>
            <h2>Snacks</h2>
            <div className='menu-row'>
                    <MenuItem 
                        id={1}
                        title='Fries' 
                        price={4.99} 
                        info='Our seasoned crispy fries. Served with a side of our Tandoori Aioli for dipping each salty, crispy fry! ' 
                        image='/images/fries.jpg' />
                    <MenuItem
                        id={2} 
                        title='Chicken Wings' 
                        price={12.99} 
                        info='These firecracker chicken wings are marinated and deep fried then tossed in our sweet and spicy Ting Tang Sauce. Fries not included.' 
                        image='/images/wings.jpg' />
                    <MenuItem 
                        id={3}
                        title='Burger' 
                        price={8.79} 
                        info='Spiced with curry leaves and mustard seeds and fried until crispy on the outside but soft on the inside, it’s topped with tomato, lettuce, onion, sautéed onion, tamarind chutney and sambal oelek' 
                        image='/images/burger.jpg' />
                    <MenuItem 
                        id={4}
                        title='Samosa' 
                        price={7.99} 
                        info='Our light and flakey signature pastry, a family recipe, is filled with original creative stuffings. This is not your typical triangle. Check in-store for today’s featured flavours as they change daily!' 
                        image='/images/samosa.jpg' />
                </div>
                </section>

                <section id='desserts'>
                <h2>Desserts</h2>
                  <div className='menu-row'>
                    <MenuItem
                        id={5}
                        title='Gulab Jamun' 
                        price={5.99} 
                        info='Gulab jamun is a traditional Indian dessert, known as "Queen of Indian sweets". This red-brown coloured sweet balls are made with khoya (or milk solid), fried golden and finally dipped in saffron induced sugar syrup.' 
                        image='/images/gulabJamun.jpg' />
                    <MenuItem
                        id={6}
                        title='Jalebi' 
                        price={6.99} 
                        info='Jalebi, is an Indian and Arabic sweet made by deep-frying maida flour batter in pretzel or circular shapes, which are then soaked in sugar syrup.' 
                        image='/images/jalebi.jpg' />
                    <MenuItem
                        id={7}
                        title='Halwa' 
                        price={4.99} 
                        info='Indian sweet made with ground almonds, sugar, ghee & cardamom. it is extremely rich in flavor & delicious.' 
                        image='/images/halwa.jpg' />
                </div>
                </section>
                
                <section id='mocktails'>
                <h2>Mocktails</h2>
                <div className='menu-row'>
                <MenuItem
                    id={8}
                    title='Mango Mocktail' 
                    price={5.99} 
                    info='A Mango Mojito Mocktail is tangy, bright made with fresh ingredients. This is the ultimate summer refresher. ' 
                    image='/images/mangoMocktail.jpg' />
                <MenuItem
                    id={9}
                    title='Tropical Mocktail' 
                    price={6.99} 
                    info='This Tropical Mocktail is made up of fruits, herbs, and seltzer to make an easy and refreshing low calorie drink!' 
                    image='/images/tropicalMocktail.jpg' />
                <MenuItem
                    id={10}
                    title='Strawberry Mocktail' 
                    price={5.99} 
                    info='Refreshing summertime mocktail, kid-friendly and so delicious made with fresh strawberries.' 
                    image='/images/strawberryMocktail.jpg' />
                </div>
                </section>
        </div>
    )
}

export default Menu
