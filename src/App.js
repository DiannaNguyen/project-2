import './App.css';
import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Advice from './components/Advice';
// import Button from './components/Button';


// const key = process.env.REACT_APP_API_KEY;


function App() {

  return (
		<div className='App'>
			<nav>
				<Link to='/'>
					<h1>Tell Me Something</h1>
				</Link>
			</nav>

			<main>
				<Route path='/' exact component={Home} />
				<Route path='/advice' component={Advice} />
			</main>
		</div>
	);
}

export default App;
