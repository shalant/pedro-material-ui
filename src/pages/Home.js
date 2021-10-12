import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/pizza.jpeg';

function Home() {
    return (
        <div className='home'>
            <div 
                className='headerContainer' 
                style={{ backgroundImage: `url(${BannerImage})` }} 
            >
                <h1>Pedro's Pizzeria</h1>
                <p>Pizza to fit any taste</p>
                <Link to='/menu'>
                    <button>ORDER NOW</button>
                </Link>
            </div>
        </div>
    )
}

export default Home
