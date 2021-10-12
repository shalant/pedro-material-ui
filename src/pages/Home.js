import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='home'>
            <div className='headerContainer'>
                <h1>Pedro's Pizzeria</h1>
                <p>Pizza to fit any taste</p>
                <Link>
                    <button>ORDER NOW</button>
                </Link>
            </div>
        </div>
    )
}

export default Home
