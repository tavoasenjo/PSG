import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//components
import Home from './Home';

// Dummy link
const About = () => <h2>about</h2>;
const Contact = () => <h2>contact</h2>;

class Header extends React.Component {
	render() {
		return (
			<div>
				<h2>This is the Header!!!</h2>
				<Router>
					<div>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/about">About</Link>
							</li>
							<li>
								<Link to="/contact">Contact</Link>
							</li>
							<Route exact path="/" component={Home} />
							<Route exact path="/about" component={About} />
							<Route exact path="/contact" component={Contact} />
						</ul>
					</div>
				</Router>
			</div>
		);
	}
}

export default Header;
