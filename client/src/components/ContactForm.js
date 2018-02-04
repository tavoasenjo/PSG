import React, { Component } from 'react';
import Field from './Field';
import Button from './Button';
import styled from 'styled-components';

const ContactContainer = styled.section`
	position: absolute;
	top: 250px;
	width: 100%;
`;

class ContactForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			message: ''
		};

		this.updatedField = this.updatedField.bind(this);
	}
	// Field could be name, email or message
	//Value is whatever the user types into the input field
	updatedField(field, value) {
		this.setState({
			//note that [field] represents name, emails, message. That's why is in between []
			[field]: value
		});
	}

	render() {
		return (
			<ContactContainer>
				{/*Name field*/}
				<Field
					label="name"
					onChange={event => this.updatedField('name', event.target.value)}
					value={this.state.name}
				/>
				{/*Email field*/}
				<Field
					label="email"
					onChange={event => this.updatedField('email', event.target.value)}
					value={this.state.email}
				/>
				{/*Text Area field*/}
				<Field
					label="message"
					onChange={event => this.updatedField('message', event.target.value)}
					value={this.state.message}
					textarea={true}
				/>
				{/*submit button*/}
				<Button formValues={this.state} email="pauligonzalezincker@gmail.com" />
			</ContactContainer>
		);
	}
}

export default ContactForm;
