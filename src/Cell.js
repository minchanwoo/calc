import React, { Component } from 'react';
import './Cell.css';

export default class Cell extends Component {
	render() {
		return (
			<div className='Cell'>
				{this.props.value}
			</div>
		)
	}
}