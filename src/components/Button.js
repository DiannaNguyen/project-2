// // import React from 'react';
// import React, { useState, useEffect } from 'react';
// import Advice from './Advice';

// const Button = () => {
//     const [quote, setQuote] = useState("");
    
// 	useEffect(() => {
//         const url = 'https://api.quotable.io/random';
// 		fetch(url)
// 			.then((res) => res.json())
// 			.then((quote) => {
// 				setQuote(`${quote.content} -${quote.author}`);
// 			})
// 			.catch(console.error);
// 	}, []);

//     return (
// 			<div>
// 				<h1>{quote.content}</h1>
// 				<h3>{quote.author}</h3>
//                 <button onClick={Advice}>Get New Quote</button>
// 			</div>
// 		);
// };

// export default Button;