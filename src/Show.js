import React, { Component } from 'react';
import './Show.css';

export default class Show extends Component {
	render() {
		return (
			<div className='Show'>
				{this.props.showValue}
			</div>
		);
	}
}