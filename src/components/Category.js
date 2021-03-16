import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

const Category = () => {
    const [content, setContent] = useState(null);

	useEffect(() => {
        // const tags = tags([]);
		fetch(`https://api.quotable.io/quotes?tags=`)
			.then((res) => res.json())
			.then((data) => {
                setContent((data.tags))
                console.log(data);
			})
			.catch(console.error);
	}, []);

	return (
		<div className="quote">
			<p>{content}</p>
		</div>
	);
};

export default Category;
