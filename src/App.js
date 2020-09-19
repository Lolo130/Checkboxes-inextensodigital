import React, { Component } from 'react';
import { render } from 'react-dom';
import ItemList from './ItemList';
import './style.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <ItemList />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
