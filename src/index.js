import React, { Component } from 'react';
import { render } from 'react-dom';
import ItemList from './ItemList';

class App extends Component {
  render() {
    return (
      <div>
        <ItemList />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
