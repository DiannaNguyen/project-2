import React from 'react';
import { Link } from 'react-router-dom';

const Button = () => {
    <div className="quote">
		<Link to={`/advice/`}>
			<button className='button'>Click Here</button>
		</Link>
	</div>
}

export default Button;