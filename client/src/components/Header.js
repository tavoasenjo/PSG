import React from 'react';
// import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import materialize CSS
import 'materialize-css/dist/css/materialize.min.css';

//components
import Home from './Home';
import About from './About';
import ContactForm from './ContactForm';

class Header extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<nav>
						<div className="nav-wrapper">
							<a href="#" className="brand-logo">
								Logo
							</a>
							<ul id="nav-mobile" className="right hide-on-med-and-down">
								<li>
									<Link to="/">Home</Link>
								</li>
								<li>
									<Link to="/about">About</Link>
								</li>
								<li>
									<Link to="/contact">Contact</Link>
								</li>
							</ul>
						</div>
					</nav>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/contact" component={ContactForm} />
				</div>
			</Router>
		);
	}
}

export default Header;
