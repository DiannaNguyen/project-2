import React, { useState, useEffect } from 'react';
import '../App.css';

const Advice = () => {
	const [quote, setQuote] = useState(' ');
	const [author, setAuthor] = useState(' ');

	useEffect(() => {
		fetch('https://api.quotable.io/random')
			.then((res) => res.json())
			.then((data) => {
				setQuote(`${data.content}`);
				setAuthor(`-${data.author}`);
			})
			.catch(console.error);
	}, []);

	let getNewQuote = () => {
		fetch('https://api.quotable.io/random')
			.then((res) => res.json())
			.then((data) => {
                const content = data.content;
                const author = "-" + data.author;
				setQuote(content);
				setAuthor(author);
			});
	};

	return (
		<div className='quote'>
			<h1>{quote}</h1>
			<h2>{author}</h2>
			<button className='button' onClick={getNewQuote}>
				Try Again, Not Feeling It
			</button>
		</div>
	);
};

export default Advice;
