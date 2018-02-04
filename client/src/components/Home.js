import React from 'react';
// import materialize CSS
// import 'materialize-css/dist/css/materialize.min.css';
import styled from 'styled-components';
import Card from './Card';

const HomeContainer = styled.section`
	position: absolute;
	top: 250px;
	width: 100%;
	// background: tomato;
`;

const Home = ({ products }) => {
	// console.log(products);
	return (
		<HomeContainer>
			<div className="cards">
				{products.map(productInfo => <Card key={productInfo.id} product={productInfo} />)}
			</div>
		</HomeContainer>
	);
};

export default Home;

