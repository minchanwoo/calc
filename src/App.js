import React, { Component } from 'react';
import './App.css';

import Row from './Row';
import Show from './Show';

class App extends Component {
  state = {
    rows: [
      [7,8,9],
      [4,5,6],
      [1,2,3],
      [0,'00', '+'],
      ['-', '*', '/']
    ],
    showValue: '',
  }

  handleCellClick = (value) => {
    this.setState({
      showValue: this.state.showValue + value,
    });
  }
  
  render() {
    return (
      <div className='App'>
        <Show showValue={this.state.showValue} />
        {this.state.rows.map((row) => <Row values={row} handleCellClick={this.handleCellClick} />)}
      </div>  
    );
  }
}

export default App;
