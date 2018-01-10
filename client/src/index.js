/* eslint-disable import/first */
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import materialize CSS
import 'materialize-css/dist/css/materialize.min.css';

// import components
import Header from './components/Header';
import ContactForm from './components/ContactForm';

// Dummy link
const Home = () => <h2>home</h2>;
const About = () => <h2>about</h2>;
const Contact = () => <h2>contact</h2>;

const Wrapper = styled.section`width: 100%;`;

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<BrowserRouter>
					<div>
						<Header /> {/*Header will be always visible*/}
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />
						<Route path="/contact" component={Contact} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
