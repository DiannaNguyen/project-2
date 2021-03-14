import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="quote">
            <h1>Take what you need.</h1>
            <Link to={`/advice/`}>
            <button className='button'>Click Here</button>
            </Link>
        </div>
    );
};

export default Home;