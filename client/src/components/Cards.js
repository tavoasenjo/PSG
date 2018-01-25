import React from 'react';
import styled from 'styled-components';

// const CardContainer = styled.div`
// 	display: flex;
// 	flex-direction: row;
// 	align-items: center;
// 	text-align: center;
// 	flex-wrap: wrap;
// 	justify-content: center;
// `;
// const CardItem = styled.div`
// 	width: 33%;
// 	margin: 5px;
// 	padding: 5px 0;
// 	border: 1px solid black;
// 	height: 250px;
// `;

const Button = styled.button`
	// if it's a small button use less padding
	padding: ${props => (props.small ? '0.25em 1em' : '0.5em 2em')};
	color: ${props => (props.small ? 'white' : 'black')};
	font-weight: ${props => (props.small ? '300' : '700')};
	margin: 5px 0;
	border: 0;
	background: #ffc600;
`;

const Cards = ({ products }) => {
	return (
		<div className="cards">
			{products.map(product =>
				<div className="card-item" key={product.id}>
					<div className="img-card" style={{ backgroundImage: `url(${product.image})` }} />
					<h2>
						{product.name}
					</h2>
					<Button>See more</Button>
					<Button small>See more</Button>
				</div>
			)}
		</div>
	);
};

export default Cards;
