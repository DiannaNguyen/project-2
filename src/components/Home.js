import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Button from './Button';

const Home = () => {
	return (
		<div className='quote'>
			<h1>Take what you need.</h1><br/>
			<Link to={`/advice/`}>
				<Button />
			</Link>
		</div>
	);
};

export default Home;
