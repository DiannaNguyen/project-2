import React, { useState, useEffect } from 'react';
import '../App.css';

const Advice = () => {
	const [quote, setQuote] = useState(' ');
	const [author, setAuthor] = useState(' ');

	useEffect(() => {
		fetch('https://api.quotable.io/random')
			.then((res) => res.json())
			.then((data) => {
				const quote = data.content;
				const author = '-' + data.author;
				setQuote(quote);
				setAuthor(author);
			})
			.catch(console.error);
	}, []);

	let getNewQuote = () => {
		fetch('https://api.quotable.io/random')
			.then((res) => res.json())
			.then((data) => {
				const quote = data.content;
				const author = '-' + data.author;
				setQuote(quote);
				setAuthor(author);
			});
	};

	return (
		<div className='quote'>
			<h1>{quote}</h1>
			<h2>{author}</h2>
			<br />
			<div className="btn">
			<button className='button' onClick={getNewQuote}>
				Try Again, Not Feeling It
			</button>
			</div>
		</div>
	);
};

export default Advice;
