import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import materialize CSS
// import 'materialize-css/dist/css/materialize.min.css';
import Logo from '../assets/LogoPau.png';

//components
import Home from './Home';
import About from './About';
import ContactForm from './ContactForm';

// css stylesheet
import '../css/styles.css';

// Styles with Styled-Components
const MainNav = styled.nav`
	margin-bottom: 50px;
	display: grid;
	grid-template-areas: "logo" "menu";
`;

const LogoPau = styled.div`
	width: 100px;
	height: 100px;
	margin: 0 auto;
	padding: 25px 0;
`;

const StyledLink = styled(Link)`
  color: #7182A4;
  font-weight: 300;
  text-transform: uppercase;
`;

const StyledUl = styled.ul`
	display: flex;
	justify-content: center;
`;

const Li = styled.li`
	padding: 20px 50px;
	font-size: 15px;
`;

class Header extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<MainNav>
						<LogoPau className="logo">
							<a href="#" className="brand-logo">
								<img src={Logo} alt="Logo Pau" />
							</a>
						</LogoPau>
						<StyledUl>
							<Li>
								<StyledLink className to="/">
									Home
								</StyledLink>
							</Li>
							<Li>
								<StyledLink to="/about">About</StyledLink>
							</Li>
							<Li>
								<StyledLink to="/contact">Contact</StyledLink>
							</Li>
						</StyledUl>
					</MainNav>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/contact" component={ContactForm} />
				</div>
			</Router>
		);
	}
}

export default Header;
