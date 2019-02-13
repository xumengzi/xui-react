import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default class Input extends Component{
	render() {
		const { type="text", label, maxlength, required, placeholder, readonly, disabled} = this.props;
		return (
			<div className="input_content">
				{
					label && <label className={"input_label " + (required ? 'input_required' : '')}>{label}:</label>
				}
				<input
					type={type} 
					className={"input_target " + (readonly || disabled ? 'input_noinput' : '')}
					maxLength={maxlength}
					placeholder={placeholder}
					readOnly={readonly}
					disabled={disabled}
					required={required}
				/>
			</div>
		);
	}
};

Input.propTypes = {
	label: PropTypes.string
}