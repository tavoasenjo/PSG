import React from 'react';

class Home extends React.Component {
	constructor() {
		super();
		// create state
		this.state = {
			products: []
		};
	}

	render() {
		return (
			<div>
				<h4>This is where the cards will be placed</h4>
			</div>
		);
	}
}

export default Home;
