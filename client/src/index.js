/* eslint-disable import/first */
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import materialize CSS
import 'materialize-css/dist/css/materialize.min.css';

// import components
import Header from './components/Header';
import Home from './components/Home';
import ContactForm from './components/ContactForm';

const Wrapper = styled.section`width: 100%;`;

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<Header />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
