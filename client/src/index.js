/* eslint-disable import/first */
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import materialize CSS
// import 'materialize-css/dist/css/materialize.min.css';

import WebFont from 'webfontloader';

WebFont.load({
	google: {
		families: ['Titillium Web:300,400,700', 'sans-serif']
	}
});

// import components
import Header from './components/Header';
import Home from './components/Home';
import ContactForm from './components/ContactForm';

const Wrapper = styled.section`width: 100%;`;

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
