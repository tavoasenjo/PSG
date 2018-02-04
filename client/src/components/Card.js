import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
	// if it's a small button use less padding
	padding: ${props => (props.small ? '0.25em 1em' : '0.5em 2em')};
	color: ${props => (props.small ? 'white' : 'black')};
	font-weight: ${props => (props.small ? '100' : '700')};
	margin: 5px 0;
	border: 0;
	background: #ffc600;
`;

const Card = ({ product }) => {
	return (
		<div className="card-item">
			<div className="img-card" style={{ backgroundImage: `url(${product.image})` }} />
			<h2>
				{product.name}
			</h2>
			<StyledLink to={`/product/${product.name}`}>See more</StyledLink>
			<StyledLink to="/product/:name" small>
				See more
			</StyledLink>
		</div>
	);
};

export default Card;

// NOTE: MAYBE YOU SHOULD INSTALL SLUGIFY TO CREATE STRINGS READABLES IN URLS
