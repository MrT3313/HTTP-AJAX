// IMPORT DEPENDENCIES
  import React, { Component } from 'react';
  
// Material UI
import { Paper } from '@material-ui/core';

// AXIOS
  import axios from 'axios'

// Components
  import Form from './components/form'
  import FriendsList from './components/friendsList'

// ** -- ** CODE START ** -- ** //
// ** -- ** CODE START ** -- ** //


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      friends: []
    }
  }
  
  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then( res => {
        this.setState({
          friends: [...res.data]
        })
      })
      .catch( err => {
        alert('TOTAL FAILURE -- ABANDON SHIP!!!!')
      })
  }
  render() {
    return (
      <div className="App">
        <Paper elevation={1}>
            <Form />
            <FriendsList />
        </Paper>
      </div>
    );
  }
}

export default App;
