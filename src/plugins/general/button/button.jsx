import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './button.css';

export default class Button extends Component{

	handleClick(){
		this.props.onClick && this.props.onClick();
	}

	render() {
		const { children, type="default", disabled } = this.props;
		return (
			<div className="button_content">
				<button 
					className={`button_btn button_${type}`}
					onClick={e => { this.handleClick(e) }}
					disabled={disabled}
				>{children}</button>
			</div>
		);
	}
};

Button.propTypes = {
	children: PropTypes.any.isRequired
}