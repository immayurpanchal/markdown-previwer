import React, { Component } from 'react';
import './App.css';
import Editor from './containers/editor';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Editor/>
      </div>
    );
  }
}

export default App;
