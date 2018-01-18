import React from 'react';

// Test bootstrap components
import { Navbar, Jumbotron, Button, Panel, Grid, Row, Col } from 'react-bootstrap';

const About = () => {
	return (
		<div>
			<Grid fluid={true}>
				<Row className="show-grid">
					<Col xs={12}>
						<p>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus.
							Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec,
							purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
							Nulla posuere.
						</p>
					</Col>
					<Col xs={6} md={4}>
						<code>
							&lt;{'Col xs={6} md={4}'} /&gt;
						</code>
					</Col>
				</Row>

				<Row className="show-grid">
					<Col xs={6} md={4}>
						<code>
							&lt;{'Col xs={6} md={4}'} /&gt;
						</code>
					</Col>
					<Col xs={6} md={4}>
						<code>
							&lt;{'Col xs={6} md={4}'} /&gt;
						</code>
					</Col>
					<Col xsHidden md={4}>
						<code>
							&lt;{'Col xsHidden md={4}'} /&gt;
						</code>
					</Col>
				</Row>

				<Row className="show-grid">
					<Col xs={6} xsOffset={6}>
						<code>
							&lt;{'Col xs={6} xsOffset={6}'} /&gt;
						</code>
					</Col>
				</Row>

				<Row className="show-grid">
					<Col md={6} mdPush={6}>
						<code>
							&lt;{'Col md={6} mdPush={6}'} /&gt;
						</code>
					</Col>
					<Col md={6} mdPull={6}>
						<code>
							&lt;{'Col md={6} mdPull={6}'} /&gt;
						</code>
					</Col>
				</Row>
			</Grid>
		</div>
	);
};

export default About;
