import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="quote">
            <h1>Take what you need.</h1>
            <Link to={`/advice/`} style={{ textDecoration : "none" }}>
                <button className='button'>Start Here</button>
            </Link>
        </div>
    );
};

export default Home;



// Reference: Inline style for textDecoration: https://stackoverflow.com/questions/53428528/how-to-remove-the-text-decoration-of-react-link
