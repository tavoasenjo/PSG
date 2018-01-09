/* eslint-disable import/first */
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Wrapper = styled.section`width: 100%;`;

// import materialize CSS
import 'materialize-css/dist/css/materialize.min.css';

// import components
import Header from './components/Header';
import ContactForm from './components/ContactForm';

class App extends React.Component {
	render() {
		return (
			<Wrapper>
				<div className="container">
					<Header />
					<ContactForm />
				</div>
			</Wrapper>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
