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

const Cards = ({ products }) => {
	return (
		<div className="cards">
			{products.map(product =>
				<div className="card-item" key={product.id}>
					<div className="img-card" style={{ backgroundImage: `url(${product.image})` }} />
					<h2>
						{product.name}
					</h2>
				</div>
			)}
		</div>
	);
};

export default Cards;
