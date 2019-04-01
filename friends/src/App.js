import React, { Component } from 'react';

import FriendsList from './Components/FriendsList'
import NewFriendForm from './Components/NewFriendForm'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>hello from app</h2>
        <NewFriendForm />
        <FriendsList />       
      </div>
    );
  }
}

export default App;
