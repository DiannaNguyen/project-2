import React, { useState, useEffect } from 'react';

const adviceURL = 'https://api.quotable.io/random';

const Advice = () => {
    const [advice, setAdvice] = useState([]);

    useEffect(() => {
        // const url = `${adviceURL}.json`;

        fetch(adviceURL)
            .then((res) => res.json())
            .then((data) => {
                setAdvice(`${data.content} -${data.author}`);
            })
            .catch(console.error);
    }, []);

    if (!advice) {
        return <h2>Could not find any quotes!</h2>
    }

    return (
        <div>
            <h3>{advice.content}</h3>
            <p>{advice.author}</p>
        </div>
    );
};

export default Advice;