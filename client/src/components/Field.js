import React from 'react';
import PropTypes from 'prop-types';

const Field = props => {
	return (
		<div>
			<label>
				{props.onChange}
			</label>
			<input onChange={props.onChange} type={props.textarea ? 'textarea' : 'text'} value={props.value} />
		</div>
	);
};

Field.propTypes = {
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	textarea: PropTypes.bool.isRequired
};

Field.defaultProps = {
	textarea: false
};

export default Field;
