import React from 'react';

class Home extends React.Component {
	constructor() {
		super();
		// create state
		this.state = {
			products: []
		};
	}

	componentDidMount(){
		fetch('/api/products').then(res => res.json())
		.then(products => this.setState({products}));
	}

	render() {
		return (
			<div>
				<ul>
					{this.state.products.map(product => 
						<li key={product.id}>{product.name}</li>
					)}
				</ul>
			</div>
		);
	}
}

export default Home;
