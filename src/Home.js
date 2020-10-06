import React from 'react'
import './Home.css'


const Home = () => {
    return (
        <div className='home'>
            <div className='home-container'>
                <img className='home-image' src='/images/banner.jpg' alt='' />
                <p className='home-imageText'>WELCOME TO MyRESTAURANT</p>

                <div className='home-row'>
                <div className='home-card'>
                    <a href='/menu#snacks'>
                    <img className='home-cardImage' src='/images/snacks.jpg' alt='' />
                    <h2 className='home-cardImageText'>Snacks</h2>
                    </a>
                </div>

                <div className='home-card'>
                    <a href='/menu#desserts'>
                    <img className='home-cardImage' src='/images/desserts.jpg' alt='' />
                    <h2 className='home-cardImageText'>Desserts</h2>
                    </a>
                </div>

                <div className='home-card'>
                    <a href='/menu#mocktails'>
                    <img className='home-cardImage' src='/images/mocktails.jpg' alt='' />
                    <h2 className='home-cardImageText'>Mocktails</h2>
                    </a>
                </div>
                </div>
            </div>
        </div>

    )
}

export default Home
