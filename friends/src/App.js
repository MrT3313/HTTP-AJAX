import React, { Component } from 'react';

import FriendsList from './Components/FriendsList'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>hello from app</h2>
        <FriendsList />
      </div>
    );
  }
}

export default App;
