import './App.css';
import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Advice from './components/Advice';
// import Category from './components/Category'
// import SearchInput from'./components/SearchInput';



function App() {

  return (
		<div className='App'>
			<header className='header'>
				<Link to='/'>
					<h1>Tell Me Something</h1>
				</Link>
			</header>
			<nav>
				{/* <Link to="/category"><h1>Category</h1></Link> */}
				{/* <SearchInput/> */}
			</nav>
			<main>
				{/* <Route path="/tags" component={SearchInput} /> */}
				<Route path='/' exact component={Home} />
				<Route path='/advice' component={Advice} />
				{/* <Route path="/category" component={Category} /> */}
			</main>
		</div>
	);
}

export default App;
