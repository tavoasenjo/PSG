import React from 'react';
// import materialize CSS
// import 'materialize-css/dist/css/materialize.min.css';
import styled from 'styled-components';

class Home extends React.Component {
	constructor() {
		super();
		// create state
		this.state = {
			products: []
		};
	}

	componentDidMount() {
		fetch('/api/products').then(res => res.json()).then(products => this.setState({ products }));
	}

	render() {
		return (
			<div className="row">
				{this.state.products.map(product =>
					<div className="col s12 m6 l4 card small blue-grey darken-1 white-text" key={product.id}>
						{product.name}
					</div>
				)}
			</div>
		);
	}
}

export default Home;
