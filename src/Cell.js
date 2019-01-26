import React, { Component } from 'react';
import './Cell.css';

export default class Cell extends Component {
	render() {
		return (
			<div className='Cell' onClick={() => this.props.handleCellClick(this.props.value)}>
				{this.props.value}
			</div>
		)
	}
}