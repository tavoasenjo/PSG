import React from 'react';
// import materialize CSS
// import 'materialize-css/dist/css/materialize.min.css';
import styled from 'styled-components';

import Cards from './Cards';

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
		const { products } = this.state;
		return (
			<div className="row">
				<Cards products={products} />
			</div>
		);
	}
}

export default Home;
