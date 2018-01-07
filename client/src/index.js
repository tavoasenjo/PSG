/* eslint-disable import/first */
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Wrapper = styled.section`
	border: 2px solid red;
	background-color: lightblue;
	width: 100%;
`;

// import materialize CSS
import 'materialize-css/dist/css/materialize.min.css';

// import components
import Header from './components/Header';

class App extends React.Component {
	render() {
		return (
			<Wrapper>
				<div className="container">
					<Header />
				</div>
			</Wrapper>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
