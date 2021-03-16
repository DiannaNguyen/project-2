import './App.css';
import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Advice from './components/Advice';




function App() {

  return (
		<div className='App'>
			<header className='header'>
				<Link to='/'>
					<h1>Tell Me Something</h1>
				</Link>
			</header>
			<main>
				<Route path='/' exact component={Home} />
				<Route path='/advice' component={Advice} />
			</main>
		</div>
	);
}

export default App;
