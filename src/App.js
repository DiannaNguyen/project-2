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
			<footer>
				<p>
					The content on this application is sourced by the
					<a href="https://github.com/lukePeavey/quotable"> Quotable API</a>. Created 2021, Dianna Nguyen.
				</p>
			</footer>
		</div>
	);
}

export default App;
