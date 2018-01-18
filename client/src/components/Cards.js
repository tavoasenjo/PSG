import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	text-align: center;
	flex-wrap: wrap;
	justify-content: center;
`;
const CardItem = styled.div`
	width: 33%;
	margin: 5px;
	padding: 5px 0;
	border: 1px solid black;
	height: 250px;
`;

const Cards = ({ products }) => {
	return (
		<CardContainer>
			{products.map(product =>
				<CardItem key={product.id}>
					{product.name}
				</CardItem>
			)}
		</CardContainer>
	);
};

export default Cards;
