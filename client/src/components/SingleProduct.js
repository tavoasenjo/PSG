import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`margin-top: 300px;`;

export default class SingleProduct extends Component {
	render() {
		return (
			<Wrapper>
				<h2>
					Single Product Name: {this.props.match.params.name}
				</h2>
			</Wrapper>
		);
	}
}
