import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Button from './Button';

const Home = () => {
	return (
		<div className='quote'>
			<p>Take what you need.</p>
			<br />
			<Link to={`/advice/`}>
				<Button />
			</Link>
		</div>
	);
};

export default Home;
