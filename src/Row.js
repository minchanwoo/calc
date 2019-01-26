import React, { Component } from 'react';
import './Row.css';

import Cell from './Cell';

export default class Row extends Component {
	render() {
		return (
			<div className='Row'>
				{this.props.values.map((value) => <Cell value={value} handleCellClick={this.props.handleCellClick} />)}
			</div>
		)
	}
}