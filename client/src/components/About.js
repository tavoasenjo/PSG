import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
	position: absolute;
	top: 250px;
	width: 100%;
`;

const About = () => {
	return (
		<AboutContainer>
			<h1>About</h1>
		</AboutContainer>
	);
};

export default About;
