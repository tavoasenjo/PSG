import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.section`
	background: tomato;
	height: 30px;
	position: absolute;
	right: 0;
	left: 0;
	bottom: 0;
	padding: 0;
	text-align: center;
	padding: 10px;
	color: white;
`;

const Footer = () => {
	return (
		<FooterSection>
			<h4>social media</h4>
		</FooterSection>
	);
};

export default Footer;
