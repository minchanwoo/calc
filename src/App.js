import React, { Component } from 'react';
import './App.css';

import Row from './Row';
class App extends Component {
  state = {
    rows: [
      [7,8,9],
      [4,5,6],
      [1,2,3],
      [0,'00', '+'],
      ['-', '*', '/']
    ],
  }
  
  render() {
    return (
      <div className='App'>
        {this.state.rows.map((row) => <Row values={row} />)}
      </div>  
    );
  }
}

export default App;
